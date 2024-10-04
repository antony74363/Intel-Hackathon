// Load the diabetes model
let diabetesModel;

async function loadDiabetesModel() {
    diabetesModel = await tf.loadLayersModel('path-to-diabetes-model/model.json');
    console.log("Diabetes model loaded successfully");
}

loadDiabetesModel(); // Load the diabetes model

// Handle predict button click
document.getElementById('predictDiabetes').addEventListener('click', async () => {
    const age = parseFloat(document.getElementById('age').value);
    const bloodSugar = parseFloat(document.getElementById('bloodSugar').value);
    const bmi = parseFloat(document.getElementById('bmi').value);

    const inputTensor = tf.tensor2d([[age, bloodSugar, bmi]]); // Adjust based on your model's expected inputs

    const prediction = await diabetesModel.predict(inputTensor).data();
    document.getElementById('result').innerText = prediction[0].toFixed(2);
});
