let name = document.getElementById('userFullName');
let email = document.getElementById('userEmail');
let profilePicture = document.getElementById('profilePicture');
let profilePictureMenu = document.getElementById('profilePictureMenu');
let adminBadge = document.getElementById('adminBadge');
let tabDashboard = document.getElementById('tabDashboard');
let tabUserLogs = document.getElementById('tabUserLogs');
let adminOnlyTab = document.getElementById('adminOnlyTab');
let showMenu = document.getElementById('show-menu');
let menuClosed = false;
let ls = localStorage;
let sessionExpired = document.getElementById('sessionExpired');

let usernameSuccess1 = null, passwordSuccess1 = null;

// if user is not logged in properly, makes it go back to login page
if (ls.getItem("truthTabGraniteUsername") == null) {
    window.location = 'login';
} else {
    profilePicture.style.backgroundImage = 'url(' + ls.truthTabGraniteProfilePicture + ')';

    profilePictureMenu.style.backgroundImage = 'url(' + ls.truthTabGraniteProfilePicture + ')';
    name.innerText = ls.truthTabGraniteName;
    email.innerText = ls.truthTabGraniteEmail;

    welcomeUser.innerText = ls.truthTabGraniteName + "!";
}

// checks if username and password that they're logged in with still matches account they're logged in with for
// security, if it doesnt match it will say session expired and give one option to go to login page to re login
$.getJSON('https://sheetdb.io/api/v1/la8vm18y8v16z', function (member_details) {
    // looks through accounts database looking for match
    for (let i = 0; i < member_details.length; i++) {
        let locateAccount = member_details[i].username;
        let getAccountPassword = member_details[i].password;
        // checkes if username still matches
        if (ls.getItem("truthTabGraniteUsername") == locateAccount) {
            usernameSuccess1 = true;

            let adminStatus = member_details[i].adminStatus;

            if (adminStatus == 0) {
                adminBadge.style.display = 'none';
            } else if (adminStatus == 1) {
                adminBadge.style.display = 'flex';
            }
            // if username matches it will then check if that password also still matches
            if (ls.getItem("truthTabGranitePassword") == getAccountPassword) {
                passwordSuccess1 = true;

                let adminStatus = member_details[i].adminStatus;

                if (adminStatus == 0) {
                    adminBadge.style.display = 'none';
                    tabDashboard.style.display = 'none';
                    tabUserLogs.style.display = 'none';
                    adminOnlyTab.style.display = 'none';
                } else if (adminStatus == 1) {
                    adminBadge.style.display = 'flex';
                    tabDashboard.style.display = 'flex';
                    tabUserLogs.style.display = 'flex';
                    adminOnlyTab.style.display = 'flex';
                }
            }
        }
    }
    // shows a session expired message to user if username or password doesnt match
    if (usernameSuccess1 == null || passwordSuccess1 == null) {
        sessionExpired.style.display = 'flex';
    }
});