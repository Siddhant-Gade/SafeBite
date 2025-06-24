const harmfulSubstances = {
    'BHA': { danger: 'Possible carcinogen', banned: ['EU', 'Japan', 'South Korea'] },
    'BHT': { danger: 'Liver/kidney damage', banned: ['EU', 'Australia', 'New Zealand'] },
    'Azodicarbonamide': { danger: 'Respiratory issues', banned: ['EU', 'Australia', 'Singapore'] },
    'Potassium Bromate': { danger: 'Carcinogenic', banned: ['EU', 'Canada', 'China', 'Brazil'] },
    'Red 40': { danger: 'Allergies/hyperactivity', banned: ['EU', 'Norway'] },
    'Titanium Dioxide': { danger: 'Genotoxicity concerns', banned: ['EU', 'Switzerland'] },
    'E171': { danger: 'Genotoxicity concerns', banned: ['EU', 'India'] },
    'Propylparaben': { danger: 'Endocrine disruption', banned: ['EU', 'Taiwan'] },
    'Brominated Vegetable Oil': { danger: 'Neurological issues', banned: ['EU', 'Japan', 'India'] },
    'BVO': { danger: 'Neurological issues', banned: ['EU', 'Japan', 'South Korea'] },
    'Allura Red AC': { danger: 'Hyperactivity in children', banned: ['UK', 'Switzerland', 'France'] },
    'E129': { danger: 'Hyperactivity in children', banned: ['UK', 'Switzerland', 'Italy'] },
    'Tartrazine': { danger: 'Allergic reactions', banned: ['Norway', 'Austria', 'Germany'] },
    'E102': { danger: 'Allergic reactions', banned: ['Norway', 'Austria', 'Denmark'] },
    'Stannous Chloride': { danger: 'Toxicity in high doses', banned: ['EU (certain uses)', 'Sweden'] },
    'Ractopamine': { danger: 'Cardiovascular effects', banned: ['EU', 'China', 'Russia', 'Taiwan'] },
    'Chloramphenicol': { danger: 'Antibiotic resistance', banned: ['EU', 'US', 'Canada'] },
    'Formalin': { danger: 'Carcinogenic', banned: ['EU', 'US', 'Australia', 'New Zealand'] },
    'Formaldehyde': { danger: 'Carcinogenic', banned: ['EU', 'US', 'Australia', 'Singapore'] },
    'Sodium Aluminium Phosphate': { danger: 'Neurotoxin', banned: ['EU (baby food)', 'South Korea'] },
    'E110': { danger: 'Hyperactivity', banned: ['Finland', 'Norway', 'Sweden'] },
    'E133': { danger: 'Asthma attacks', banned: ['EU (certain uses)', 'Denmark'] },
    'Aspartylphenylalanine Methyl Ester': { danger: 'Possible neurotoxin', banned: ['EU', 'Japan', 'Taiwan'] },
    'Butylated Hydroxyanisole': { danger: 'Possible carcinogen', banned: ['EU', 'Australia', 'Canada'] },
    'Diacetyl': { danger: 'Lung disease risk', banned: ['EU', 'UK', 'New Zealand'] },
    'Dextrose Monohydrate': { danger: 'Blood sugar spikes', banned: ['None'] },
    'FD&C Yellow No. 5': { danger: 'Hyperactivity, allergies', banned: ['EU', 'Norway'] },
    'Maltodextrin': { danger: 'High glycemic index', banned: ['None'] },
    'Neotame': { danger: 'Metabolic disorders', banned: ['EU', 'India', 'China'] },
    'Olestra': { danger: 'Digestive issues', banned: ['EU', 'Canada', 'Brazil'] },
    'Sodium Stearoyl Lactylate': { danger: 'Potential allergen', banned: ['None'] },
    'Zinc Gluconate': { danger: 'Potential toxicity in high doses', banned: ['None'] },
    'Carrageenan': { danger: 'Inflammatory bowel risk', banned: ['EU', 'Japan'] },
    'Polyvinyl Alcohol': { danger: 'Toxicity concerns', banned: ['EU', 'India'] },
    'Phenylalanine': { danger: 'Risk for PKU patients', banned: ['None'] },
    'Propyl Gallate': { danger: 'Potential carcinogen', banned: ['EU', 'Australia'] },
    'Silicon Dioxide': { danger: 'Potential lung damage (inhalation)', banned: ['None'] },
    'Polysorbate 80': { danger: 'Allergic reactions', banned: ['EU', 'South Korea'] },
    'FD&C Blue No. 1': { danger: 'Hyperactivity risk', banned: ['EU', 'Norway'] },
    'E127 (Erythrosine)': { danger: 'Thyroid toxicity', banned: ['EU', 'US', 'South Korea', 'India'] },
    'E218 (Methylparaben)': { danger: 'Endocrine disruption', banned: ['EU', 'Japan', 'Australia'] },
    'E320 (Butylated Hydroxyanisole)': { danger: 'Possible carcinogen', banned: ['EU', 'Australia', 'India'] },
    'Palm Oil': { danger: 'High in trans fats, environmental concerns', banned: ['EU (certain products)'] },
    'Hydrogenated Palm Oil': { danger: 'Trans fats, heart disease risk', banned: ['EU', 'US'] },
    'Partially Hydrogenated Palm Oil': { danger: 'Trans fats, heart disease risk', banned: ['EU', 'US'] },
    'Palm Kernel Oil': { danger: 'High in saturated fat', banned: ['None'] },
    'Palm Olein': { danger: 'High in saturated fat', banned: ['France','Switzerland','Norway'] },
    'Artificial Vanilla (Ethyl Vanillin)': { danger: 'Possible carcinogen', banned: ['EU', 'Australia'] },
    'E250 (Sodium Nitrite)': { danger: 'Cancer risk', banned: ['EU', 'US'] },
    'E621 (Monosodium Glutamate)': { danger: 'Headaches, allergic reactions', banned: ['EU (certain uses)'] },
    'Saccharin': { danger: 'Possible carcinogen', banned: ['EU', 'US'] },
    'E950 (Acesulfame K)': { danger: 'Cancer risk (long-term exposure)', banned: ['EU (certain uses)'] },
    'E330 (Citric Acid)': { danger: 'Dental erosion', banned: ['None'] },
    'E551 (Silicon Dioxide)': { danger: 'Potential lung damage (inhalation)', banned: ['None'] },
    'E160a (Beta-Carotene)': { danger: 'Hypervitaminosis', banned: ['None'] },
    'Sodium Benzoate': { danger: 'Cancer risk (high doses)', banned: ['EU', 'Japan'] },
    'Potassium Sorbate': { danger: 'Allergic reactions', banned: ['EU'] },
    'Calcium Propionate': { danger: 'Possible gastrointestinal issues', banned: ['None'] },
    'Butylated HydroxyToluene (BHT)': { danger: 'Endocrine disruption', banned: ['EU', 'Australia'] },
    'E132 (Indigo Carmine)': { danger: 'Allergic reactions', banned: ['EU'] },
    'E142 (Green S)': { danger: 'Possible carcinogen', banned: ['EU', 'Australia'] },
    'Paraffin Wax': { danger: 'Indigestion', banned: ['None'] },
    'Chlorine Dioxide': { danger: 'Possible carcinogen', banned: ['EU', 'US'] },
    'Caramel Colour E150d': { danger: 'Potential carcinogen', banned: ['EU'] },
    'Benzophenone': { danger: 'Endocrine disruption', banned: ['EU'] },
    'Sodium Lauryl Sulfate': { danger: 'Skin irritation', banned: ['EU'] },
    'E104 (Quinoline Yellow)': { danger: 'Allergic reactions, hyperactivity', banned: ['EU', 'Norway'] },
    'E128 (Red 2G)': { danger: 'Possible carcinogen', banned: ['EU'] },
    'Propylene Glycol': { danger: 'Possible kidney damage', banned: ['EU (certain uses)'] },
    'E924 (Potassium Bromate)': { danger: 'Carcinogenic', banned: ['EU', 'Canada'] },
    'E551 (Silicon Dioxide)': { danger: 'Potential lung damage (inhalation)', banned: ['None'] },
    'Copper Sulfate': { danger: 'Copper poisoning', banned: ['None'] },
    'Sodium Cyanide': { danger: 'Poisoning', banned: ['None'] },
    'E173 (Aluminum powder)': { danger: 'Possible neurotoxin', banned: ['EU'] },
    'Sodium Tetraborate': { danger: 'Skin and eye irritation', banned: ['EU'] },
    'E513 (Sulfuric Acid)': { danger: 'Toxicity', banned: ['EU'] },
    'E151 (Brilliant Blue FCF)': { danger: 'Possible carcinogen', banned: ['EU'] },
    'E122 (Azorubine)': { danger: 'Possible allergic reactions', banned: ['EU'] },
    'BHT (Butylated HydroxyToluene)': { danger: 'Endocrine disruption', banned: ['EU', 'Australia'] },
    'Cyclamate': { danger: 'Possible carcinogen', banned: ['EU', 'US'] },
    'Hydrogenated Oils': { danger: 'Trans fats', banned: ['EU'] },
    'PVP (Polyvinylpyrrolidone)': { danger: 'Skin irritation', banned: ['EU'] },
    'Artificial Sweeteners (Aspartame)': { danger: 'Possible neurotoxin', banned: ['EU (certain uses)'] },
    'Methylparaben': { danger: 'Endocrine disruption', banned: ['EU'] },
    'Ethylparaben': { danger: 'Endocrine disruption', banned: ['EU'] },
    'Polyethylene Glycol': { danger: 'Skin irritation', banned: ['EU'] },
    'Tertiary Butylhydroquinone': { danger: 'Possible carcinogen', banned: ['EU'] },
    'Carbopol': { danger: 'Irritation of eyes and skin', banned: ['None'] },
    'E300 (Ascorbic Acid)': { danger: 'None', banned: ['None'] }
};

let codeReader = new ZXing.BrowserBarcodeReader();
let currentScanner;

// Camera Initialization
async function initializeCamera() {
    try {
        const videoElement = document.getElementById('camera-preview');
        const resultContainer = document.getElementById('result-container');

        resultContainer.innerHTML = '<div class="loading-indicator"></div> Initializing camera...';

        const devices = await codeReader.getVideoInputDevices();
        const backCamera = devices.find(device =>
            device.label.toLowerCase().includes('back'));

        currentScanner = await codeReader.decodeFromVideoDevice(
            backCamera?.deviceId,
            videoElement,
            handleBarcodeResult
        );

    } catch (error) {
        console.error('Camera Error:', error);
        document.getElementById('result-container').innerHTML =
            `<div class="error">Camera access denied: ${error.message}</div>`;
    }
}

// Barcode Handling
function handleBarcodeResult(result, error) {
    const resultContainer = document.getElementById('result-container');

    if (result) {
        resultContainer.innerHTML = '<div class="loading-indicator"></div> Scanning product...';
        processBarcode(result.text);
        codeReader.reset();
    }

    if (error && !(error instanceof ZXing.NotFoundException)) {
        console.error('Scan Error:', error);
        resultContainer.innerHTML = `<div class="error">Scan error: ${error.message}</div>`;
    }
}

// Product Processing
async function processBarcode(barcode) {
    try {
        const response = await fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`);
        const data = await response.json();

        if (data.status === 1) {
            displayProductAnalysis(data.product);
        } else {
            document.getElementById("result-container").innerHTML =
                `<div class="error">Product not found in database</div>`;
        }
    } catch (error) {
        console.error("Fetch Error:", error);
        document.getElementById("result-container").innerHTML =
            `<div class="error">Error fetching product data: ${error.message}</div>`;
    }
}

// Product Analysis Display
function displayProductAnalysis(product) {
    const resultDiv = document.getElementById('result-container');
    let html = `<h3>${product.product_name || 'Unknown Product'}</h3>`;

    // Ingredients Analysis
    const ingredients = product.ingredients_text || '';
    const harmfulAnalysis = analyzeIngredients(ingredients);
    html += harmfulAnalysis || '<p class="safe">No harmful ingredients detected</p>';

    // Nutrition Analysis
    html += analyzeNutrition(product.nutriments);

    resultDiv.innerHTML = html;
}

// Nutrition Analysis

const DAILY_VALUES = {
    'energy': 2000, // kcal
    'fat': 70,      // g
    'saturated-fat': 20, // g
    'carbohydrates': 300, // g
    'sugars': 50,   // g
    'proteins': 50,  // g
    'salt': 2.3      // g (2300mg sodium)
};

// Update the nutrition analysis function
function analyzeNutrition(nutriments) {
    if (!nutriments) return '<div class="nutrition-warning">Nutrition information not available</div>';


    // Add color legend explanation
    let html = `
<div class="nutrition-analysis">
            <h4>Nutrition Analysis (per 100g/ml)</h4>
            <div class="color-legend">
                <div class="legend-item">
                    <span class="legend-color safe"></span>
                    Safe (0-30% Daily Value)
                </div>
                <div class="legend-item">
                    <span class="legend-color moderate"></span>
                    Moderate (30-70% Daily Value)
                </div>
                <div class="legend-item">
                    <span class="legend-color high"></span>
                    High (70-99% Daily Value)
                </div>
                <div class="legend-item">
                    <span class="legend-color critical"></span>
                    Excessive (100%+ Daily Value)
                </div>
            </div>
    `;
    //Define nutrient categories
    const nutrients = {
        'energy': { label: 'Energy', unit: 'kcal' },
        'fat': { label: 'Total Fat', unit: 'g' },
        'saturated-fat': { label: 'Saturated Fat', unit: 'g' },
        'carbohydrates': { label: 'Carbohydrates', unit: 'g' },
        'sugars': { label: 'Sugars', unit: 'g' },
        'proteins': { label: 'Proteins', unit: 'g' },
        'salt': { label: 'Salt', unit: 'g' }
    };

    Object.entries(nutrients).forEach(([key, info]) => {
        const value = nutriments[key + '_100g'] || 0;
        const dailyValue = DAILY_VALUES[key] || 1; // Prevent division by zero
        const percentage = Math.round((value / dailyValue) * 100);

        // Determine color based on percentage
        let colorClass = '';
        if (percentage <= 30) colorClass = 'safe';
        else if (percentage <= 70) colorClass = 'moderate';
        else if (percentage <= 100) colorClass = 'high';
        else colorClass = 'critical';
        
        //Generate HTML for each nutrient
        html += `
            <div class="nutrient-item">
                <div class="nutrient-header">
                    <strong>${info.label}:</strong>
                    <span>${value.toFixed(1)}${info.unit} (${percentage}% DV)</span>
                </div>
                <div class="progress-bar ${colorClass}">
                    <div class="progress-fill" style="width: ${Math.min(percentage, 100)}%"></div>
                    ${percentage > 100 ? '<div class="exceeded-marker"></div>' : ''}
                </div>
                ${percentage >= 100 ?
                `<p class="critical-warning">Exceeds daily limit! Regular consumption may be harmful</p>` : ''}
                ${percentage > 70 && percentage < 100 ?
                `<p class="high-warning">Approaching daily limit</p>` : ''}
            </div>
        `;
    });

    return html + '</div>';
}

// Rabin-Karp Implementation
function analyzeIngredients(ingredientsText) {
    const BASE = 256, MOD = 9973;
    const normalize = str => str.replace(/[^a-z0-9]/gi, '').toLowerCase();
    const normalizedText = normalize(ingredientsText);
    const detected = new Set();

    // Precompute substance hashes
    const substances = Object.keys(harmfulSubstances).map(sub => ({
        original: sub,
        norm: normalize(sub),
        hash: computeHash(normalize(sub)),
        len: normalize(sub).length
    }));

    // Group by length
    const byLength = substances.reduce((acc, sub) => {
        acc[sub.len] = acc[sub.len] || [];
        acc[sub.len].push(sub);
        return acc;
    }, {});

    // Scan text
    Object.keys(byLength).forEach(lenStr => {
        const len = parseInt(lenStr);
        if (normalizedText.length < len) return;

        const maxPower = Math.pow(BASE, len - 1) % MOD;
        let hash = computeHash(normalizedText.substr(0, len));

        checkMatch(hash, normalizedText.substr(0, len), byLength[len], detected);

        for (let i = len; i < normalizedText.length; i++) {
            hash = ((hash - normalizedText.charCodeAt(i - len) * maxPower) * BASE
                + normalizedText.charCodeAt(i)) % MOD;
            hash = (hash + MOD) % MOD;

            checkMatch(hash, normalizedText.substr(i - len + 1, len), byLength[len], detected);
        }
    });

    function computeHash(str) {
        let h = 0;
        for (let c of str) h = (h * BASE + c.charCodeAt(0)) % MOD;
        return h;
    }

    function checkMatch(hash, substr, substances, detected) {
        substances.forEach(sub => {
            if (sub.hash === hash && sub.norm === substr) {
                detected.add(sub.original);
            }
        });
    }

    if (detected.size === 0) return '';

    let html = '<div class="ingredient-analysis"><h4>⚠ Harmful Ingredients Detected:</h4>';
    detected.forEach(sub => {
        const details = harmfulSubstances[sub];
        html += `
            <div class="harmful-ingredient">
                <strong>${sub}</strong>
                <p>Risk: ${details.danger}</p>
                ${details.banned?.length ?
                `<p>Banned in: ${details.banned.join(', ')}</p>` : ''}
            </div>`;
    });
    return html + '</div>';
}

// Event Listeners
document.getElementById('retry-camera').addEventListener('click', () => {
    codeReader.reset();
    initializeCamera();
});

// Initialize on load
window.addEventListener('load', initializeCamera);