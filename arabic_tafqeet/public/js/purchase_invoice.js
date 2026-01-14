// Copyright (c) 2025, Arabic Tafqeet and contributors
// License: MIT

frappe.ui.form.on('Purchase Invoice', {
	refresh(frm) {
		// Update tafqeet when document is opened
		if (frm.doc.docstatus === 0 && frm.doc.base_grand_total) {
			applyTafqeet(frm);
		}
	},
	base_grand_total(frm) {
		// Update tafqeet when base grand total changes
		if (frm.doc.docstatus === 0 && frm.doc.base_grand_total) {
			applyTafqeet(frm);
		}
	},
	custom_base_currency(frm) {
		// Update tafqeet when base currency changes
		if (frm.doc.docstatus === 0 && frm.doc.base_grand_total) {
			applyTafqeet(frm);
		}
	},
	validate(frm) {
		// Update tafqeet before save
		if (frm.doc.docstatus === 0 && frm.doc.base_grand_total) {
			const amount = frm.doc.base_grand_total;
			const currency = frm.doc.custom_base_currency;
			if (amount != null) {
				frm.doc.custom_tafqeet_amount = tafqeetArabic(amount, currency);
			}
		}
	},
});

function applyTafqeet(frm) {
	if (!frm || !frm.doc) return;
	if (frm.doc.docstatus !== 0) return; // Only for draft documents
	const amount = frm.doc.base_grand_total;
	const currency = frm.doc.custom_base_currency;
	if (amount == null) return;
	frm.set_value('custom_tafqeet_amount', tafqeetArabic(amount, currency));
}
