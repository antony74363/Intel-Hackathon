import tensorflow as tf
import tensorflowjs as tfjs

# Load the Keras model from the .h5 file
model = tf.keras.models.load_model('E:/Hack/Intel-Hackathon/parkinsons_model.h5')

# Save the model in TensorFlow.js format
tfjs.converters.save_keras_model(model, 'E:/Hack/Intel-Hackathon/model')
