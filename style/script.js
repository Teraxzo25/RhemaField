
// Get elements
const generateButton = document.getElementById('generate');
const designButton = document.getElementById('generate_design');
const promptInput = document.getElementById('prompt');
const designImageInput = document.getElementById('design_image');
const generatedCodeTextarea = document.getElementById('generated_code');
const designImagePreview = document.getElementById('design_image_preview');
const backendButton = document.getElementById('generate-backend');
const testingButton = document.getElementById('generate-testing');
const seoButton = document.getElementById('optimize-seo');
const databaseButton = document.getElementById('generate-database');

// Add event listeners
generateButton.addEventListener('click', generateCode);
designButton.addEventListener('click', generateDesign);
backendButton.addEventListener('click', generateBackendCode);
testingButton.addEventListener('click', generateTestingCode);
seoButton.addEventListener('click', optimizeSEO);
databaseButton.addEventListener('click', generateDatabaseCode);

// Function to generate code
function generateCode() {
    const prompt = promptInput.value;
    fetch('/generate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt: prompt })
    })
    .then(response => response.json())
    .then(data => {
        generatedCodeTextarea.value = data.html + '\n' + data.css + '\n' + data.js;
    })
    .catch(error => console.error(error));
}

// Function to generate design
function generateDesign() {
    const designImage = designImageInput.files[0];
    const formData = new FormData();
    formData.append('design_image', designImage);
    fetch('/design', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        designImagePreview.src = data.design_image;
    })
    .catch(error => console.error(error));
}

// Function to generate backend code
function generateBackendCode() {
    const prompt = promptInput.value;
    fetch('/generate-backend', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt: prompt })
    })
    .then(response => response.json())
    .then(data => {
        const backendCodeTextarea = document.getElementById('generated_backend_code');
        backendCodeTextarea.value = data.backend;
    })
    .catch(error => console.error(error));
}

// Function to generate testing code
function generateTestingCode() {
    const prompt = promptInput.value;
    fetch('/generate-testing', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt: prompt })
    })
    .then(response => response.json())
    .then(data => {
        const testingCodeTextarea = document.getElementById('generated_testing_code');
        testingCodeTextarea.value = data.testing;
    })
    .catch(error => console.error(error));
}

// Function to optimize SEO
function optimizeSEO() {
    const prompt = promptInput.value;
    fetch('/optimize-seo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt: prompt })
    })
    .then(response => response.json())
    .then(data => {
        const seoOptimizationTextarea = document.getElementById('optimized_seo');
        seoOptimizationTextarea.value = data.seo;
    })
    .catch(error => console.error(error));
}

// Function to generate database code
function generateDatabaseCode() {
    const prompt = promptInput.value;
    fetch('/generate-database', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt: prompt })
    })
    .then(response => response.json())
    .then(data => {
        const databaseCodeTextarea = document.getElementById('generated_database_code');
        databaseCodeTextarea.value = data.database;
    })
    .catch(error => console.error(error));
}

