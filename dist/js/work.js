// Initialize Firebase
var config = {
    apiKey: "AIzaSyCHsgMEAFaLVfYIh8G--ePjhFE6SGGZ8o8",
    authDomain: "make-photo-gallery.firebaseapp.com",
    databaseURL: "https://make-photo-gallery.firebaseio.com",
    projectId: "make-photo-gallery",
    storageBucket: "make-photo-gallery.appspot.com",
    messagingSenderId: "841127452391"
};
firebase.initializeApp(config);

firebase.auth().onAuthStateChanged((user) => {

    console.log(user);
    if (user) {
        console.log(user.providerData[0]);
        document.getElementById("userd").innerHTML = "Hi! Welcome " + user.providerData[0].displayName + " having emailid" + user.providerData[0].email + " in PGalras"
        document.getElementById("profile_pic").src = user.providerData[0].photoURL
        document.getElementById("profile_pic1").src = user.providerData[0].photoURL
    } else {
        window.location.href = "index.html"
    }

});

logout = () => {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
    }).catch(function(error) {
        // An error happened.
    });
}