let username = document.getElementById('username');
let name = document.getElementById('name');
let profilePicture = document.getElementById('profilePicture');
let adminBadge = document.getElementById('adminBadge');
let memberPanel = document.getElementById('memberPanel');
let showMenu = document.getElementById('show-menu');
let menuClosed = false;
let ls = localStorage;

let doorScheduleContainer = document.getElementById('doorScheduleContainer');
let cleaningScheduleContainer = document.getElementById('cleaningScheduleContainer');

let doorScheduleContainerToggle = document.getElementById('doorScheduleContainerToggle');
let cleaningScheduleContainerToggle = document.getElementById('cleaningScheduleContainerToggle');

let sessionExpired = document.getElementById('sessionExpired');

let usernameSuccess1 = null, passwordSuccess1 = null;

let doorScheduleFocused = true;

let doorTab = document.getElementById('doorTab');
let cleanTab = document.getElementById('cleanTab');
let doorSchedule = document.getElementById('doorSchedule');
let cleaningSchedule = document.getElementById('cleaningSchedule');


// funtion to open and close side menu and move or not move content if screen is a certain size
function slide() {
    if (window.matchMedia('screen and (max-width: 750px)').matches) {
        if (menuClosed == true) {
            menuClosed = false;
        } else {
            menuClosed = true;
        }
    } else {
        if (menuClosed == true) {
            memberPanel.style.paddingLeft = '325px';
            menuClosed = false;
        } else {
            memberPanel.style.paddingLeft = '25px';
            menuClosed = true;
        }
    }
}

// sets screen content to certain position if screen is smaller
if (window.matchMedia('screen and (max-width: 750px)').matches) {
    showMenu.checked = false;
    memberPanel.style.paddingLeft = '25px';
}

// if user is not logged in properly, makes it go back to login page
if (ls.getItem("truthTabMember") == null) {
    window.location = 'login';
} else {
    name.innerText = ls.truthTabMemberName;
    username.innerText = "." + ls.truthTabMemberUsername;
    profilePicture.src = ls.truthTabMemberProfilePicture;

    welcomeUser.innerText = ls.truthTabMemberName + "!";
}

// checks if username and password that they're logged in with still matches account they're logged in with for
// security, if it doesnt match it will say session expired and give one option to go to login page to re login
$.getJSON('https://api.npoint.io/75b2953ec730e3b4fdfb', function (member_details) {
    // looks through accounts database looking for match
    for (let i = 0; i < member_details.length; i++) {
        let locateAccount = member_details[i].username;
        let getAccountPassword = member_details[i].password;
        // checkes if username still matches
        if (ls.getItem("truthTabMemberUsername") == locateAccount) {
            usernameSuccess1 = true;

            let adminStatus = member_details[i].adminStatus;

            if (adminStatus == 0) {
                adminBadge.style.display = 'none';
            } else if (adminStatus == 1) {
                adminBadge.style.display = 'flex';
            }
            // if username matches it will then check if that password also still matches
            if (ls.getItem("truthTabMemberPassword") == getAccountPassword) {
                passwordSuccess1 = true;

                let adminStatus = member_details[i].adminStatus;

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

showMenu.addEventListener('change', slide);

doorScheduleContainerToggler();

doorScheduleContainerToggle.addEventListener('click', doorScheduleContainerToggler);

cleaningScheduleContainerToggle.addEventListener('click', cleaningScheduleContainerToggler);

function doorScheduleContainerToggler() {
    doorScheduleContainer.style.display = 'block';
    cleaningScheduleContainer.style.display = 'none';
    doorScheduleContainerToggle.style.backgroundColor = '#3c7cb960';
    cleaningScheduleContainerToggle.style.backgroundColor = 'transparent';
    if (window.matchMedia('screen and (max-width: 750px)').matches) {
        showMenu.checked = false;
        memberPanel.style.paddingLeft = '25px';
    }
    doorScheduleFocused = true;
}

function cleaningScheduleContainerToggler() {
    cleaningScheduleContainer.style.display = 'block';
    doorScheduleContainer.style.display = 'none';
    cleaningScheduleContainerToggle.style.backgroundColor = '#3c7cb960';
    doorScheduleContainerToggle.style.backgroundColor = 'transparent';
    if (window.matchMedia('screen and (max-width: 750px)').matches) {
        showMenu.checked = false;
        memberPanel.style.paddingLeft = '25px';
    }
    doorScheduleFocused = false;
}