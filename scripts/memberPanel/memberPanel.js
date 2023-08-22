let username = document.getElementById('username');
let name = document.getElementById('name');
let profilePicture = document.getElementById('profilePicture');
let memberPanel = document.getElementById('memberPanel');
let showMenu = document.getElementById('show-menu');
let menuClosed = false;
let ls = localStorage;

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
    while (true) {
        alert('You are not permitted to be on this page!');
        window.location = 'member_login.html';
    }
} else {
    name.innerText = ls.truthTabMemberName;
    username.innerText = "." + ls.truthTabMemberUsername;
    profilePicture.src = ls.truthTabMemberProfilePicture;

    welcomeUser.innerText = ls.truthTabMemberName + "!";
}

showMenu.addEventListener('change', function () {
    slide();
});