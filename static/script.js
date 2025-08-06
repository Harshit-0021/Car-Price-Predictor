// Car data with models grouped by company
const carData = {
'Audi': ['A3 35', 'A3 40', 'A4 1.8', 'A4 2.0', 'A4 30', 'A4 35', 'A4 Premium', 'A6 2.0', 'A6 3.0', 'A6 35', 'A6 Technology', 'A7 Sportback', 'A8 3.0', 'Q2 Premium', 'Q3 2.0', 'Q3 30', 'Q3 35', 'Q5 2.0', 'Q5 3.0', 'Q5 35', 'Q5 40', 'Q5 45', 'Q7 3.0', 'Q7 35', 'Q7 45', 'Q7 Technology', 'Q8 Celebration', 'Rs5 4.2', 'Tt 2.0'],
'BMW': ['2 Series', '3-Series 320D', '3-Series 320I', '3-Series 330I', '5-Series 520D', '5-Series 525D', '5-Series 530D', '5-Series 530I', '6-Series Gt', '7-Series 730Ld', 'X1 Sdrive20D', 'X1 Sdrive20I', 'X1 Xdrive20D', 'X3 20D', 'X3 Xdrive', 'X3 Xdrive-20D', 'X3 Xdrive20D', 'X3 Xdrive30I', 'X4 Xdrive30D', 'X5 3.0D', 'X5 Xdrive', 'X5 Xdrive30D', 'X6 Xdrive40I'],
'Chevrolet': ['Beat Lt', 'Captiva Ltz', 'Cruze Ltz', 'Sail Sedan', 'Spark Ls'],
'Datsun': ['Go D', 'Go Plus', 'Go T'],
'Fiat': ['Grande Gx', 'Linea Emotion', 'Punto Active'],
'Ford': ['Aspire Titanium', 'Aspire Titanium1.5', 'Ecosport Ambiente', 'Ecosport Titanium', 'Ecosport Titanium+', 'Ecosport Trend', 'Endeavour 3.0L', 'Endeavour Sport', 'Endeavour Titanium', 'Endeavour Trend', 'Fiesta Style', 'Fiesta Titanium', 'Figo Duratec', 'Figo Duratorq', 'Figo Titanium1.5', 'Figo Trend', 'Ikon Duratorq', 'Mustang Gt'],
'Honda': ['Accord 2.4', 'Amaze 1.2', 'Amaze 1.5', 'Amaze Vx', 'Br-V V', 'Brio E', 'Brio Ex', 'Brio S', 'Brio V', 'Brio Vx', 'City 1.5', 'City Cvt', 'City E', 'City S', 'City Sv', 'City V', 'City Vx', 'City Zx', 'Civic 1.8S', 'Civic 1.8V', 'Cr-V 2.0L', 'Cr-V 2.4', 'Jazz S', 'Jazz Sv', 'Jazz V', 'Jazz Vx', 'Mobilio Rs', 'Mobilio S', 'Wr-V S', 'Wr-V Vx'],
'Hyundai': ['Accent Executive', 'Alcazar Platinum', 'Alcazar Prestige', 'Alcazar Signature', 'Aura S', 'Creta 1.4', 'Creta 1.6', 'Creta E', 'Creta Ex', 'Creta Sx', 'Elantra 1.6', 'Elantra 1.8', 'Elantra 2.0', 'Elantra Sx', 'Elite I20', 'Eon 1.0', 'Eon D-Lite', 'Eon Era', 'Eon Magna', 'Eon Sportz', 'Grand I10', 'I10 1.1L', 'I10 Asta', 'I10 Era', 'I10 Magna', 'I10 Sportz', 'I20 Active', 'I20 Asta', 'I20 Magna', 'I20 Sportz', 'Santa Fe', 'Santro Era', 'Santro Gl', 'Santro Gls', 'Santro Magna', 'Santro Sportz', 'Santro Xo', 'Sonata 2.0', 'Tucson 2Wd', 'Tucson Gl', 'Tucson Gls', 'Venue S', 'Venue Sx', 'Verna 1.6', 'Verna Ex', 'Verna Fluidic', 'Verna Sx', 'Xcent E', 'Xcent S', 'Xcent Sx'],
'Isuzu': ['Mu-X 4X2'],
'Jaguar': ['F-Pace Prestige', 'Xe Prestige', 'Xf 3.0', 'Xf Portfolio', 'Xf Prestige', 'Xf R', 'Xj 3.0'],
'Jeep': ['Compass Limited', 'Compass Longitude', 'Compass Model', 'Compass Sport', 'Wrangler Rubicon'],
'Kia': ['Carnival Limousine', 'Seltos Gtx', 'Seltos Htk', 'Seltos Htx', 'Sonet Gtx'],
'Land Rover': ['Discovery 2.0', 'Discovery 3.0', 'Discovery Hse', 'Discovery Sport', 'Evoque Dynamic', 'Evoque Hse', 'Evoque Pure', 'Evoque Se', 'Lx Suv', 'Range Rover'],
'Lexus': ['Es 300H', 'Lx Suv', 'Nx 300H'],
'MG': ['Astor Sharp', 'Gloster Savvy', 'Gloster Sharp', 'Hector Plus', 'Hector Sharp', 'Zs Ev'],
'MINI': ['Cooper D', 'Cooper Jcw', 'Cooper S', 'Countryman Cooper'],
'Mahindra': ['Alturas G4', 'Bolero Power', 'Bolero Sle', 'Bolero Slx', 'Hexa Xe', 'Hexa Xm', 'Hexa Xt', 'Hexa Xta', 'Kuv100 K6', 'Marazzo M2', 'Marazzo M6', 'Quanto C4', 'Quanto C8', 'Scorpio 2.6', 'Scorpio Lx', 'Scorpio S10', 'Scorpio S11', 'Scorpio S2', 'Scorpio S3', 'Scorpio S4', 'Scorpio S5', 'Scorpio S6', 'Scorpio S9', 'Scorpio Sle', 'Scorpio Vlx', 'Thar Ax', 'Thar Crde', 'Thar Lx', 'Tuv300 T10', 'Tuv300 T6', 'Tuv300 T8', 'Xuv300 1.5', 'Xuv300 W8', 'Xuv500 W10', 'Xuv500 W11', 'Xuv500 W4', 'Xuv500 W5', 'Xuv500 W6', 'Xuv500 W7', 'Xuv500 W8', 'Xuv500 W9', 'Xuv700 Ax', 'Xylo D2', 'Xylo D4'],
'Maruti Suzuki': ['Alto 800', 'Alto Lxi', 'Alto Vxi', 'Baleno Alpha', 'Baleno Delta', 'Baleno Sigma', 'Baleno Zeta', 'Celerio Ldi', 'Celerio Lxi', 'Celerio Vxi', 'Celerio X', 'Celerio Zxi', 'Ciaz Alpha', 'Ciaz Delta', 'Ciaz S', 'Ciaz Vdi', 'Ciaz Vdi+', 'Ciaz Vxi', 'Ciaz Zdi', 'Ciaz Zeta', 'Ciaz Zxi', 'Ciaz Zxi+', 'Dzire Ldi', 'Dzire Vdi', 'Dzire Vxi', 'Dzire Zdi', 'Dzire Zxi', 'Eeco 5', 'Eeco 7', 'Ertiga Lxi', 'Ertiga Vdi', 'Ertiga Vxi', 'Ertiga Zdi', 'Ertiga Zxi', 'Ertiga Zxi+', 'Estilo Lxi', 'Estilo Vxi', 'Ignis Delta', 'Ignis Zeta', 'Ritz Ldi', 'Ritz Vdi', 'Ritz Vxi', 'Ritz Zxi', 'S-Cross Alpha', 'S-Cross Delta', 'S-Cross Sigma', 'S-Cross Zeta', 'S-Presso Vxi', 'Swift Dzire', 'Swift Lxi', 'Swift Vdi', 'Swift Vxi', 'Swift Zdi', 'Swift Zxi', 'Sx4 Vxi', 'Sx4 Zdi', 'Vitara Brezza', 'Wagon R', 'Xl6 Alpha', 'Xl6 Zeta', 'Zen Lx', 'Zen Lxi'],
'Maserati': ['Levante Diesel'],
'Mercedes-Benz': ['A-Class A', 'A-Class Sedan', 'B-Class B180', 'C-Class 200', 'C-Class 220', 'C-Class 250', 'C-Class C', 'C-Class C200', 'C-Class C220D', 'C-Class Cabriolet', 'C-Coupe 43', 'Cla 200', 'Cls 300D', 'E-Class 200', 'E-Class 280', 'E-Class E', 'E-Class E200', 'E-Class E220', 'E-Class E250', 'E-Class E350', 'Gla 200', 'Gla 220', 'Gl-Class 350', 'Glc 200', 'Glc 220', 'Glc 220D', 'Gle 250', 'Gle 300D', 'Gle 350', 'Gle 43', 'Gls 350', 'Gls 400', 'M-Class 350', 'M-Class Ml', 'R-Class R350', 'S-Class 280', 'S-Class 300', 'S-Class 350', 'S-Class 500L', 'S-Class Maybach', 'S-Class S', 'Slk-Class Slk', 'V-Class Elite'],
'Mitsubishi': ['Pajero 2.5', 'Pajero Select', 'Pajero Sfx'],
'Nissan': ['Magnite Xl', 'Micra Xv', 'Sunny Xl', 'Sunny Xv', 'Teana 250Xl', 'Terrano Xe', 'Terrano Xl', 'Terrano Xv'],
'Porsche': ['718 Boxster', '718 Cayman', '911 Carrera', 'Cayenne 3.2', 'Cayenne Diesel', 'Cayenne Platinum', 'Cayenne Turbo', 'Macan Base', 'Macan S', 'Panamera 3.0'],
'Renault': ['Duster 110', 'Duster 85', 'Duster Rxl', 'Duster Rxs', 'Fluence 1.5', 'Kiger Rxt', 'Kiger Rxz', 'Kwid 1.0', 'Kwid Climber', 'Kwid Rxl', 'Kwid Rxt', 'Pulse Rxl', 'Redigo S', 'Redigo T(O)', 'Triber Rxz'],
'Skoda': ['Fabia Elegance', 'Kodiaq L&K', 'Kodiaq Style', 'Kushaq Style', 'Octavia 1.8', 'Octavia 2.0', 'Octavia Elegance', 'Octavia Rs', 'Octavia Style', 'Rapid 1.5', 'Rapid 1.6', 'Rapid Ambition', 'Rapid Elegance', 'Rapid Monte', 'Rapid Style', 'Superb Elegance', 'Superb L&K', 'Superb Sportline', 'Superb Style'],
'Ssangyong': ['Rexton Rx6', 'Rexton Rx7'],
'Tata': ['Altroz Xt', 'Harrier Xt', 'Harrier Xz', 'Harrier Xza', 'Manza Aqua', 'Nano Base', 'Nexon Ev', 'Nexon Xm', 'Nexon Xma', 'Nexon Xt', 'Nexon Xz', 'Nexon Xza', 'Punch Creative', 'Safari 2.2', 'Safari 4X2', 'Safari Xz', 'Safari Xza', 'Tiago Nrg', 'Tiago Revotron', 'Tigor Ev', 'Tigor Revotorq', 'Tigor Revotron', 'Tigor Xza', 'Zest Xe', 'Zest Xm'],
'Toyota': ['Camry 2.5L', 'Camry Hybrid', 'Commuter Hiace', 'Corolla Altis', 'Etios 1.2', 'Etios G', 'Etios Gd', 'Etios Liva', 'Etios V', 'Etios Vxd', 'Fortuner 2.8', 'Fortuner 3.0', 'Fortuner 4X2', 'Glanza G', 'Glanza V', 'Grand Vitara', 'Innova 2.0', 'Innova 2.4', 'Innova 2.5', 'Innova 2.7', 'Innova 2.8', 'Innova Gx', 'Innova Zx', 'Urban Cruiser', 'Vellfire Hybrid', 'Yaris J', 'Yaris V'],
'Volkswagen': ['Ameo Highline1.2L', 'Ameo Trendline', 'Jetta 1.9L', 'Polo 1.2', 'Polo 1.5', 'Polo Comfortline', 'Polo Gt', 'Polo Highline', 'Polo Highline1.0L', 'Polo Highline1.2L', 'Polo Highline1.5L', 'Polo Trendline', 'Taigun Highline', 'Tiguan Allspace', 'Tiguan Highline', 'Vento Comfortline', 'Vento Highline', 'Vento Trendline', 'Vento Tsi'],
'Volvo': ['S60 Kinetic', 'S90 D4', 'S90 Momentum', 'V40 Cross', 'V40 D3', 'Xc40 D4', 'Xc40 T4', 'Xc60 Inscription', 'Xc90 D5']
};

// Other data arrays
const fuelTypes = ['CNG', 'CNG + CNG', 'Diesel', 'Electric', 'Hybrid', 'LPG', 'Petrol', 'Petrol + CNG', 'Petrol + LPG'].sort();
const transmissions = ['Automatic', 'Manual'].sort();
const locations = [
'Agra', 'Ahmedabad', 'Allahabad', 'Ambala Cantt', 'Amritsar', 'Aurangabad',
'Bangalore', 'Bhopal', 'Bhubaneswar', 'Bulandshahar', 'Chandigarh',
'Chennai', 'Coimbatore', 'Dak. Kannada', 'Dehradun', 'Deoghar', 'Delhi',
'Dharwad', 'Ernakulam', 'Faizabad', 'Faridabad', 'Ghaziabad', 'Goa',
'Gorakhpur', 'Gujarat', 'Gurgaon', 'Guwahati', 'Haldwani', 'Hyderabad',
'Indore', 'Jaipur', 'Jalandhar', 'Jamshedpur', 'Kanpur', 'Karnal',
'Kheda', 'Kharar', 'Kochi', 'Kollam', 'Kolkata', 'Kota', 'Lucknow',
'Ludhiana', 'Mangalore', 'Meerut', 'Mirzapur', 'Mohali', 'Mumbai',
'Muzaffurpur', 'Mysore', 'Nagpur', 'Nashik', 'Navi Mumbai', 'Noida',
'Panvel', 'Panchkula', 'Patna', 'Pimpri-Chinchwad', 'Pune', 'Purnea',
'Raipur', 'Ranga Reddy', 'Ranchi', 'Rohtak', 'Roorkee', 'Rudrapur',
'Salem', 'Samastipur', 'Siliguri', 'Surat', 'Thane', 'Udupi', 'Unnao',
'Valsad', 'Varanasi', 'Vadodara', 'Warangal', 'Yamunanagar', 'Zirakpur'
].sort();
const colors = ['Beige', 'Black', 'Blue', 'Bronze', 'Brown', 'Gold', 'Green', 'Grey', 'Maroon', 'Orange', 'Others', 'Pink', 'Purple', 'Red', 'Silver', 'White', 'Yellow'].sort();
const owners = ['First', 'Second', 'Third', 'Fourth', '4 or More', 'UnRegistered Car'].sort();
const seatingCapacities = [2, 3, 4, 5, 6, 7, 8].sort();

// DOM elements
const companySelect = document.getElementById('company');
const modelSelect = document.getElementById('model');
const fuelTypeSelect = document.getElementById('fuelType');
const transmissionSelect = document.getElementById('transmission');
const locationSelect = document.getElementById('location');
const colorSelect = document.getElementById('color');
const ownerSelect = document.getElementById('owner');
const seatingCapacitySelect = document.getElementById('seatingCapacity');
const form = document.getElementById('predictionForm');
const predictBtn = document.getElementById('predictBtn');
const loadingSpinner = document.getElementById('loadingSpinner');
const resultSection = document.getElementById('resultSection');
const errorSection = document.getElementById('errorSection');
const predictedPrice = document.getElementById('predictedPrice');
const errorMessage = document.getElementById('errorMessage');

// Initialize dropdowns
function initializeDropdowns() {
// Populate companies
const companies = Object.keys(carData).sort();
companies.forEach(company => {
const option = document.createElement('option');
option.value = company;
option.textContent = company;
companySelect.appendChild(option);
});


// Populate fuel types
fuelTypes.forEach(fuel => {
    const option = document.createElement('option');
    option.value = fuel;
    option.textContent = fuel;
    fuelTypeSelect.appendChild(option);
});

// Populate transmissions
transmissions.forEach(transmission => {
    const option = document.createElement('option');
    option.value = transmission;
    option.textContent = transmission;
    transmissionSelect.appendChild(option);
});

// Populate locations
locations.forEach(location => {
    const option = document.createElement('option');
    option.value = location;
    option.textContent = location;
    locationSelect.appendChild(option);
});

// Populate colors
colors.forEach(color => {
    const option = document.createElement('option');
    option.value = color;
    option.textContent = color;
    colorSelect.appendChild(option);
});

// Populate owners
owners.forEach(owner => {
    const option = document.createElement('option');
    option.value = owner;
    option.textContent = owner;
    ownerSelect.appendChild(option);
});

// Populate seating capacities
seatingCapacities.forEach(capacity => {
    const option = document.createElement('option');
    option.value = capacity;
    option.textContent = `${capacity} Seater`;
    seatingCapacitySelect.appendChild(option);
});
}

// Handle company selection change
companySelect.addEventListener('change', function() {
const selectedCompany = this.value;


// Clear and disable model select
modelSelect.innerHTML = '<option value="">Select Model</option>';
modelSelect.disabled = !selectedCompany;

if (selectedCompany && carData[selectedCompany]) {
    // Populate models for selected company
    const models = carData[selectedCompany].sort();
    models.forEach(model => {
        const option = document.createElement('option');
        option.value = model;
        option.textContent = model;
        modelSelect.appendChild(option);
    });
    modelSelect.disabled = false;
}
});

// Handle form submission
form.addEventListener('submit', async function(e) {
e.preventDefault();


// Show loading state
predictBtn.classList.add('loading');
predictBtn.disabled = true;
hideResults();

try {
    // Collect form data
    const formData = new FormData(form);
    const data = {};

    // Convert FormData to object with exact field names expected by Flask
    for (let [key, value] of formData.entries()) {
        data[key] = value;
    }

    // Convert numeric fields to numbers
    data['Year'] = parseInt(data['Year']);
    data['Kilometer'] = parseInt(data['Kilometer']);
    data['Engine_cc'] = parseInt(data['Engine_cc']);
    data['Seating Capacity'] = parseInt(data['Seating Capacity']);
    data['Fuel Tank Capacity'] = parseInt(data['Fuel Tank Capacity']);

    console.log('Sending data:', data);

    // Send request to Flask backend
    const response = await fetch('/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();

    if (response.ok) {
        // Show success result
        showResult(result.predicted_price);
    } else {
        // Show error
        showError(result.error || 'Prediction failed');
    }

} catch (error) {
    console.error('Error:', error);
    showError('Network error. Please check if the server is running.');
} finally {
    // Hide loading state
    predictBtn.classList.remove('loading');
    predictBtn.disabled = false;
}
});

console.log("🔥 JS is connected");


// Show prediction result
function showResult(price) {
hideResults();
predictedPrice.textContent = `${formatPrice(price)}`;
resultSection.classList.remove('hidden');
}

// Show error message
function showError(message) {
hideResults();
errorMessage.textContent = message;
errorSection.classList.remove('hidden');
}

// Hide all result sections
function hideResults() {
resultSection.classList.add('hidden');
errorSection.classList.add('hidden');
}

// Format price with commas
function formatPrice(price) {
return new Intl.NumberFormat('en-IN').format(Math.round(price));
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
initializeDropdowns();
});