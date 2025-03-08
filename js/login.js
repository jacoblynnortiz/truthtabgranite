let username = document.getElementById('username');
let password = document.getElementById('password');
let viewPasswordBtn = document.getElementById('viewPassword');

let loginBtn = document.getElementById('loginBtn');

let errorLogin = document.getElementById('errorLogin');

let rememberMe = document.getElementById('rememberMe');

let ls = localStorage;

let memberLoginFocused = true;

let resetPasswordFocused1 = false, resetPasswordFocused2 = false;

let usernameSuccess = null, passwordSuccess = null;

// looks for if user has checked remember me before to auto input their info

if (ls.getItem("truthTabGraniteUsername") == 'undefined') {
    console.log('you are not saved as an member');
} else {
    username.value = ls.getItem('autoTruthTabGraniteUsername', username.value);
    password.value = ls.getItem('autoTruthTabGranitePassword', password.value);
}

// listens for enter key being pressed and trys login determining on which tab user is on

window.addEventListener('keypress', function (e) {
    if (e.key === 'Enter' && memberLoginFocused == true) {
        login();
    } else if (e.key === 'Enter' && resetPasswordFocused1 == true) {
        lookUpEmail();
    } else if (e.key === 'Enter' && resetPasswordFocused2 == true) {
        update();
    }
});

// listens for click on login button and trys login

loginBtn.addEventListener('click', login);

//  reveal password toggler

let PasswordToggled = false;

viewPasswordBtn.addEventListener('click', viewPassword);

function viewPassword() {
    password.type = 'text';
    if(PasswordToggled) {
        password.type = 'password';
        viewPasswordBtn.firstChild.classList.add('fa-eye-slash');
        viewPasswordBtn.firstChild.classList.remove('fa-eye');
        PasswordToggled = false;
    } else {
        password.type = 'text';
        viewPasswordBtn.firstChild.classList.add('fa-eye');
        viewPasswordBtn.firstChild.classList.remove('fa-eye-slash');
        PasswordToggled = true;
    }

}

function login() {
    // fetches JSON from account database
    $.getJSON('https://sheetdb.io/api/v1/la8vm18y8v16z', function (member_details) {
        // looks through accounts database looking for match
        for (let i = 0; i < member_details.length; i++) {
            let locateAccount = member_details[i].username;
            let getAccountPassword = member_details[i].password;
            // checkes if username matches
            if (username.value == locateAccount) {
                usernameSuccess = true;
                // if username matches it will then check if that password also matches
                if (password.value == getAccountPassword) {
                    passwordSuccess = true;
                    /* once account login is successfull it checks if user checked
                    remember me and saves it to local storage */
                    if (rememberMe.checked) {
                        // saves info to local storage
                        ls.setItem('autoTruthTabGraniteUsername', username.value);
                        ls.setItem('autoTruthTabGranitePassword', password.value);
                        ls.setItem('autoTruthTabGraniteName', member_details[i].name);

                        ls.setItem('truthTabGraniteUsername', username.value);
                        ls.setItem('truthTabGranitePassword', password.value);
                        ls.setItem('truthTabGraniteProfilePicture', member_details[i].profilePicture);
                        ls.setItem('truthTabGraniteName', member_details[i].name);
                        ls.setItem('truthTabGraniteEmail', member_details[i].email);

                        if (member_details[i].adminStatus == 0) {
                            ls.setItem("truthTabGraniteAdmin", 0);
                        } else if (member_details[i].adminStatus == 1) {
                            ls.setItem("truthTabGraniteAdmin", 1);
                        } else {
                            ls.setItem("truthTabGraniteAdmin", 0);
                        }

                        window.location = "dashboard.html";
                    }

                    ls.setItem('truthTabGraniteUsername', username.value);
                    ls.setItem('truthTabGranitePassword', password.value);
                    ls.setItem('truthTabGraniteProfilePicture', member_details[i].profilePicture);
                    ls.setItem('truthTabGraniteName', member_details[i].name);
                    ls.setItem('truthTabGraniteEmail', member_details[i].email);

                    if (member_details[i].adminStatus == 0) {
                        ls.setItem("truthTabGraniteAdmin", 0);
                    } else if (member_details[i].adminStatus == 1) {
                        ls.setItem("truthTabGraniteAdmin", 1);
                    } else {
                        ls.setItem("truthTabGraniteAdmin", 0);
                    }

                    window.location = "dashboard.html";
                }
            }
        }
        // shows an error message to user if username or password doesnt match
        if (usernameSuccess == null && passwordSuccess == null) {
            errorLogin.innerText = "The entered username and password is invalid, please try entering login details again.";
            errorLogin.style.padding = '15px';
            usernameSuccess = null;
            passwordSuccess = null;
        }
        if (usernameSuccess == true && passwordSuccess == null) {
            errorLogin.innerText = "The entered password is invalid, please try entering password again.";
            errorLogin.style.padding = '15px';
            usernameSuccess = null;
            passwordSuccess = null;
        }
    });
}