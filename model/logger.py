import os
import json
import gspread
from google.oauth2.service_account import Credentials
from datetime import datetime

SCOPES = [
    "https://www.googleapis.com/auth/spreadsheets",
    "https://www.googleapis.com/auth/drive"
]

# 🔐 Load credentials from environment variable
SERVICE_ACCOUNT_INFO = os.getenv("GOOGLE_CREDS_JSON")

if SERVICE_ACCOUNT_INFO:
    service_account_info = json.loads(SERVICE_ACCOUNT_INFO)
    creds = Credentials.from_service_account_info(service_account_info, scopes=SCOPES)
    client = gspread.authorize(creds)

    SPREADSHEET_ID = "10AUSGaWkeAymwKzR9q5V7RWnhzWxM5F7v5Je0cKH2Jk"
    SHEET_NAME = "Sheet1"
    sheet = client.open_by_key(SPREADSHEET_ID).worksheet(SHEET_NAME)

    HEADER = [
        "Timestamp", "Company", "Model", "Year", "Kilometer", "Fuel Type",
        "Transmission", "Location", "Color", "Owner",
        "Engine_cc", "Seating Capacity", "Fuel Tank Capacity",
        "Predicted Price"
    ]

    def save_user_input(data: dict, predicted_price: float):
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

else:
    print("⚠️ Google service account credentials not found. Logging disabled.")

    def save_user_input(data: dict, predicted_price: float):
        # Do nothing or log to a file locally
        print("Logging skipped (no credentials).")
