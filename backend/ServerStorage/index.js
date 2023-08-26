//node index.js exposes the api endpoint localhost:3001 to listen for GET requests in the format localhost:3001/image/:imageName, 
//and returns a live link to the image from the Firebase cloud storage
const { initializeApp } = require("firebase/app");

const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');
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

const app1 = express();
app1.use(cors());

app1.get('/image/:imageName', async (req, res) => {
  const imageName = req.params.imageName; // Get the image name from the route parameter
  // console.log(imageName);
  const bucket = admin.storage().bucket();
  const [files] = await bucket.getFiles();

  const matchingFile = files.find(file => file.name === imageName);
  // console.log(matchingFile);
  if (matchingFile) {
    const imageUrl = `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${encodeURIComponent(matchingFile.name)}?alt=media&token=${matchingFile.metadata.metadata.firebaseStorageDownloadTokens}`;
    console.log(imageUrl);
    res.json({ imageUrl });
  } else {
    res.status(404).json({ error: 'Image not found' });
  }
});

const PORT = process.env.PORT || 3001;
app1.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
