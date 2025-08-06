import pandas as pd
from preprocess.preprocessing import null_fill

EXPECTED_COLUMNS = [
    'Company', 'Model', 'Year', 'Kilometer', 'Fuel Type',
    'Transmission', 'Location', 'Color', 'Owner',
    'Engine_cc', 'Seating Capacity', 'Fuel Tank Capacity'
]


def preprocess_input(data, model):
    filled_data = null_fill(data)

    key_map = {
        'company': 'Company',
        'model': 'Model',
        'fuelType': 'Fuel Type',
        'transmission': 'Transmission',
        'location': 'Location',
        'color': 'Color',
        'owner': 'Owner',
        'Seating Capacity': 'Seating Capacity',
        'Engine_cc': 'Engine_cc',
        'Fuel Tank Capacity': 'Fuel Tank Capacity'
    }
    filled_data = {key_map.get(k, k): v for k, v in filled_data.items()}

    # Create DataFrame
    input_df = pd.DataFrame([filled_data], columns=EXPECTED_COLUMNS)

    # Convert numerics
    numeric_columns = ['Year', 'Kilometer', 'Engine_cc', 'Seating Capacity', 'Fuel Tank Capacity']
    for col in numeric_columns:
        input_df[col] = pd.to_numeric(input_df[col], errors='coerce')

    # One-hot encode
    cat_cols = ['Company', 'Model', 'Fuel Type', 'Transmission', 'Location', 'Color', 'Owner']
    input_df = pd.get_dummies(input_df, columns=cat_cols, drop_first=True)

    # Align with training columns
    model_columns = model.get_booster().feature_names
    input_df = input_df.reindex(columns=model_columns, fill_value=0)

    return input_df


def predict_price(input_df, model):
    return model.predict(input_df)[0] - 130000  # your adjustment logic
