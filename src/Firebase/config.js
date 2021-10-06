import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const  firebaseConfig = {
    apiKey: "AIzaSyAM2kpUUCuo-I5Vd9gfKHHIFH8Z5bjI59Q",
    authDomain: "instagramclone-d039c.firebaseapp.com",
    projectId: "instagramclone-d039c",
    storageBucket: "instagramclone-d039c.appspot.com",
    messagingSenderId: "595964572819",
    appId: "1:595964572819:web:23fe776b8ec41295314966",
    measurementId: "G-PQWZT9ZP8J"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
} else {
    firebase.app();
}


const provider = new firebase.auth.GoogleAuthProvider();

export const login = async () => {
    const res = await firebase.auth().signInWithPopup(provider)
    return res.user
}

export const logout = async () => {
    await firebase.auth().signOut()
    console.log("Logout Success")
}