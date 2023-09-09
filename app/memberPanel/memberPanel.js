let username = document.getElementById('username');
let name = document.getElementById('name');
let profilePicture = document.getElementById('profilePicture');
let memberPanel = document.getElementById('memberPanel');
let showMenu = document.getElementById('show-menu');
let menuClosed = false;
let ls = localStorage;

let doorScheduleContainer = document.getElementById('doorScheduleContainer');
let cleaningScheduleContainer = document.getElementById('cleaningScheduleContainer');

let doorScheduleContainerToggle = document.getElementById('doorScheduleContainerToggle');
let cleaningScheduleContainerToggle = document.getElementById('cleaningScheduleContainerToggle');

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

if (window.matchMedia('screen and (max-width: 750px)').matches) {
    showMenu.checked = false;
    memberPanel.style.paddingLeft = '25px';
}

if (ls.getItem("truthTabMember") == null) {
        window.location = 'login';
} else {
    name.innerText = ls.truthTabMemberName;
    username.innerText = "." + ls.truthTabMemberUsername;
    profilePicture.src = ls.truthTabMemberProfilePicture;

    welcomeUser.innerText = ls.truthTabMemberName + "!";
}

showMenu.addEventListener('change', function () {
    slide();
});

doorScheduleContainerToggler();

doorScheduleContainerToggle.addEventListener('click', function doorScheduleContainerToggler() {
    doorScheduleContainer.style.display = 'block';
    cleaningScheduleContainer.style.display = 'none';
    doorScheduleContainerToggle.style.backgroundColor = '#3c7cb960';
    cleaningScheduleContainerToggle.style.backgroundColor = 'transparent';
    if (window.matchMedia('screen and (max-width: 750px)').matches) {
        showMenu.checked = false;
        memberPanel.style.paddingLeft = '25px';
    }
});

cleaningScheduleContainerToggle.addEventListener('click', function cleaningScheduleContainerToggler() {
    cleaningScheduleContainer.style.display = 'block';
    doorScheduleContainer.style.display = 'none';
    cleaningScheduleContainerToggle.style.backgroundColor = '#3c7cb960';
    doorScheduleContainerToggle.style.backgroundColor = 'transparent';
    if (window.matchMedia('screen and (max-width: 750px)').matches) {
        showMenu.checked = false;
        memberPanel.style.paddingLeft = '25px';
    }
});

function doorScheduleContainerToggler() {
    doorScheduleContainer.style.display = 'block';
    cleaningScheduleContainer.style.display = 'none';
    doorScheduleContainerToggle.style.backgroundColor = '#3c7cb960';
    cleaningScheduleContainerToggle.style.backgroundColor = 'transparent';
    if (window.matchMedia('screen and (max-width: 750px)').matches) {
        showMenu.checked = false;
        memberPanel.style.paddingLeft = '25px';
    }
}