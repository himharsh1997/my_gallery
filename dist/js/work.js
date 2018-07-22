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

    if (user) {
        window.location.href = "work.html"
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