// Copyright (c) 2025, Arabic Tafqeet and contributors
// License: MIT

frappe.ui.form.on('Sales Invoice', {
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
	currency(frm) {
		// Update tafqeet when currency changes
		if (frm.doc.docstatus === 0 && frm.doc.base_grand_total) {
			applyTafqeet(frm);
		}
	},
	validate(frm) {
		// Update tafqeet before save (direct assignment to avoid infinite loop)
		if (frm.doc.docstatus === 0 && frm.doc.base_grand_total) {
			const amount = frm.doc.base_grand_total;
			const currency = frm.doc.currency;
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
	const currency = frm.doc.currency;
	if (amount == null) return;
	frm.set_value('custom_tafqeet_amount', tafqeetArabic(amount, currency));
}
