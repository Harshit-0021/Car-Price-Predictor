import pickle

def load_model(model_path='xgb_car_model.pkl'):
    with open(model_path, 'rb') as file:
        model = pickle.load(file)
    return model
