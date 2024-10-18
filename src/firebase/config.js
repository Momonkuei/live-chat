import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyCWx4Pk0Ds79tJCFNvUFJU1XrFN9hEKa2Q',
	authDomain: 'udemy-vue-firebase-sites-966bd.firebaseapp.com',
	projectId: 'udemy-vue-firebase-sites-966bd',
	storageBucket: 'udemy-vue-firebase-sites-966bd.appspot.com',
	messagingSenderId: '39090214420',
	appId: '1:39090214420:web:5ecb7522254087835a7901',
};

//init firebase
firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, timestamp };
