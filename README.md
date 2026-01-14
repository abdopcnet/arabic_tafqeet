# Arabic Tafqeet

![Version](https://img.shields.io/badge/version-15.1.2026-blue)


Arabic Tafqeet (تفقيط) app for Frappe/ERPNext that converts numeric amounts to Arabic words in Saudi Riyal format.

## Features

- Converts numeric amounts to Arabic text (Tafqeet)
- Supports Saudi Riyal currency
- Automatically sets tafqeet amount on Sales Invoice, Purchase Invoice, Quotation, and Sales Order
- Handles whole numbers and fractions (Halala)

## Installation

This app is installed as part of your Frappe bench.

## Usage

The app automatically converts the `grand_total` field to Arabic text and stores it in the `custom_tafqeet_amount` field on the following doctypes:

- Sales Invoice
- Purchase Invoice
- Quotation
- Sales Order

The conversion happens during the `before_validate` event.

## License

Please refer to the LICENSE file.

