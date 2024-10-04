// Load the Parkinson's disease model
let parkinsonModel;

async function loadParkinsonModel() {
    parkinsonModel = await tf.loadLayersModel('path-to-parkinson-model/model.json');
    console.log("Parkinson's disease model loaded successfully");
}

loadParkinsonModel(); // Load the Parkinson's disease model

// Handle predict button click
document.getElementById('predictParkinsons').addEventListener('click', async () => {
    const age = parseFloat(document.getElementById('age').value);
    const tremorLevel = parseFloat(document.getElementById('tremorLevel').value);
    const muscleStiffness = parseFloat(document.getElementById('muscleStiffness').value);

    const inputTensor = tf.tensor2d([[age, tremorLevel, muscleStiffness]]); // Adjust based on your model's expected inputs

    const prediction = await parkinsonModel.predict(inputTensor).data();
    document.getElementById('result').innerText = prediction[0].toFixed(2);
});
