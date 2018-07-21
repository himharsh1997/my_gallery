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

function change(x) {
    var p = x.toString();
    if (p == "sup") {
        document.getElementById('signup').classList.add('mauto');
        document.getElementById('signup').classList.remove('forward');
        document.getElementById('login').classList.add('forward');
        document.getElementById('login').classList.remove('mauto');
    } else if (x == "lin") {
        document.getElementById('signup').classList.add('forward');
        document.getElementById('signup').classList.remove('mauto');
        document.getElementById('login').classList.add('mauto');
        document.getElementById('login').classList.remove('forward');
    }
}

signup = () => {
    var fn = document.getElementById('first_name');
    var ln = document.getElementById('last_name');
    var eid = document.getElementById('emailid')
    var pass = document.getElementById('Password')
    var rpass = document.getElementById('RPassword')
    var errorn = document.getElementById('errn');
    var errorem = document.getElementById('errem')
    var errorpass = document.getElementById('errpass')
    var rege = /[A-Za-z0-9]{3,15}@[a-z]{5}\.(com|in|co)$/;
    var regx = /^[A-Z][a-z]{3,30}$/;

    if (regx.test(fn.value.toString()) == true) {
        if (regx.test(ln.value.toString()) == true) {

            if (rege.test(eid.value.toString()) == true) {
                if (pass.value.toString() != "") {
                    if (rpass.value.toString() != "") {

                        if (rpass.value.toString() == pass.value.toString()) {
                            firebase.auth().createUserWithEmailAndPassword(eid.value.toString(), pass.value.toString()).catch(function(error) {
                                // Handle Errors here.
                                var errorCode = error.code;
                                var errorMessage = error.message;
                                // ...
                            });

                        } else {

                            errorpass.innerHTML = "Password & Retype password not same"


                        }

                    } else {
                        errorpass.innerHTML = "Empty Input Not valid"
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