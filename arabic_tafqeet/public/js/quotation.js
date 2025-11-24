// Copyright (c) 2025, Arabic Tafqeet and contributors
// License: MIT

frappe.ui.form.on('Quotation', {
	refresh: function(frm) {
		update_tafqeet_if_changed(frm);
	},
	grand_total: function(frm) {
		update_tafqeet_if_changed(frm);
	}
});

frappe.ui.form.on('Quotation Item', {
	items_add: function(frm) {
		setTimeout(function() { update_tafqeet_if_changed(frm); }, 500);
	},
	items_remove: function(frm) {
		setTimeout(function() { update_tafqeet_if_changed(frm); }, 500);
	},
	amount: function(frm) {
		setTimeout(function() { update_tafqeet_if_changed(frm); }, 500);
	},
	rate: function(frm) {
		setTimeout(function() { update_tafqeet_if_changed(frm); }, 500);
	},
	qty: function(frm) {
		setTimeout(function() { update_tafqeet_if_changed(frm); }, 500);
	}
});

function update_tafqeet_if_changed(frm) {
	if (frm.doc.grand_total && frm.doc.grand_total > 0) {
		var current_value = frm.doc.grand_total;
		var previous_value = frm._previous_grand_total || 0;
		
		if (current_value !== previous_value) {
			frappe.call({
				method: 'arabic_tafqeet.api.tafqeet.get_tafqeet',
				args: { amount: current_value },
				callback: function(r) {
					if (r.message && r.message.tafqeet) {
						frm.set_value('custom_tafqeet_amount', r.message.tafqeet);
					}
				}
			});
			frm._previous_grand_total = current_value;
		}
	}
}

