const { initializeApp } = require("firebase/app");
const { v4: uuidv4 } = require('uuid'); 
const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');
const moment = require('moment'); 

const serviceAccount = require('./test-9b595-firebase-adminsdk-7ymkd-ecb373ac69.json'); // Replace with your Firebase service account key

const firebaseConfig = {
  apiKey: "AIzaSyAnXktWoJeViJjqvPW3_OV62t-mgVxF554",
  authDomain: "test-9b595.firebaseapp.com",
  projectId: "test-9b595",
  storageBucket: "test-9b595.appspot.com",
  messagingSenderId: "711832129466",
  appId: "1:711832129466:web:c3a40b505a441aa8861783"
};
const app = initializeApp(firebaseConfig);
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "test-9b595.appspot.com" // Replace with your Firebase Storage bucket URL
});

//get your bucket


const app1 = express();

app1.use(cors());
app1.use(express.json()); 
// filepath = "/Users/someone/Documents/GitHub/PeerTutors/backend/ServerStorage";
// filename = "file_example_MP3_700KB.mp3";




const PORT = process.env.PORT || 3002;
app1.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});