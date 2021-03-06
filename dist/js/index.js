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
    } else {}

});
var database = firebase.database();
var fn = document.getElementById('first_name');
var ln = document.getElementById('last_name');
var eid = document.getElementById('emailid')
var pass = document.getElementById('Password')
var rpass = document.getElementById('RPassword')
var errorn = document.getElementById('errn');
var errorem = document.getElementById('errem')
var errorpass = document.getElementById('errpass')
var gprovider = new firebase.auth.GoogleAuthProvider();
var fprovider = new firebase.auth.FacebookAuthProvider();
gprovider.setCustomParameters({
    'display': 'popup'
});
fprovider.setCustomParameters({
    'display': 'popup'
});
// initialize Account Kit with CSRF protection
AccountKit_OnInteractive = function() {
    AccountKit.init({
        appId: "282248262324062",
        state: "{{csrf}}",
        version: "v1.0",
        fbAppEventsEnabled: true,
        redirect: "https://make-photo-gallery.firebaseapp.com/__/auth/handler"
    });
};

// login callback
function loginCallback(response) {
    if (response.status === "PARTIALLY_AUTHENTICATED") {
        var code = response.code;
        var csrf = response.state;
        // Send code to server to exchange for access token
    } else if (response.status === "NOT_AUTHENTICATED") {
        // handle authentication failure
    } else if (response.status === "BAD_PARAMS") {
        // handle bad parameters
    }
}

function change(x) {

    var p = x.toString();
    if (p == "sup") {
        document.getElementById('signup').classList.add('mauto');
        document.getElementById('signup').classList.remove('forward');
        document.getElementById('login').classList.add('forward');
        document.getElementById('login').classList.remove('mauto');
    } else if (x == "lin") {
        fn.value = "";
        ln.value = '';
        eid.value = '';
        pass.value = '';
        rpass.value = '';
        errorn.innerHTML = "";
        errorem.innerHTML = "";
        errorpass.innerHTML = "";

        document.getElementById('signup').classList.add('forward');
        document.getElementById('signup').classList.remove('mauto');
        document.getElementById('login').classList.add('mauto');
        document.getElementById('login').classList.remove('forward');
    }
}

signup = () => {

    var rege = /[A-Za-z0-9.]{6,15}@[a-z]{5}\.(com|in|co)$/;
    var regx = /^[A-Z][a-z]{3,30}$/;

    if (regx.test(fn.value.toString()) == true) {
        if (regx.test(ln.value.toString()) == true) {

            if (rege.test(eid.value.toString()) == true) {
                if (pass.value.toString() != "") {
                    if (rpass.value.toString() != "") {

                        if (rpass.value.toString().length != 0 && pass.value.toString().length != 0) {
                            if (rpass.value.toString() == pass.value.toString()) {
                                firebase.auth().createUserWithEmailAndPassword(eid.value.toString(), pass.value.toString()).then((user) => {
                                    // signup data start
                                    let data = {
                                        "name": fn.value.toString() + " " + ln.value.toString(),
                                        "email": eid.value.toString(),
                                        "photoURL": ""

                                    }



                                    var updates = {};
                                    updates['/users/' + firebase.auth().currentUser.uid + '/'] = data;


                                    firebase.database().ref().update(updates);
                                    // signup data gone
                                    fn.value = "";
                                    ln.value = '';
                                    eid.value = '';
                                    pass.value = '';
                                    rpass.value = '';
                                    errorpass.innerHTML = ""
                                    errorem.innerHTML = '';
                                    errorn.innerHTML = '';

                                }).catch(function(error) {
                                    // Handle Errors here.
                                    var errorCode = error.code;
                                    var errorMessage = error.message;
                                    console.log(errorMessage);

                                    // ...
                                });

                            } else {

                                errorpass.innerHTML = "Password & Retype password not same"


                            }
                        } else {
                            errorpass.innerHTML = "Password should be at least 6 characters"
                        }

                    } else {

                        errorpass.innerHTML = "Empty Password Input Not valid"
                        errorem.innerHTML = '';
                        errorn.innerHTML = '';


                    }

                } else {
                    errorpass.innerHTML = "Empty Password Input Not valid"
                    errorem.innerHTML = '';
                    errorn.innerHTML = '';

                }

            } else {
                errorem.innerHTML = "A-Z,a-z,0-9,. is valid"
                errorn.innerHTML = '';

            }

        } else {
            errorn.innerHTML = "Last: Start with A-Z,rest a-z is valid"


        }

    } else {
        errorn.innerHTML = "First: Start A-Z,rest a-z is valid"

    }

}

googlego = () => {
    firebase.auth().signInWithPopup(gprovider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    });
}
facebookgo = () => {
    firebase.auth().signInWithPopup(fprovider).then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    });
}
signin = () => {
    var email = document.getElementById("email_login");
    var password = document.getElementById("password_login");
    firebase.auth().signInWithEmailAndPassword(email.value, password.value).then(() => {
        console.log("Successfully login");
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });
}