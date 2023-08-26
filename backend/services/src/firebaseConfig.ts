import * as firebase from '@firebase/app';
import { getAuth } from '@firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAnXktWoJeViJjqvPW3_OV62t-mgVxF554',
  authDomain: 'test-9b595.firebaseapp.com',
  projectId: 'test-9b595',
  storageBucket: 'test-9b595.appspot.com',
  messagingSenderId: '711832129466',
  appId: '1:711832129466:web:c3a40b505a441aa8861783',
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app);
