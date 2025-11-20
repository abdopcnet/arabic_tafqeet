app_name = "arabic_tafqeet"
app_title = "Arabic Tafqeet"
app_publisher = "abdopcnet"
app_description = "Arabic Tafqeet"
app_email = "abdocpnet@gmail.com"
app_license = "mit"

# Apps
# ------------------

# required_apps = []

# Each item in the list will be shown as an app in the apps page
# add_to_apps_screen = [
# 	{
# 		"name": "arabic_tafqeet",
# 		"logo": "/assets/arabic_tafqeet/logo.png",
# 		"title": "Arabic Tafqeet",
# 		"route": "/arabic_tafqeet",
# 		"has_permission": "arabic_tafqeet.api.permission.has_app_permission"
# 	}
# ]

# Includes in <head>
# ------------------

# include js, css files in header of desk.html
# app_include_css = "/assets/arabic_tafqeet/css/arabic_tafqeet.css"
# app_include_js = "/assets/arabic_tafqeet/js/arabic_tafqeet.js"

# include js, css files in header of web template
# web_include_css = "/assets/arabic_tafqeet/css/arabic_tafqeet.css"
# web_include_js = "/assets/arabic_tafqeet/js/arabic_tafqeet.js"

# include custom scss in every website theme (without file extension ".scss")
# website_theme_scss = "arabic_tafqeet/public/scss/website"

# include js, css files in header of web form
# webform_include_js = {"doctype": "public/js/doctype.js"}
# webform_include_css = {"doctype": "public/css/doctype.css"}

# include js in page
# page_js = {"page" : "public/js/file.js"}

# include js in doctype views
doctype_js = {
	"Currency": "public/js/currency.js"
}
# doctype_list_js = {"doctype" : "public/js/doctype_list.js"}
# doctype_tree_js = {"doctype" : "public/js/doctype_tree.js"}
# doctype_calendar_js = {"doctype" : "public/js/doctype_calendar.js"}

# Svg Icons
# ------------------
# include app icons in desk
# app_include_icons = "arabic_tafqeet/public/icons.svg"

# Home Pages
# ----------

# application home page (will override Website Settings)
# home_page = "login"

# website user home page (by Role)
# role_home_page = {
# 	"Role": "home_page"
# }

# Generators
# ----------

# automatically create page for each record of this doctype
# website_generators = ["Web Page"]

# Jinja
# ----------

# add methods and filters to jinja environment
# jinja = {
# 	"methods": "arabic_tafqeet.utils.jinja_methods",
# 	"filters": "arabic_tafqeet.utils.jinja_filters"
# }

# Installation
# ------------

# before_install = "arabic_tafqeet.install.before_install"
# after_install = "arabic_tafqeet.install.after_install"

# Uninstallation
# ------------

# before_uninstall = "arabic_tafqeet.uninstall.before_uninstall"
# after_uninstall = "arabic_tafqeet.uninstall.after_uninstall"

# Integration Setup
# ------------------
# To set up dependencies/integrations with other apps
# Name of the app being installed is passed as an argument

# before_app_install = "arabic_tafqeet.utils.before_app_install"
# after_app_install = "arabic_tafqeet.utils.after_app_install"

# Integration Cleanup
# -------------------
# To clean up dependencies/integrations with other apps
# Name of the app being uninstalled is passed as an argument

# before_app_uninstall = "arabic_tafqeet.utils.before_app_uninstall"
# after_app_uninstall = "arabic_tafqeet.utils.after_app_uninstall"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

# notification_config = "arabic_tafqeet.notifications.get_notification_config"

# Permissions
# -----------
# Permissions evaluated in scripted ways

# permission_query_conditions = {
# 	"Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }
#
# has_permission = {
# 	"Event": "frappe.desk.doctype.event.event.has_permission",
# }

# DocType Class
# ---------------
# Override standard doctype classes

# override_doctype_class = {
# 	"ToDo": "custom_app.overrides.CustomToDo"
# }

# Document Events
# ---------------
# Hook on document methods and events

# doc_events = {
# 	"*": {
# 		"on_update": "method",
# 		"on_cancel": "method",
# 		"on_trash": "method"
# 	}
# }

# Scheduled Tasks
# ---------------

# scheduler_events = {
# 	"all": [
# 		"arabic_tafqeet.tasks.all"
# 	],
# 	"daily": [
# 		"arabic_tafqeet.tasks.daily"
# 	],
# 	"hourly": [
# 		"arabic_tafqeet.tasks.hourly"
# 	],
# 	"weekly": [
# 		"arabic_tafqeet.tasks.weekly"
# 	],
# 	"monthly": [
# 		"arabic_tafqeet.tasks.monthly"
# 	],
# }

# Testing
# -------

# before_tests = "arabic_tafqeet.install.before_tests"

# Overriding Methods
# ------------------------------
#
# override_whitelisted_methods = {
# 	"frappe.desk.doctype.event.event.get_events": "arabic_tafqeet.event.get_events"
# }
#
# each overriding function accepts a `data` argument;
# generated from the base implementation of the doctype dashboard,
# along with any modifications made in other Frappe apps
# override_doctype_dashboards = {
# 	"Task": "arabic_tafqeet.task.get_dashboard_data"
# }

# exempt linked doctypes from being automatically cancelled
#
# auto_cancel_exempted_doctypes = ["Auto Repeat"]

# Ignore links to specified DocTypes when deleting documents
# -----------------------------------------------------------

# ignore_links_on_delete = ["Communication", "ToDo"]

# Request Events
# ----------------
# before_request = ["arabic_tafqeet.utils.before_request"]
# after_request = ["arabic_tafqeet.utils.after_request"]

# Job Events
# ----------
# before_job = ["arabic_tafqeet.utils.before_job"]
# after_job = ["arabic_tafqeet.utils.after_job"]

# User Data Protection
# --------------------

# user_data_fields = [
# 	{
# 		"doctype": "{doctype_1}",
# 		"filter_by": "{filter_by}",
# 		"redact_fields": ["{field_1}", "{field_2}"],
# 		"partial": 1,
# 	},
# 	{
# 		"doctype": "{doctype_2}",
# 		"filter_by": "{filter_by}",
# 		"partial": 1,
# 	},
# 	{
# 		"doctype": "{doctype_3}",
# 		"strict": False,
# 	},
# 	{
# 		"doctype": "{doctype_4}"
# 	}
# ]

# Authentication and authorization
# --------------------------------

# auth_hooks = [
# 	"arabic_tafqeet.auth.validate"
# ]

# Automatically update python controller files with type annotations for this app.
# export_python_type_annotations = True

# default_log_clearing_doctypes = {
# 	"Logging DocType Name": 30  # days to retain logs
# }

fixtures = [
    {"doctype": "Client Script", "filters": [["module", "=", "Arabic Tafqeet"]]},
    {"doctype": "Server Script", "filters": [["module", "=", "Arabic Tafqeet"]]},
]
