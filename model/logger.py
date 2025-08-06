# model/logger.py

import csv
import os
from datetime import datetime

CSV_FILE = 'user_inputs.csv'

def save_user_input(data: dict, predicted_price: float):
    file_exists = os.path.isfile(CSV_FILE)

    with open(CSV_FILE, mode='a', newline='', encoding='utf-8') as file:
        writer = csv.writer(file)

        # Write header only once
        if not file_exists:
            writer.writerow([
                "Timestamp", "Company", "Model", "Year", "Kilometer", "Fuel Type",
                "Transmission", "Location", "Color", "Owner",
                "Engine_cc", "Seating Capacity", "Fuel Tank Capacity",
                "Predicted Price"
            ])

        writer.writerow([
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
        ])
