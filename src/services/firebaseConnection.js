import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

let firebaseConfig = {
    apiKey: "AIzaSyB_6NlnbcmG7MPl_mnSyoNiag9smvtCJyk",
    authDomain: "vueapp-49722.firebaseapp.com",
    projectId: "vueapp-49722",
    storageBucket: "vueapp-49722.appspot.com",
    messagingSenderId: "433261890433",
    appId: "1:433261890433:web:66722db4258d976e1ef680",
    measurementId: "G-Q95M2YKLGK"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;