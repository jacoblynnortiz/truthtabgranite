let username = document.getElementById('username');
let name = document.getElementById('name');
let profilePicture = document.getElementById('profilePicture');
let adminPanel = document.getElementById('adminPanel');
let welcomeUser = document.getElementById('welcomeUser');
let showMenu = document.getElementById('show-menu');
let menuClosed = false;
let ls = localStorage;

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

showMenu.addEventListener('change', function () {
    slide();
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