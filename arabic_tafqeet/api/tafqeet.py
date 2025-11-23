import frappe


@frappe.whitelist()
def get_tafqeet(amount):
	"""
	Convert numeric amount to Arabic words (Tafqeet) - API endpoint
	"""
	units = ["", "واحد", "اثنان", "ثلاثة", "أربعة", "خمسة", "ستة", "سبعة", "ثمانية", "تسعة"]
	units_feminine = ["", "واحدة", "اثنتان", "ثلاث", "أربع", "خمس", "ست", "سبع", "ثمان", "تسع"]
	tens = ["", "عشرة", "عشرون", "ثلاثون", "أربعون", "خمسون", "ستون", "سبعون", "ثمانون", "تسعون"]
	teens_feminine = ["عشرة", "إحدى عشرة", "اثنتا عشرة", "ثلاث عشرة", "أربع عشرة", "خمس عشرة", "ست عشرة", "سبع عشرة", "ثماني عشرة", "تسع عشرة"]
	teens_masculine = ["عشرة", "أحد عشر", "اثنا عشر", "ثلاثة عشر", "أربعة عشر", "خمسة عشر", "ستة عشر", "سبعة عشر", "ثمانية عشر", "تسعة عشر"]

	def convert_hundreds(n, feminine=False):
		if n == 0:
			return ""
		h = n // 100
		t = (n % 100) // 10
		u = n % 10
		parts = []

		hundreds = ["", "مائة", "مائتان", "ثلاثمائة", "أربعمائة", "خمسمائة", "ستمائة", "سبعمائة", "ثمانمائة", "تسعمائة"]
		if h > 0 and h < len(hundreds):
			parts.append(hundreds[h])

		if t == 1 and u > 0:
			if u < len(teens_feminine) and u < len(teens_masculine):
				parts.append(teens_feminine[u] if feminine else teens_masculine[u])
		else:
			if u > 0:
				if u < len(units_feminine) and u < len(units):
					parts.append(units_feminine[u] if feminine else units[u])
			if t > 0 and t < len(tens):
				if u > 0 and len(parts) > 0:
					parts[-1] = parts[-1] + " و" + tens[t]
				else:
					parts.append(tens[t])

		return " و".join(parts)

	def convert_thousands(n):
		th = n // 1000
		rest = n % 1000
		parts = []

		if th > 0:
			if th == 1:
				parts.append("ألف")
			elif th == 2:
				parts.append("ألفان")
			elif 3 <= th <= 10 and th < len(units):
				parts.append(units[th] + " آلاف")
			else:
				parts.append(convert_hundreds(th) + " ألف")
		
		if rest > 0:
			rest_str = convert_hundreds(rest)
			if rest_str:
				parts.append(rest_str)
		
		return " و".join(parts)

	def convert_millions(n):
		mil = n // 1000000
		rest = n % 1000000
		parts = []

		if mil > 0:
			if mil == 1:
				parts.append("مليون")
			elif mil == 2:
				parts.append("مليونان")
			elif 3 <= mil <= 10 and mil < len(units):
				parts.append(units[mil] + " ملايين")
			else:
				parts.append(convert_hundreds(mil) + " مليون")
		
		if rest > 0:
			rest_str = convert_thousands(rest)
			if rest_str:
				parts.append(rest_str)
		
		return " و".join(parts)

	def convert_billions(n):
		bil = n // 1000000000
		rest = n % 1000000000
		parts = []

		if bil > 0:
			if bil == 1:
				parts.append("مليار")
			elif bil == 2:
				parts.append("ملياران")
			elif 3 <= bil <= 10 and bil < len(units):
				parts.append(units[bil] + " مليارات")
			else:
				parts.append(convert_hundreds(bil) + " مليار")
		
		if rest > 0:
			rest_str = convert_millions(rest)
			if rest_str:
				parts.append(rest_str)
		
		return " و".join(parts)

	try:
		if amount is None:
			return {"tafqeet": "صفر ريال سعودي فقط لا غير"}
		
		amount = float(amount)
		
		if amount <= 0:
			return {"tafqeet": "صفر ريال سعودي فقط لا غير"}
		
		whole = int(amount)
		frac = int(round((amount - whole) * 100))
	except (ValueError, TypeError, AttributeError):
		return {"tafqeet": "صفر ريال سعودي فقط لا غير"}

	parts = []
	if whole == 0:
		parts.append("صفر")
	elif whole < 1000:
		parts.append(convert_hundreds(whole))
	elif whole < 1000000:
		parts.append(convert_thousands(whole))
	elif whole < 1000000000:
		parts.append(convert_millions(whole))
	elif whole < 1000000000000:
		parts.append(convert_billions(whole))
	else:
		return {"tafqeet": "مبلغ كبير جداً"}

	parts.append("ريال سعودي")

	if frac > 0:
		if frac < 10:
			if frac == 1:
				parts.append("و هللة واحدة")
			elif frac == 2:
				parts.append("و هللتان")
			elif frac < len(units_feminine):
				parts.append("و " + units_feminine[frac] + " هللات")
		elif frac < 20:
			frac_mod = frac % 10
			if frac_mod < len(teens_feminine):
				parts.append("و " + teens_feminine[frac_mod] + " هللة")
		else:
			t = frac // 10
			u = frac % 10
			if t < len(tens):
				if u == 0:
					parts.append("و " + tens[t] + " هللة")
				elif u < len(units_feminine):
					parts.append("و " + units_feminine[u] + " و" + tens[t] + " هللة")

	parts.append("فقط لا غير")
	tafqeet_text = " ".join(parts)
	
	return {"tafqeet": tafqeet_text}

