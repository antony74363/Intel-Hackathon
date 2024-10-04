// Load the heart disease model
let heartModel;

async function loadHeartModel() {
    heartModel = await tf.loadLayersModel('path-to-heart-model/model.json');
    console.log("Heart disease model loaded successfully");
}

loadHeartModel(); // Load the heart disease model

// Handle predict button click
document.getElementById('predictHeartDisease').addEventListener('click', async () => {
    const age = parseFloat(document.getElementById('age').value);
    const cholesterol = parseFloat(document.getElementById('cholesterol').value);
    const bloodPressure = parseFloat(document.getElementById('bloodPressure').value);

    const inputTensor = tf.tensor2d([[age, cholesterol, bloodPressure]]); // Adjust based on your model's expected inputs

    const prediction = await heartModel.predict(inputTensor).data();
    document.getElementById('result').innerText = prediction[0].toFixed(2);
});
