let username = document.getElementById('username');
let name = document.getElementById('name');
let profilePicture = document.getElementById('profilePicture');
let adminPanel = document.getElementById('adminPanel');
let welcomeUser = document.getElementById('welcomeUser');
let showMenu = document.getElementById('show-menu');
let menuClosed = false;
let ls = localStorage;

let usernameSuccess1 = null, passwordSuccess1 = null;

// function to make sidebar push content over on bigger devices when open or go over it on smaller devices

function slide() {
    if (window.matchMedia('screen and (max-width: 750px)').matches) {
        if (menuClosed == true) {
            menuClosed = false;
        } else {
            menuClosed = true;
        }
    } else {
        if (menuClosed == true) {
            adminPanel.style.paddingLeft = '325px';
            menuClosed = false;
        } else {
            adminPanel.style.paddingLeft = '25px';
            menuClosed = true;
        }
    }
}

showMenu.addEventListener('change', slide);

var form1 = document.getElementById('sheetdb-form-1');
        form1.addEventListener("submit", e => {
            e.preventDefault();
            fetch(form1.action, {
                method: "POST",
                body: new FormData(document.getElementById("sheetdb-form-1")),
            }).then(
                response => response.json()
            ).then((html) => {
                // you can put any JS code here
                window.location = 'adminPanel.html', '_blank';

            });
        });
        var form2 = document.getElementById('sheetdb-form-2');
        form2.addEventListener("submit", e => {
            e.preventDefault();
            fetch(form2.action, {
                method: "POST",
                body: new FormData(document.getElementById("sheetdb-form-2")),
            }).then(
                response => response.json()
            ).then((html) => {
                // you can put any JS code here
                window.location = 'adminPanel.html', '_blank';

            });
        });
        var form3 = document.getElementById('sheetdb-form-3');
        form3.addEventListener("submit", e => {
            e.preventDefault();
            fetch(form3.action, {
                method: "POST",
                body: new FormData(document.getElementById("sheetdb-form-3")),
            }).then(
                response => response.json()
            ).then((html) => {
                // you can put any JS code here
                window.location = 'adminPanel.html', '_blank';

            });
        });
        var form4 = document.getElementById('sheetdb-form-4');
        form4.addEventListener("submit", e => {
            e.preventDefault();
            fetch(form4.action, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then(
                response => response.json()
            ).then((html) => {
                // you can put any JS code here
                window.location = 'adminPanel.html', '_blank';

            });
        });

        var form5 = document.getElementById('sheetdb-form-5');
        form5.addEventListener("submit", e => {
            e.preventDefault();
            fetch(form5.action, {
                method: "POST",
                body: new FormData(document.getElementById("sheetdb-form-5")),
            }).then(
                response => response.json()
            ).then((html) => {
                // you can put any JS code here
                window.location = 'adminPanel.html', '_blank';

            });
        });
        var form6 = document.getElementById('sheetdb-form-6');
        form6.addEventListener("submit", e => {
            e.preventDefault();
            fetch(form6.action, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then(
                response => response.json()
            ).then((html) => {
                // you can put any JS code here
                window.location = 'adminPanel.html', '_blank';

            });
        });

// checks device width for small screen and if so runs slide function to disable it

if (window.matchMedia('screen and (max-width: 750px)').matches) {
    showMenu.checked = false;
    adminPanel.style.paddingLeft = '25px';
    slide();
}

// detects if user is logged in as an admin for security

if (ls.getItem("truthTabAdmin") == null) {
    window.location = 'login';
} else {
    name.innerText = ls.truthTabAdminName;
    username.innerText = "." + ls.truthTabAdminUsername;
    profilePicture.src = ls.truthTabAdminProfilePicture;

    welcomeUser.innerText = ls.truthTabAdminName + "!";
}

// checks if username and password that they're logged in with still matches account they're logged in with for
// security, if it doesnt match it will say session expired and give one option to go to login page to re login
$.getJSON('https://api.npoint.io/1619ae187ef7402b3aa6', function (admin_details) {
    // looks through accounts database looking for match
    for (let i = 0; i < admin_details.length; i++) {
        let locateAccount = admin_details[i].username;
        let getAccountPassword = admin_details[i].password;
        // checkes if username still matches
        if (ls.getItem("truthTabAdminUsername") == locateAccount) {
            usernameSuccess1 = true;

            let adminStatus = admin_details[i].adminStatus;

            if (adminStatus == 0) {
                adminBadge.style.display = 'none';
            } else if (adminStatus == 1) {
                adminBadge.style.display = 'flex';
            }
            // if username matches it will then check if that password also still matches
            if (ls.getItem("truthTabAdminPassword") == getAccountPassword) {
                passwordSuccess1 = true;

                let adminStatus = admin_details[i].adminStatus;

                if (adminStatus == 0) {
                    adminBadge.style.display = 'none';
                } else if (adminStatus == 1) {
                    adminBadge.style.display = 'flex';
                }
            }
        }
    }
    // shows a session expired message to user if username or password doesnt match
    if (usernameSuccess1 == null || passwordSuccess1 == null) {
        sessionExpired.style.display = 'flex';
    }
});