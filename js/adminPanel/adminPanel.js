let username = document.getElementById('username');
let name = document.getElementById('name');
let profilePicture = document.getElementById('profilePicture');
let adminPanel = document.getElementById('adminPanel');
let welcomeUser = document.getElementById('welcomeUser');
let showMenu = document.getElementById('show-menu');
let menuClosed = false;
let ls = localStorage;

let dashboardContainer = document.getElementById('dashboardContainer');
let userLogsContainer = document.getElementById('userLogsContainer');

let dashboardContainerToggle = document.getElementById('dashboardContainerToggle');
let userLogsContainerToggle = document.getElementById('userLogsContainerToggle');

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

// checks device width for small screen and if so runs slide function to disable it

if (window.matchMedia('screen and (max-width: 750px)').matches) {
    showMenu.checked = false;
    adminPanel.style.paddingLeft = '25px';
    slide();
}

// detects if user is saved as an admin or not for security

if (ls.getItem("truthTabGraniteAdmin") == null) {
    ls.setItem("truthTabGraniteAdmin", 0);
    window.location = '403.html';
} else if (ls.getItem("truthTabGraniteAdmin") == 0) {
    ls.setItem("truthTabGraniteAdmin", 0);
    window.location = '403.html';
} else if (ls.getItem("truthTabGraniteAdmin") == 1) {
    ls.setItem("truthTabGraniteAdmin", 1);
    name.innerText = ls.truthTabGraniteName;
    username.innerText = "." + ls.truthTabGraniteUsername;
    profilePicture.src = ls.truthTabGraniteProfilePicture;

    welcomeUser.innerText = ls.truthTabGraniteName + "!";
} else {
    ls.setItem("truthTabGraniteAdmin", 0);
    window.location = '403.html';
}

// checks if username and password that they're logged in with still matches account they're logged in with for
// security, if it doesnt match it will say session expired and give one option to go to login page to re login
$.getJSON('https://sheetdb.io/api/v1/la8vm18y8v16z', function (admin_details) {
    // looks through accounts database looking for match
    for (let i = 0; i < admin_details.length; i++) {
        let locateAccount = admin_details[i].username;
        let getAccountPassword = admin_details[i].password;
        // checkes if username still matches
        if (ls.getItem("truthTabGraniteUsername") == locateAccount) {
            usernameSuccess1 = true;

            let adminStatus = admin_details[i].adminStatus;

            if (adminStatus == 0) {
                adminBadge.style.display = 'none';
            } else if (adminStatus == 1) {
                adminBadge.style.display = 'flex';
            }
            // if username matches it will then check if that password also still matches
            if (ls.getItem("truthTabGranitePassword") == getAccountPassword) {
                passwordSuccess1 = true;

                let adminStatus = admin_details[i].adminStatus;

                // checks to see if changes were made to the database on admin status in case
                // computer is still saved as an admin

                if (adminStatus == 0) {
                    adminBadge.style.display = 'none';
                    ls.setItem("truthTabGraniteAdmin", 0);
                    window.location = "403.html";
                } else if (adminStatus == 1) {
                    adminBadge.style.display = 'flex';
                    ls.setItem("truthTabGraniteAdmin", 1);
                }
            }
        }
    }
    // shows a session expired message to user if username or password doesnt match
    if (usernameSuccess1 == null || passwordSuccess1 == null) {
        sessionExpired.style.display = 'flex';
    }
});

dashboardContainerToggler();

dashboardContainerToggle.addEventListener('click', dashboardContainerToggler);

userLogsContainerToggle.addEventListener('click', userLogsContainerToggler);

function dashboardContainerToggler() {
    dashboardContainer.classList.add('tab-container-active');
    userLogsContainer.classList.remove('tab-container-active');

    dashboardContainerToggle.classList.add('tab-active');
    userLogsContainerToggle.classList.remove('tab-active');

    dashboardContainerToggle.classList.remove('tab-inactive');
    userLogsContainerToggle.classList.add('tab-inactive');

    if (window.matchMedia('screen and (max-width: 750px)').matches) {
        showMenu.checked = false;
        memberPanel.style.paddingLeft = '25px';
    }
}

function userLogsContainerToggler() {
    dashboardContainer.classList.remove('tab-container-active');
    userLogsContainer.classList.add('tab-container-active');

    dashboardContainerToggle.classList.remove('tab-active');
    userLogsContainerToggle.classList.add('tab-active');

    dashboardContainerToggle.classList.add('tab-inactive');
    userLogsContainerToggle.classList.remove('tab-inactive');

    if (window.matchMedia('screen and (max-width: 750px)').matches) {
        showMenu.checked = false;
        memberPanel.style.paddingLeft = '25px';
    }
}