"""
Preprocessing utilities for car price prediction
"""


def null_fill(data):
    """
    Fill null values with appropriate defaults
    This function can be customized based on your specific preprocess needs
    """
    # Define default values for different columns
    defaults = {
        'Company': 'Unknown',
        'Model': 'Unknown',
        'Year': 2000,
        'Kilometer': 50000,
        'Fuel Type': 'Petrol',
        'Transmission': 'Manual',
        'Location': 'Delhi',
        'Color': 'White',
        'Owner': 'First',
        'Engine_cc': 1500,
        'Seating Capacity': 5,
        'Fuel Tank Capacity': 45
    }

    # Fill null values with defaults
    for key, default_value in defaults.items():
        if key in data and (data[key] is None or data[key] == '' or data[key] == 0):
            data[key] = default_value

    return data