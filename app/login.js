let loginPanel1 = document.getElementById('loginPanel1');
let loginPanel2 = document.getElementById('loginPanel2');

let memberTab = document.getElementById('memberTab');
let adminTab = document.getElementById('adminTab');

let username1 = document.getElementById('username1');
let password1 = document.getElementById('password1');

let username2 = document.getElementById('username2');
let password2 = document.getElementById('password2');

let viewPassword1Btn = document.getElementById('viewPassword1');
let viewPassword2Btn = document.getElementById('viewPassword2');

let viewingPassword1 = false, viewingPassword2 = false;

let loginBtn1 = document.getElementById('loginBtn1');
let loginBtn2 = document.getElementById('loginBtn2');

let errorLogin1 = document.getElementById('errorLogin1');
let errorLogin2 = document.getElementById('errorLogin2');

let rememberMe1 = document.getElementById('rememberMe1');
let rememberMe2 = document.getElementById('rememberMe2');

let ls = localStorage;

let memberLoginFocused = true, adminLoginFocused = false;

let usernameSuccess1 = null, passwordSuccess1 = null;
let usernameSuccess2 = null, passwordSuccess2 = null;

// looks for if user has checked remember me before to auto input their info

if (ls.getItem("truthTabMember") == 'undefined') {
    console.log('you are not saved as an member');
} else {
    username1.value = ls.getItem('autoTruthTabMemberUsername', username1.value);
    password1.value = ls.getItem('autoTruthTabMemberPassword', password1.value);
}

if (ls.getItem("truthTabAdmin") == 'undefined') {
    console.log('you are not saved as an admin');
} else {
    username2.value = ls.getItem('autoTruthTabAdminUsername', username2.value);
    password2.value = ls.getItem('autoTruthTabAdminPassword', password2.value);
}

// listens for enter key being pressed and trys login determining on which tab user is on

window.addEventListener('keypress', function (e) {
    if (e.key === 'Enter' && memberLoginFocused == true) {
        loginMember();
    } else if (e.key === 'Enter' && adminLoginFocused == true) {
        loginAdmin();
    }
});

// listens for click on login button and trys login

loginBtn1.addEventListener('click', loginMember);

loginBtn2.addEventListener('click', loginAdmin);

viewPassword1Btn.addEventListener('click', viewPassword1);

viewPassword2Btn.addEventListener('click', viewPassword2);

// listens for click to switch tabs

memberForm();

memberTab.addEventListener('click', memberForm);

adminTab.addEventListener('click', adminForm);

function memberForm() {
    loginPanel1.style.display = 'flex';
    loginPanel2.style.display = 'none';
    memberTab.style.backgroundColor = 'transparent';
    adminTab.style.backgroundColor = '#222';
    memberTab.style.color = '#fff';
    adminTab.style.color = '#b3b3b3';
    memberLoginFocused = true;
    adminLoginFocused = false;
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
}

function viewPassword1() {
    if (viewingPassword1 == true) {
        password1.type="password";
        viewPassword1Btn.classList.toggle("eye-slash");

        viewingPassword1 = false;
    } else {
        password1.type="text";
        viewPassword1Btn.classList.toggle("eye-slash");

        viewingPassword1 = true;
    }
}

function viewPassword2() {
    if (viewingPassword2 == true) {
        password2.type="password";
        viewPassword2Btn.classList.toggle("eye-slash");

        viewingPassword2 = false;
    } else {
        password2.type="text"; 
        viewPassword2Btn.classList.toggle("eye-slash");

        viewingPassword2 = true;
    }
}

function loginMember() {
    // fetches JSON from account database
    $.getJSON('https://api.npoint.io/75b2953ec730e3b4fdfb', function (member_details) {
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
                        ls.setItem('autoTruthTabMemberUsername', username1.value);
                        ls.setItem('autoTruthTabMemberPassword', password1.value);
                        ls.setItem('autoTruthTabMemberName', member_details[i].name);

                        ls.setItem('truthTabMemberUsername', username1.value);
                        ls.setItem('truthTabMemberPassword', password1.value);
                        ls.setItem('truthTabMemberProfilePicture', member_details[i].profilePicture);
                        ls.setItem('truthTabMemberName', member_details[i].name);
                        ls.setItem('truthTabMember', username1.value);

                        window.location = "memberPanel.html";
                    }

                    ls.setItem('truthTabMemberUsername', username1.value);
                    ls.setItem('truthTabMemberPassword', password1.value);
                    ls.setItem('truthTabMemberProfilePicture', member_details[i].profilePicture);
                    ls.setItem('truthTabMemberName', member_details[i].name);
                    ls.setItem('truthTabMember', username1.value);

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
    $.getJSON('https://api.npoint.io/1619ae187ef7402b3aa6', function (admin_details) {
        // looks through accounts database looking for match
        for (let i = 0; i < admin_details.length; i++) {
            let locateAccount = admin_details[i].username;
            let getAccountPassword = admin_details[i].password;
            // checkes if username matches
            if (username2.value == locateAccount) {
                usernameSuccess2 = true;
                // if username matches it will then check if that password also matches
                if (password2.value == getAccountPassword) {
                    passwordSuccess2 = true;
                    /* once account login is successfull it checks if user checked
                    remember me and saves it to local storage */
                    if (rememberMe2.checked) {
                        // saves info to local storage
                        ls.setItem('autoTruthTabAdminUsername', username2.value);
                        ls.setItem('autoTruthTabAdminPassword', password2.value);
                        ls.setItem('autoTruthTabAdminName', admin_details[i].name);

                        ls.setItem('truthTabAdminUsername', username2.value);
                        ls.setItem('truthTabAdminPassword', password2.value);
                        ls.setItem('truthTabAdminName', admin_details[i].name);
                        ls.setItem('truthTabAdminProfilePicture', admin_details[i].profilePicture);

                        window.location = "adminPanel.html";
                    }

                    ls.setItem('truthTabAdminUsername', username2.value);
                    ls.setItem('truthTabAdminPassword', password2.value);
                    ls.setItem('truthTabAdminProfilePicture', admin_details[i].profilePicture);
                    ls.setItem('truthTabAdminName', admin_details[i].name);
                    ls.setItem('truthTabAdmin', username2.value);

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