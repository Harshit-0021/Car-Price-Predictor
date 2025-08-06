from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
import os
from model.logger import save_user_input
from model.load_model import load_model
from model.predict import preprocess_input, predict_price

app = Flask(__name__)
CORS(app)

app.run(debug=True, host='0.0.0.0', port=int(os.environ.get("PORT", 5000)))

model = load_model()
print("✅ Model loaded successfully.")

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        input_df = preprocess_input(data, model)
        predicted_price = predict_price(input_df, model)

        save_user_input(data, predicted_price)

        return jsonify({'predicted_price': float(predicted_price)})
    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    print(f"📁 Running in: {os.getcwd()}")
    app.run(debug=True)
