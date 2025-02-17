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
// let newTabContainer = document.getElementById('newTabContainer');

let doorScheduleContainerToggle = document.getElementById('doorScheduleContainerToggle');
let cleaningScheduleContainerToggle = document.getElementById('cleaningScheduleContainerToggle');
// let newTabContainerToggle = document.getElementById('newTabContainerToggle');

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
if (ls.getItem("truthTabGraniteUsername") == null) {
    window.location = 'login';
} else {
    name.innerText = ls.truthTabGraniteName;
    username.innerText = "." + ls.truthTabGraniteUsername;
    profilePicture.src = ls.truthTabGraniteProfilePicture;

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

// newTabContainerToggle.addEventListener('click', newTabContainerToggler);

function doorScheduleContainerToggler() {
    doorScheduleContainer.classList.add('tab-container-active');
    cleaningScheduleContainer.classList.remove('tab-container-active');

    doorScheduleContainerToggle.classList.add('tab-active');
    cleaningScheduleContainerToggle.classList.remove('tab-active');

    doorScheduleContainerToggle.classList.remove('tab-inactive');
    cleaningScheduleContainerToggle.classList.add('tab-inactive');

    if (window.matchMedia('screen and (max-width: 750px)').matches) {
        showMenu.checked = false;
        memberPanel.style.paddingLeft = '25px';
    }
    doorScheduleFocused = true;
}

function cleaningScheduleContainerToggler() {
    doorScheduleContainer.classList.remove('tab-container-active');
    cleaningScheduleContainer.classList.add('tab-container-active');

    doorScheduleContainerToggle.classList.remove('tab-active');
    cleaningScheduleContainerToggle.classList.add('tab-active');

    doorScheduleContainerToggle.classList.add('tab-inactive');
    cleaningScheduleContainerToggle.classList.remove('tab-inactive');

    if (window.matchMedia('screen and (max-width: 750px)').matches) {
        showMenu.checked = false;
        memberPanel.style.paddingLeft = '25px';
    }
    doorScheduleFocused = false;
}

// function newTabContainerToggler() {
//     doorScheduleContainer.classList.remove('tab-container-active');
//     cleaningScheduleContainer.classList.remove('tab-container-active');
//     newTabContainer.classList.add('tab-container-active');

//     doorScheduleContainerToggle.classList.remove('tab-active');
//     cleaningScheduleContainerToggle.classList.remove('tab-active');
//     newTabContainerToggle.classList.add('tab-active');

//     doorScheduleContainerToggle.classList.add('tab-inactive');
//     cleaningScheduleContainerToggle.classList.add('tab-inactive');
//     newTabContainerToggle.classList.remove('tab-inactive');

//     if (window.matchMedia('screen and (max-width: 750px)').matches) {
//         showMenu.checked = false;
//         memberPanel.style.paddingLeft = '25px';
//     }
//     doorScheduleFocused = false;
// }