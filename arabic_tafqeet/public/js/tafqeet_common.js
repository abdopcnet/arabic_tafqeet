// Copyright (c) 2025, Arabic Tafqeet and contributors
// License: MIT

// Currency dictionary with Arabic names and fraction units
const CURRENCY_NAMES = {
	USD: { name: 'دولار امريكي', fraction: 'سنت', fractionPlural: 'سنتات' },
	EGP: { name: 'جنيه مصري', fraction: 'قرش', fractionPlural: 'قروش' },
	SAR: { name: 'ريال سعودي', fraction: 'هللة', fractionPlural: 'هللات' },
	AED: { name: 'درهم اماراتي', fraction: 'فلس', fractionPlural: 'فلوس' },
	KWD: { name: 'دينار كويتي', fraction: 'فلس', fractionPlural: 'فلوس' },
	BHD: { name: 'دينار بحريني', fraction: 'فلس', fractionPlural: 'فلوس' },
	OMR: { name: 'ريال عماني', fraction: 'بيسة', fractionPlural: 'بيسات' },
	QAR: { name: 'ريال قطري', fraction: 'درهم', fractionPlural: 'دراهم' },
	JOD: { name: 'دينار اردني', fraction: 'قرش', fractionPlural: 'قروش' },
	LBP: { name: 'ليرة لبنانية', fraction: 'قرش', fractionPlural: 'قروش' },
	SYP: { name: 'ليرة سورية', fraction: 'قرش', fractionPlural: 'قروش' },
	GBP: { name: 'جنيه استرليني', fraction: 'بنس', fractionPlural: 'بنسات' },
	EUR: { name: 'يورو', fraction: 'سنت', fractionPlural: 'سنتات' },
	INR: { name: 'روبية هندية', fraction: 'بيزة', fractionPlural: 'بيزات' },
	PKR: { name: 'روبية باكستانية', fraction: 'بيزة', fractionPlural: 'بيزات' },
	TRY: { name: 'ليرة تركية', fraction: 'قروش', fractionPlural: 'قروش' },
	CNY: { name: 'يوان صيني', fraction: 'فن', fractionPlural: 'فنات' },
	JPY: { name: 'ين ياباني', fraction: 'سين', fractionPlural: 'سينات' },
	AUD: { name: 'دولار استرالي', fraction: 'سنت', fractionPlural: 'سنتات' },
	CAD: { name: 'دولار كندي', fraction: 'سنت', fractionPlural: 'سنتات' },
	CHF: { name: 'فرنك سويسري', fraction: 'رابين', fractionPlural: 'رابينات' },
	NZD: { name: 'دولار نيوزيلندي', fraction: 'سنت', fractionPlural: 'سنتات' },
	ZAR: { name: 'راند جنوب افريقي', fraction: 'سنت', fractionPlural: 'سنتات' },
	SEK: { name: 'كرونة سويدية', fraction: 'اور', fractionPlural: 'اورات' },
	NOK: { name: 'كرونة نرويجية', fraction: 'اور', fractionPlural: 'اورات' },
	DKK: { name: 'كرونة دنماركية', fraction: 'اور', fractionPlural: 'اورات' },
	PLN: { name: 'زلوتي بولندي', fraction: 'جروش', fractionPlural: 'جروشات' },
	RUB: { name: 'روبل روسي', fraction: 'كوبيك', fractionPlural: 'كوبيكات' },
	BRL: { name: 'ريال برازيلي', fraction: 'سنتافو', fractionPlural: 'سنتافوس' },
	MXN: { name: 'بيزو مكسيكي', fraction: 'سنتافو', fractionPlural: 'سنتافوس' },
	ARS: { name: 'بيزو ارجنتيني', fraction: 'سنتافو', fractionPlural: 'سنتافوس' },
	ILS: { name: 'شيكل اسرائيلي', fraction: 'اغورة', fractionPlural: 'اغورات' },
	TND: { name: 'دينار تونسي', fraction: 'مليم', fractionPlural: 'مليمات' },
	DZD: { name: 'دينار جزائري', fraction: 'سنتيم', fractionPlural: 'سنتيمات' },
	MAD: { name: 'درهم مغربي', fraction: 'سنتيم', fractionPlural: 'سنتيمات' },
	SDG: { name: 'جنيه سوداني', fraction: 'قرش', fractionPlural: 'قروش' },
	YER: { name: 'ريال يمني', fraction: 'فلس', fractionPlural: 'فلوس' },
	IQD: { name: 'دينار عراقي', fraction: 'فلس', fractionPlural: 'فلوس' },
	IRR: { name: 'ريال ايراني', fraction: 'دينار', fractionPlural: 'دينارات' },
	AFN: { name: 'افغاني', fraction: 'بول', fractionPlural: 'بولات' },
	BDT: { name: 'تاكا بنغلاديشي', fraction: 'بيزة', fractionPlural: 'بيزات' },
	MMK: { name: 'كيات ميانماري', fraction: 'بيا', fractionPlural: 'بيات' },
	THB: { name: 'باخت تايلندي', fraction: 'ساتانج', fractionPlural: 'ساتانجات' },
	VND: { name: 'دونج فيتنامي', fraction: 'شاو', fractionPlural: 'شاوات' },
	IDR: { name: 'روبية اندونيسية', fraction: 'سين', fractionPlural: 'سينات' },
	MYR: { name: 'رينجيت ماليزي', fraction: 'سين', fractionPlural: 'سينات' },
	SGD: { name: 'دولار سنغافوري', fraction: 'سنت', fractionPlural: 'سنتات' },
	HKD: { name: 'دولار هونج كونج', fraction: 'سنت', fractionPlural: 'سنتات' },
	KRW: { name: 'وون كوري', fraction: 'جون', fractionPlural: 'جونات' },
	PHP: { name: 'بيزو فلبيني', fraction: 'سنتافو', fractionPlural: 'سنتافوس' },
	NGN: { name: 'نايرا نيجيرية', fraction: 'كوبو', fractionPlural: 'كوبوات' },
	KES: { name: 'شلن كيني', fraction: 'سنت', fractionPlural: 'سنتات' },
	ETB: { name: 'بير اثيوبي', fraction: 'سنت', fractionPlural: 'سنتات' },
	UGX: { name: 'شلن اوجندي', fraction: 'سنت', fractionPlural: 'سنتات' },
	TZS: { name: 'شلن تنزاني', fraction: 'سنت', fractionPlural: 'سنتات' },
	RWF: { name: 'فرنك رواندي', fraction: 'سنتيم', fractionPlural: 'سنتيمات' },
	GHS: { name: 'سيدي غاني', fraction: 'بيسوا', fractionPlural: 'بيسوات' },
	XOF: { name: 'فرنك غرب افريقي', fraction: 'سنتيم', fractionPlural: 'سنتيمات' },
	XAF: { name: 'فرنك وسط افريقي', fraction: 'سنتيم', fractionPlural: 'سنتيمات' },
	EGY: { name: 'جنيه مصري', fraction: 'قرش', fractionPlural: 'قروش' },
};

// Get currency information
function getCurrencyInfo(currencyCode) {
	if (!currencyCode) {
		return { name: 'ريال سعودي', fraction: 'هللة', fractionPlural: 'هللات' };
	}
	return (
		CURRENCY_NAMES[currencyCode] || {
			name: currencyCode,
			fraction: 'جزء',
			fractionPlural: 'أجزاء',
		}
	);
}

// Dynamic tafqeet function
function tafqeetArabic(amount, currencyCode) {
	let num = Number(amount);
	const currencyInfo = getCurrencyInfo(currencyCode);

	if (isNaN(num)) {
		return `صفر ${currencyInfo.name} فقط لا غير`;
	}
	num = Math.round(num * 100) / 100;

	const units = ['', 'واحد', 'اثنان', 'ثلاثة', 'أربعة', 'خمسة', 'ستة', 'سبعة', 'ثمانية', 'تسعة'];
	const tens = [
		'',
		'عشرة',
		'عشرون',
		'ثلاثون',
		'أربعون',
		'خمسون',
		'ستون',
		'سبعون',
		'ثمانون',
		'تسعون',
	];
	const teensM = [
		'عشرة',
		'أحد عشر',
		'اثنا عشر',
		'ثلاثة عشر',
		'أربعة عشر',
		'خمسة عشر',
		'ستة عشر',
		'سبعة عشر',
		'ثمانية عشر',
		'تسعة عشر',
	];

	const whole = Math.floor(num);
	const frac = Math.round((num - whole) * 100);

	function convertHundreds(n) {
		const hundreds = [
			'',
			'مائة',
			'مائتان',
			'ثلاثمائة',
			'أربعمائة',
			'خمسمائة',
			'ستمائة',
			'سبعمائة',
			'ثمانمائة',
			'تسعمائة',
		];
		let h = Math.floor(n / 100),
			t = Math.floor((n % 100) / 10),
			u = n % 10,
			parts = [];
		if (h) parts.push(hundreds[h]);
		if (t === 1 && u > 0) {
			parts.push(teensM[u]);
		} else {
			if (u > 0) parts.push(units[u]);
			if (t > 0) {
				if (u > 0) parts[parts.length - 1] = parts[parts.length - 1] + ' و' + tens[t];
				else parts.push(tens[t]);
			}
		}
		return parts.filter(Boolean).join(' و');
	}
	function convertThousands(n) {
		const th = Math.floor(n / 1000),
			rest = n % 1000,
			parts = [];
		if (th > 0) {
			if (th === 1) parts.push('ألف');
			else if (th === 2) parts.push('ألفان');
			else if (th >= 3 && th <= 10) parts.push(units[th] + ' آلاف');
			else parts.push(convertHundreds(th) + ' ألف');
		}
		if (rest > 0) parts.push(convertHundreds(rest));
		return parts.filter(Boolean).join(' و');
	}
	function convertMillions(n) {
		const mil = Math.floor(n / 1_000_000),
			rest = n % 1_000_000,
			parts = [];
		if (mil > 0) {
			if (mil === 1) parts.push('مليون');
			else if (mil === 2) parts.push('مليونان');
			else if (mil >= 3 && mil <= 10) parts.push(units[mil] + ' ملايين');
			else parts.push(convertHundreds(mil) + ' مليون');
		}
		if (rest > 0) parts.push(convertThousands(rest));
		return parts.filter(Boolean).join(' و');
	}
	function convertBillions(n) {
		const bil = Math.floor(n / 1_000_000_000),
			rest = n % 1_000_000_000,
			parts = [];
		if (bil > 0) {
			if (bil === 1) parts.push('مليار');
			else if (bil === 2) parts.push('ملياران');
			else if (bil >= 3 && bil <= 10) parts.push(units[bil] + ' مليارات');
			else parts.push(convertHundreds(bil) + ' مليار');
		}
		if (rest > 0) parts.push(convertMillions(rest));
		return parts.filter(Boolean).join(' و');
	}

	let main;
	if (whole === 0) main = 'صفر';
	else if (whole < 1_000) main = convertHundreds(whole);
	else if (whole < 1_000_000) main = convertThousands(whole);
	else if (whole < 1_000_000_000) main = convertMillions(whole);
	else if (whole < 1_000_000_000_000) main = convertBillions(whole);
	else return 'مبلغ كبير جداً';

	const parts = [main, currencyInfo.name];

	if (frac > 0) {
		if (frac < 10) {
			if (frac === 1) parts.push(`و ${currencyInfo.fraction} واحدة`);
			else if (frac === 2) {
				// Dual form based on currency type
				if (currencyInfo.fraction === 'هللة') parts.push('و هللتان');
				else if (currencyInfo.fraction === 'قرش') parts.push('و قرشان');
				else if (currencyInfo.fraction === 'سنت') parts.push('و سنتان');
				else if (currencyInfo.fraction === 'فلس') parts.push('و فلسان');
				else parts.push(`و ${currencyInfo.fraction}ان`);
			} else parts.push(`و ${units[frac]} ${currencyInfo.fractionPlural}`);
		} else if (frac < 20) {
			parts.push(`و ${teensM[frac % 10]} ${currencyInfo.fraction}`);
		} else {
			const t = Math.floor(frac / 10),
				u = frac % 10;
			if (u === 0) parts.push(`و ${tens[t]} ${currencyInfo.fraction}`);
			else parts.push(`و ${units[u]} و${tens[t]} ${currencyInfo.fraction}`);
		}
	}

	parts.push('فقط لا غير');
	return parts.join(' ');
}
