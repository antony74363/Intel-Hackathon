// Load the Parkinson's disease model
let parkinsonModel;

async function loadParkinsonModel() {
    // Update the path to point to the converted model.json file
    parkinsonModel = await tf.loadLayersModel('E:/Hack/Intel-Hackathon/model'); // Absolute path to model.json
    console.log("Parkinson's disease model loaded successfully");
}

loadParkinsonModel(); // Load the Parkinson's disease model

// Handle predict button click
document.getElementById('predictParkinsons').addEventListener('click', async () => {
    const age = parseFloat(document.getElementById('age').value);
    const tremorLevel = parseFloat(document.getElementById('tremorLevel').value);
    const muscleStiffness = parseFloat(document.getElementById('muscleStiffness').value);

    // Create the input tensor
    const inputTensor = tf.tensor2d([[age, tremorLevel, muscleStiffness]]);

    // Make prediction
    const prediction = await parkinsonModel.predict(inputTensor).data();

    // Display the result
    document.getElementById('result').innerText = prediction[0].toFixed(2);
});
