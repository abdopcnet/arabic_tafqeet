# Copyright (c) 2025, Arabic Tafqeet and contributors
# License: MIT

import frappe
import os
from frappe import _


@frappe.whitelist()
def ensure_saudi_riyal_symbol_files():
	"""Ensure Saudi Riyal Symbol SVG files are uploaded to File doctype"""
	
	files_to_check = [
		{
			"file_name": "Saudi_Riyal_Symbol.svg",
			"file_url": "/files/Saudi_Riyal_Symbol.svg"
		},
		{
			"file_name": "Saudi_Riyal_Symbol_green.svg",
			"file_url": "/files/Saudi_Riyal_Symbol_green.svg"
		}
	]
	
	app_path = frappe.get_app_path("arabic_tafqeet")
	js_path = os.path.join(app_path, "public", "js")
	
	uploaded_files = []
	
	for file_info in files_to_check:
		# Check if file exists in File doctype
		file_exists = frappe.db.exists("File", {
			"file_name": file_info["file_name"]
		}) or frappe.db.exists("File", {
			"file_url": file_info["file_url"]
		})
		
		if not file_exists:
			# Read file from public/js folder
			file_path = os.path.join(js_path, file_info["file_name"])
			
			if os.path.exists(file_path):
				try:
					# Read file content
					with open(file_path, "rb") as f:
						content = f.read()
					
					# Create File document
					file_doc = frappe.get_doc({
						"doctype": "File",
						"file_name": file_info["file_name"],
						"file_url": file_info["file_url"],
						"is_private": 0,
						"folder": "Home"
					})
					file_doc.content = content
					file_doc.insert(ignore_permissions=True)
					
					uploaded_files.append(file_info["file_name"])
				except Exception as e:
					return {
						"success": False,
						"error": str(e)
					}
			else:
				return {
					"success": False,
					"error": f"File not found: {file_path}"
				}
	
	return {
		"success": True,
		"uploaded_files": uploaded_files,
		"message": f"Uploaded {len(uploaded_files)} file(s)"
	}

