const serverless = require('serverless-http');
const app = require('./app'); // Your Express app

// Optimize MongoDB connection for Lambda
let cachedDb = null;

async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  }
  
  const mongoose = require('mongoose');
  await mongoose.connect(process.env.MONGODB_URI, {
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
  });
  
  cachedDb = mongoose.connection;
  return cachedDb;
}

module.exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  await connectToDatabase();
  return serverless(app)(event, context);
};