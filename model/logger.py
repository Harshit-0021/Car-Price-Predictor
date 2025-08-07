import gspread
from google.oauth2.service_account import Credentials
from datetime import datetime

# Define the scope
SCOPES = [
    "https://www.googleapis.com/auth/spreadsheets",
    "https://www.googleapis.com/auth/drive"
]

# Path to your service account credentials
SERVICE_ACCOUNT_FILE = "credentials.json"

# Create credentials using google-auth
creds = Credentials.from_service_account_file(SERVICE_ACCOUNT_FILE, scopes=SCOPES)

# Authorize with gspread
client = gspread.authorize(creds)

# Google Sheet setup
SPREADSHEET_ID = "10AUSGaWkeAymwKzR9q5V7RWnhzWxM5F7v5Je0cKH2Jk"
SHEET_NAME = "Sheet1"  # Instead of "logger-service-account"
sheet = client.open_by_key(SPREADSHEET_ID).worksheet(SHEET_NAME)

# Column headers (only added if sheet is empty)
HEADER = [
    "Timestamp", "Company", "Model", "Year", "Kilometer", "Fuel Type",
    "Transmission", "Location", "Color", "Owner",
    "Engine_cc", "Seating Capacity", "Fuel Tank Capacity",
    "Predicted Price"
]

def save_user_input(data: dict, predicted_price: float):
    # Add header if sheet is empty
    if not sheet.get_all_values():
        sheet.append_row(HEADER)

    # Format the new row to insert
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

    # Append to Google Sheet
    sheet.append_row(row)
