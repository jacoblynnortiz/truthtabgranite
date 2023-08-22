let username1 = document.getElementById('username1');
let password1 = document.getElementById('password1');
let loginBtn1 = document.getElementById('loginBtn1');
let errorLogin1 = document.getElementById('errorLogin1');
let rememberMe1 = document.getElementById('rememberMe1');
let username2 = document.getElementById('username2');
let password2 = document.getElementById('password2');
let loginBtn2 = document.getElementById('loginBtn2');
let errorLogin2 = document.getElementById('errorLogin2');
let rememberMe2 = document.getElementById('rememberMe2');
let ls = localStorage

let memberLoginFocused = true;
let adminLoginFocused = false;

let memberTab = document.getElementById('memberTab');
let adminTab = document.getElementById('adminTab');
let loginPanel1 = document.getElementById('loginPanel1');
let loginPanel2 = document.getElementById('loginPanel2');

let usernameSuccess1 = null;
let passwordSuccess1 = null;
let usernameSuccess2 = null;
let passwordSuccess2 = null;

// look for rememberMe variables 

if (ls.getItem("truthTabAdmin") == 'undefined') {
    console.log('you are not saved as an admin');
} else {
    username2.value = ls.getItem('autoTruthTabAdminUsername', username2.value);
    password2.value = ls.getItem('autoTruthTabAdminPassword', password2.value);
}

if (ls.getItem("truthTabMember") == 'undefined') {
    console.log('you are not saved as an member');
} else {
    username1.value = ls.getItem('autoTruthTabMemberUsername', username1.value);
    password1.value = ls.getItem('autoTruthTabMemberPassword', password1.value);
}

window.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        if (memberLoginFocused == true) {
            loginMember();
        } else if (adminLoginFocused == true) {
            loginAdmin();
        }
    }
});

loginBtn1.addEventListener('click', function () {
    loginMember();
});

loginBtn2.addEventListener('click', function () {
    loginAdmin();
});

// tab switcher

memberForm();

memberTab.addEventListener('click', function memberForm() {
    loginPanel1.style.display = 'flex';
    loginPanel2.style.display = 'none';
    memberTab.style.backgroundColor = 'transparent';
    adminTab.style.backgroundColor = '#222';
    memberTab.style.color = '#fff';
    adminTab.style.color = '#b3b3b3';
    memberLoginFocused = true;
    adminLoginFocused = false;
});

adminTab.addEventListener('click', function adminForm() {
    loginPanel1.style.display = 'none';
    loginPanel2.style.display = 'flex';
    adminTab.style.backgroundColor = 'transparent';
    memberTab.style.backgroundColor = '#222';
    memberTab.style.color = '#b3b3b3';
    adminTab.style.color = '#fff';
    memberLoginFocused = false;
    adminLoginFocused = true;
});

function memberForm() {
    loginPanel1.style.display = 'flex';
    loginPanel2.style.display = 'none';
    memberTab.style.backgroundColor = 'transparent';
    adminTab.style.backgroundColor = '#222';
    memberTab.style.color = '#fff';
    adminTab.style.color = '#b3b3b3';
}

function loginAdmin() {
    $.getJSON('https://api.npoint.io/26be1e09aa7b22d08ce6', function (admin_details) {
        for (let i = 0; i < admin_details.length; i++) {
            let locateAccount = admin_details[i].username
            let getAccountPassword = admin_details[i].password
            if (username2.value == locateAccount) {
                usernameSuccess2 = true;
                if (password2.value == getAccountPassword) {
                    passwordSuccess2 = true;
                    if (rememberMe2.checked) {
                        // Respond to the result
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
        if (usernameSuccess2 == null && passwordSuccess2 == null) {
            errorLogin2.innerText = "The entered username and password is invalid, please try entering login details again.";
            errorLogin2.style.padding = '15px';
            usernameSuccess2 = null;
            passwordSuccess2 = null;
        }
        if(usernameSuccess2 == true && passwordSuccess2 == null) {
            errorLogin2.innerText = "The entered password is invalid, please try entering password again.";
            errorLogin2.style.padding = '15px';
            usernameSuccess2 = null;
            passwordSuccess2 = null;
        }

    });

}

function loginMember() {
    $.getJSON('https://api.npoint.io/080a8e433b1f4f6af3b2', function (member_details) {
        for (let i = 0; i < member_details.length; i++) {
            let locateAccount = member_details[i].username
            let getAccountPassword = member_details[i].password
            if (username1.value == locateAccount) {
                usernameSuccess1 = true;
                if (password1.value == getAccountPassword) {
                    passwordSuccess1 = true;
                    if (rememberMe1.checked) {
                        // Respond to the result
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
        if (usernameSuccess1 == null && passwordSuccess1 == null) {
            errorLogin1.innerText = "The entered username and password is invalid, please try entering login details again.";
            errorLogin1.style.padding = '15px';
            usernameSuccess1 = null;
            passwordSuccess1 = null;
        }
        if(usernameSuccess1 == true && passwordSuccess1 == null) {
            errorLogin1.innerText = "The entered password is invalid, please try entering password again.";
            errorLogin1.style.padding = '15px';
            usernameSuccess1 = null;
            passwordSuccess1 = null;
        }

    });
}