// Copyright (c) 2025, Arabic Tafqeet and contributors
// License: MIT

frappe.ui.form.on('Sales Invoice', {
	refresh(frm) {
		// تحديث التفقيط عند فتح المستند
		if (frm.doc.docstatus === 0 && frm.doc.grand_total) {
			applyTafqeet(frm);
		}
	},
	grand_total(frm) {
		// تحديث التفقيط عند تغيير الإجمالي
		if (frm.doc.docstatus === 0 && frm.doc.grand_total) {
			applyTafqeet(frm);
		}
	},
	validate(frm) {
		// تحديث التفقيط قبل الحفظ (تعديل مباشر لتجنب حلقة لا نهائية)
		if (frm.doc.docstatus === 0 && frm.doc.grand_total) {
			const amount = frm.doc.grand_total;
			if (amount != null) {
				frm.doc.custom_tafqeet_amount = tafqeetArabic(amount);
			}
		}
	}
});

function applyTafqeet(frm) {
	if (!frm || !frm.doc) return;
	if (frm.doc.docstatus !== 0) return; // فقط في المسودة
	const amount = frm.doc.grand_total;
	if (amount == null) return;
	frm.set_value('custom_tafqeet_amount', tafqeetArabic(amount));
}

// دالة التفقيط (ريال سعودي / هللة)
function tafqeetArabic(amount) {
	let num = Number(amount);
	if (isNaN(num)) return "صفر ريال سعودي فقط لا غير";
	num = Math.round(num * 100) / 100;

	const units  = ["", "واحد", "اثنان", "ثلاثة", "أربعة", "خمسة", "ستة", "سبعة", "ثمانية", "تسعة"];
	const tens   = ["", "عشرة", "عشرون", "ثلاثون", "أربعون", "خمسون", "ستون", "سبعون", "ثمانون", "تسعون"];
	const teensM = ["عشرة","أحد عشر","اثنا عشر","ثلاثة عشر","أربعة عشر","خمسة عشر","ستة عشر","سبعة عشر","ثمانية عشر","تسعة عشر"];

	const whole = Math.floor(num);
	const frac  = Math.round((num - whole) * 100);

	function convertHundreds(n){
		const hundreds = ["","مائة","مائتان","ثلاثمائة","أربعمائة","خمسمائة","ستمائة","سبعمائة","ثمانمائة","تسعمائة"];
		let h=Math.floor(n/100), t=Math.floor((n%100)/10), u=n%10, parts=[];
		if(h) parts.push(hundreds[h]);
		if(t===1 && u>0){
			parts.push(teensM[u]);
		} else {
			if(u>0) parts.push(units[u]);
			if(t>0){
				if(u>0) parts[parts.length-1] = parts[parts.length-1] + " و" + tens[t];
				else parts.push(tens[t]);
			}
		}
		return parts.filter(Boolean).join(" و");
	}
	function convertThousands(n){
		const th=Math.floor(n/1000), rest=n%1000, parts=[];
		if(th>0){
			if(th===1) parts.push("ألف");
			else if(th===2) parts.push("ألفان");
			else if(th>=3 && th<=10) parts.push(units[th]+" آلاف");
			else parts.push(convertHundreds(th)+" ألف");
		}
		if(rest>0) parts.push(convertHundreds(rest));
		return parts.filter(Boolean).join(" و");
	}
	function convertMillions(n){
		const mil=Math.floor(n/1_000_000), rest=n%1_000_000, parts=[];
		if(mil>0){
			if(mil===1) parts.push("مليون");
			else if(mil===2) parts.push("مليونان");
			else if(mil>=3 && mil<=10) parts.push(units[mil]+" ملايين");
			else parts.push(convertHundreds(mil)+" مليون");
		}
		if(rest>0) parts.push(convertThousands(rest));
		return parts.filter(Boolean).join(" و");
	}
	function convertBillions(n){
		const bil=Math.floor(n/1_000_000_000), rest=n%1_000_000_000, parts=[];
		if(bil>0){
			if(bil===1) parts.push("مليار");
			else if(bil===2) parts.push("ملياران");
			else if(bil>=3 && bil<=10) parts.push(units[bil]+" مليارات");
			else parts.push(convertHundreds(bil)+" مليار");
		}
		if(rest>0) parts.push(convertMillions(rest));
		return parts.filter(Boolean).join(" و");
	}

	let main;
	if(whole===0) main="صفر";
	else if(whole<1_000) main=convertHundreds(whole);
	else if(whole<1_000_000) main=convertThousands(whole);
	else if(whole<1_000_000_000) main=convertMillions(whole);
	else if(whole<1_000_000_000_000) main=convertBillions(whole);
	else return "مبلغ كبير جداً";

	const parts=[main,"ريال سعودي"];

	if(frac>0){
		if(frac<10){
			if(frac===1) parts.push("و هللة واحدة");
			else if(frac===2) parts.push("و هللتان");
			else parts.push("و "+units[frac]+" هللات");
		} else if(frac<20){
			parts.push("و "+teensM[frac%10]+" هللة");
		} else {
			const t=Math.floor(frac/10), u=frac%10;
			if(u===0) parts.push("و "+tens[t]+" هللة");
			else parts.push("و "+units[u]+" و"+tens[t]+" هللة");
		}
	}

	parts.push("فقط لا غير");
	return parts.join(" ");
}
