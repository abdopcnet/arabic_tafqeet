// Copyright (c) 2025, Arabic Tafqeet and contributors
// License: MIT

frappe.ui.form.on("Currency", {
	async refresh(frm) {
		// Only show button for SAR currency
		if (frm.doc.name === "SAR") {
			// Ensure SVG files are uploaded using server method
			await ensure_svg_files_uploaded();
			
			// Check current symbol to determine button state
			const isBlack = frm.doc.symbol && frm.doc.symbol.includes("Saudi_Riyal_Symbol.svg");
			const isGreen = frm.doc.symbol && frm.doc.symbol.includes("Saudi_Riyal_Symbol_green.svg");
			
			// Determine button label and action
			let buttonLabel, symbolPath;
			if (isGreen) {
				// Currently green, next click should be black
				buttonLabel = "Saudi Riyal Symbol Black";
				symbolPath = "/files/Saudi_Riyal_Symbol.svg";
			} else {
				// Currently black or no symbol, next click should be green
				buttonLabel = "Saudi Riyal Symbol Green";
				symbolPath = "/files/Saudi_Riyal_Symbol_green.svg";
			}
			
			// Add custom button
			frm.add_custom_button(buttonLabel, function() {
				// Set all required fields
				frm.set_value("fraction", "halala");
				frm.set_value("fraction_units", 100);
				frm.set_value("smallest_currency_fraction_value", 0.01);
				frm.set_value("symbol", `<img src="${symbolPath}" style="height: 1.25em; width: 1.5em !important; vertical-align: middle;">`);
				frm.set_value("symbol_on_right", 0);
				frm.set_value("number_format", "#,###.##");
				
				// Save the form
				frm.save();
			}, __("Actions"));
		}
	}
});

// Function to ensure SVG files are uploaded using server method
async function ensure_svg_files_uploaded() {
	try {
		const result = await frappe.call({
			method: "arabic_tafqeet.api.currency.ensure_saudi_riyal_symbol_files"
		});
		
		if (result.message && result.message.success) {
			if (result.message.uploaded_files && result.message.uploaded_files.length > 0) {
				console.log(`Uploaded files: ${result.message.uploaded_files.join(", ")}`);
			}
		} else if (result.message && result.message.error) {
			console.warn(`Error uploading files: ${result.message.error}`);
		}
	} catch (error) {
		console.error("Error ensuring SVG files are uploaded:", error);
	}
}

