const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Replace 'your_connection_string' with your actual MongoDB connection string
    await mongoose.connect('mongodb+srv://sugato:passwordstronghai@cluster0.br86gpa.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Successfully connected to MongoDB!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
};

module.exports = connectDB;
