import os
import json
import gspread
from google.oauth2.service_account import Credentials
from datetime import datetime

# Define the required Google API scopes
SCOPES = [
    "https://www.googleapis.com/auth/spreadsheets",
    "https://www.googleapis.com/auth/drive"
]

# 🔐 Get the full service account JSON string from env variable
SERVICE_ACCOUNT_JSON = os.getenv("GOOGLE_CREDS_JSON")

# Spreadsheet details
SPREADSHEET_ID = "10AUSGaWkeAymwKzR9q5V7RWnhzWxM5F7v5Je0cKH2Jk"
SHEET_NAME = "Sheet1"

# Define the headers for the spreadsheet
HEADER = [
    "Timestamp", "Company", "Model", "Year", "Kilometer", "Fuel Type",
    "Transmission", "Location", "Color", "Owner",
    "Engine_cc", "Seating Capacity", "Fuel Tank Capacity",
    "Predicted Price"
]

# 🔐 Connect to Google Sheets using credentials from env
if SERVICE_ACCOUNT_JSON:
    try:
        service_account_info = json.loads(SERVICE_ACCOUNT_JSON)
        creds = Credentials.from_service_account_info(service_account_info, scopes=SCOPES)
        client = gspread.authorize(creds)
        sheet = client.open_by_key(SPREADSHEET_ID).worksheet(SHEET_NAME)

        def save_user_input(data: dict, predicted_price: float):
            # Add header if sheet is empty
            if not sheet.get_all_values():
                sheet.append_row(HEADER)

            row = [
                datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
                data.get('company'),
                data.get('model'),
                data.get('Year'),
                data.get('Kilometer'),
                data.get('fuelType'),
                data.get('transmission'),
                data.get('location'),
                data.get('color'),
                data.get('owner'),
                data.get('Engine_cc'),
                data.get('Seating Capacity'),
                data.get('Fuel Tank Capacity'),
                round(predicted_price)
            ]

            sheet.append_row(row)

    except Exception as e:
        print("❌ Error authorizing with Google Sheets:", e)

        def save_user_input(data: dict, predicted_price: float):
            print("⚠️ Logging failed due to auth error:", e)

else:
    print("⚠️ GOOGLE_CREDS_JSON environment variable not found.")

    def save_user_input(data: dict, predicted_price: float):
        print("⚠️ Logging skipped (credentials not found).")
