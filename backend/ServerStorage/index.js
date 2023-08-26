//node index.js exposes the api endpoint localhost:3001 to listen for GET requests in the format localhost:3001/image/:imageName, 
//and returns a live link to the image from the Firebase cloud storage
const { initializeApp } = require("firebase/app");
const moment = require('moment'); 
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
app1.use(express.json()); 

var bucket = admin.storage().bucket();

app1.get('/file', async (req, res) => {
  const imageName = req.body.filename;
  const [files] = await bucket.getFiles();

  const matchingFile = files.find(file => file.name === imageName);
  // console.log(matchingFile);
  if (matchingFile) {
    const imageUrl = `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${encodeURIComponent(matchingFile.name)}?alt=media&token=${matchingFile.metadata.metadata.firebaseStorageDownloadTokens}`;
    // console.log(imageUrl);
    res.json({ imageUrl });
  } else {
    res.status(404).json({ error: 'Image not found' });
  }
});

app1.post('/upload', async (req, res) => {

  const filepath = req.body.filepath;
  const filename = req.body.filename;
  const user = req.body.user;
  
  if (!filepath || !filename || !user) {
    return res.status(400).json({ error: 'filepath,filename and user are required' });
  }
  try {
    const fileExtension = filename.split('.').pop();
    const timestamp = moment().format('YYYYMMDD_HHmmss'); 
    const uniqueFilename = `${user}${timestamp}.${fileExtension}`;
    
    // console.log(filepath + filename);
    await bucket.upload(filepath + filename, {
      gzip: true,
      destination: uniqueFilename,
      metadata: {
        cacheControl: 'public, max-age=31536000'
      }
    });

    console.log(`${filename} uploaded to bucket.`);
    res.status(200).json({ message: `${filename} uploaded successfully` });
  }
  catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).json({ error: 'An error occurred while uploading the file' });
  }
});

const PORT = process.env.PORT || 3001;
app1.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
