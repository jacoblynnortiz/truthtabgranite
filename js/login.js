let loginPanel1 = document.getElementById('loginPanel1');
let loginPanel2 = document.getElementById('loginPanel2');

let memberTab = document.getElementById('memberTab');
let adminTab = document.getElementById('adminTab');

let username1 = document.getElementById('username1');
let password1 = document.getElementById('password1');
let viewPasswordBtn1 = document.getElementById('viewPassword1');

let username2 = document.getElementById('username2');
let password2 = document.getElementById('password2');
let viewPasswordBtn2 = document.getElementById('viewPassword2');

let loginBtn1 = document.getElementById('loginBtn1');
let loginBtn2 = document.getElementById('loginBtn2');

let errorLogin1 = document.getElementById('errorLogin1');
let errorLogin2 = document.getElementById('errorLogin2');

let rememberMe1 = document.getElementById('rememberMe1');
let rememberMe2 = document.getElementById('rememberMe2');

let ls = localStorage;

let memberLoginFocused = true, adminLoginFocused = false;

let resetPasswordFocused1 = false, resetPasswordFocused2 = false;

let usernameSuccess1 = null, passwordSuccess1 = null;
let usernameSuccess2 = null, passwordSuccess2 = null;

// looks for if user has checked remember me before to auto input their info

if (ls.getItem("truthTabGraniteUsername") == 'undefined') {
    console.log('you are not saved as an member');
} else {
    username1.value = ls.getItem('autoTruthTabGraniteUsername', username1.value);
    password1.value = ls.getItem('autoTruthTabGranitePassword', password1.value);
}

if (ls.getItem("truthTabGraniteUsername") == 'undefined') {
    console.log('you are not saved as an admin');
} else {
    username2.value = ls.getItem('autoTruthTabGraniteUsername', username2.value);
    password2.value = ls.getItem('autoTruthTabGranitePassword', password2.value);
}

// listens for enter key being pressed and trys login determining on which tab user is on

window.addEventListener('keypress', function (e) {
    if (e.key === 'Enter' && memberLoginFocused == true) {
        loginMember();
    } else if (e.key === 'Enter' && adminLoginFocused == true) {
        loginAdmin();
    } else if (e.key === 'Enter' && resetPasswordFocused1 == true) {
        lookUpEmail();
    } else if (e.key === 'Enter' && resetPasswordFocused2 == true) {
        update();
    }
});

// listens for click on login button and trys login

loginBtn1.addEventListener('click', loginMember);

loginBtn2.addEventListener('click', loginAdmin);

// listens for click to switch tabs

memberForm();

memberTab.addEventListener('click', memberForm);

adminTab.addEventListener('click', adminForm);

//  reveal password toggler

let PasswordToggled1 = false;
let PasswordToggled2 = false;

viewPasswordBtn1.addEventListener('click', viewPassword1);
viewPasswordBtn2.addEventListener('click', viewPassword2);

function viewPassword1() {
    password1.type = 'text';
    if(PasswordToggled1) {
        password1.type = 'password';
        viewPasswordBtn1.firstChild.classList.add('fa-eye-slash');
        viewPasswordBtn1.firstChild.classList.remove('fa-eye');
        PasswordToggled1 = false;
    } else {
        password1.type = 'text';
        viewPasswordBtn1.firstChild.classList.add('fa-eye');
        viewPasswordBtn1.firstChild.classList.remove('fa-eye-slash');
        PasswordToggled1 = true;
    }

}

function viewPassword2() {
    password2.type = 'text';
    if(PasswordToggled2) {
        password2.type = 'password';
        viewPasswordBtn2.firstChild.classList.add('fa-eye-slash');
        viewPasswordBtn2.firstChild.classList.remove('fa-eye');
        PasswordToggled2 = false;
    } else {
        password2.type = 'text';
        viewPasswordBtn2.firstChild.classList.add('fa-eye');
        viewPasswordBtn2.firstChild.classList.remove('fa-eye-slash');
        PasswordToggled2 = true;
    }

}

function memberForm() {
    loginPanel1.style.display = 'flex';
    loginPanel2.style.display = 'none';
    memberTab.style.backgroundColor = 'transparent';
    adminTab.style.backgroundColor = '#222';
    memberTab.style.color = '#fff';
    adminTab.style.color = '#b3b3b3';
    memberLoginFocused = true;
    adminLoginFocused = false;
    resetPasswordFocused1 = false;
    resetPasswordFocused2 = false;
}

function adminForm() {
    loginPanel1.style.display = 'none';
    loginPanel2.style.display = 'flex';
    adminTab.style.backgroundColor = 'transparent';
    memberTab.style.backgroundColor = '#222';
    memberTab.style.color = '#b3b3b3';
    adminTab.style.color = '#fff';
    memberLoginFocused = false;
    adminLoginFocused = true;
    resetPasswordFocused1 = false;
    resetPasswordFocused2 = false;
}

function loginMember() {
    // fetches JSON from account database
    $.getJSON('https://sheetdb.io/api/v1/la8vm18y8v16z', function (member_details) {
        // looks through accounts database looking for match
        for (let i = 0; i < member_details.length; i++) {
            let locateAccount = member_details[i].username;
            let getAccountPassword = member_details[i].password;
            // checkes if username matches
            if (username1.value == locateAccount) {
                usernameSuccess1 = true;
                // if username matches it will then check if that password also matches
                if (password1.value == getAccountPassword) {
                    passwordSuccess1 = true;
                    /* once account login is successfull it checks if user checked
                    remember me and saves it to local storage */
                    if (rememberMe1.checked) {
                        // saves info to local storage
                        ls.setItem('autoTruthTabGraniteUsername', username1.value);
                        ls.setItem('autoTruthTabGranitePassword', password1.value);
                        ls.setItem('autoTruthTabGraniteName', member_details[i].name);

                        ls.setItem('truthTabGraniteUsername', username1.value);
                        ls.setItem('truthTabGranitePassword', password1.value);
                        ls.setItem('truthTabGraniteProfilePicture', member_details[i].profilePicture);
                        ls.setItem('truthTabGraniteName', member_details[i].name);
                        ls.setItem('truthTabGraniteEmail', member_details[i].email);

                        window.location = "memberPanel.html";
                    }

                    ls.setItem('truthTabGraniteUsername', username1.value);
                    ls.setItem('truthTabGranitePassword', password1.value);
                    ls.setItem('truthTabGraniteProfilePicture', member_details[i].profilePicture);
                    ls.setItem('truthTabGraniteName', member_details[i].name);
                    ls.setItem('truthTabGraniteEmail', member_details[i].email);

                    window.location = "memberPanel.html";
                }
            }
        }
        // shows an error message to user if username or password doesnt match
        if (usernameSuccess1 == null && passwordSuccess1 == null) {
            errorLogin1.innerText = "The entered username and password is invalid, please try entering login details again.";
            errorLogin1.style.padding = '15px';
            usernameSuccess1 = null;
            passwordSuccess1 = null;
        }
        if (usernameSuccess1 == true && passwordSuccess1 == null) {
            errorLogin1.innerText = "The entered password is invalid, please try entering password again.";
            errorLogin1.style.padding = '15px';
            usernameSuccess1 = null;
            passwordSuccess1 = null;
        }
    });
}

function loginAdmin() {
    // fetches JSON from account database
    $.getJSON('https://sheetdb.io/api/v1/la8vm18y8v16z', function (member_details) {
        // looks through accounts database looking for match
        for (let i = 0; i < member_details.length; i++) {
            let locateAccount = member_details[i].username;
            let getAccountPassword = member_details[i].password;
            // checkes if username matches
            if (username2.value == locateAccount) {
                usernameSuccess2 = true;
                // if username matches it will then check if that password also matches
                if (password2.value == getAccountPassword) {
                    passwordSuccess2 = true;
                    if (member_details[i].adminStatus == 0) {
                        ls.setItem("truthTabGraniteAdmin", 0);
                        window.location = "403.html";
                    } else if (member_details[i].adminStatus == 1) {
                        ls.setItem("truthTabGraniteAdmin", 1);
                    } else {
                        ls.setItem("truthTabGraniteAdmin", 0);
                        window.location = "403.html";
                    }
                    /* once account login is successfull it checks if user checked
                    remember me and saves it to local storage */
                    if (rememberMe2.checked) {
                        // saves info to local storage
                        ls.setItem('autoTruthTabGraniteUsername', username2.value);
                        ls.setItem('autoTruthTabGranitePassword', password2.value);
                        ls.setItem('autoTruthTabGraniteName', member_details[i].name);

                        ls.setItem('truthTabGraniteUsername', username2.value);
                        ls.setItem('truthTabGranitePassword', password2.value);
                        ls.setItem('truthTabGraniteName', member_details[i].name);
                        ls.setItem('truthTabGraniteEmail', member_details[i].email);
                        ls.setItem('truthTabGraniteProfilePicture', member_details[i].profilePicture);

                        window.location = "adminPanel.html";
                    }

                    ls.setItem('truthTabGraniteUsername', username2.value);
                    ls.setItem('truthTabGranitePassword', password2.value);
                    ls.setItem('truthTabGraniteProfilePicture', member_details[i].profilePicture);
                    ls.setItem('truthTabGraniteName', member_details[i].name);
                    ls.setItem('truthTabGraniteEmail', member_details[i].email);

                    window.location = "adminPanel.html";
                }
            }
        }
        // shows an error message to user if username or password doesnt match
        if (usernameSuccess2 == null && passwordSuccess2 == null) {
            errorLogin2.innerText = "The entered username and password is invalid, please try entering login details again.";
            errorLogin2.style.padding = '15px';
            usernameSuccess2 = null;
            passwordSuccess2 = null;
        }
        if (usernameSuccess2 == true && passwordSuccess2 == null) {
            errorLogin2.innerText = "The entered password is invalid, please try entering password again.";
            errorLogin2.style.padding = '15px';
            usernameSuccess2 = null;
            passwordSuccess2 = null;
        }
    });
}