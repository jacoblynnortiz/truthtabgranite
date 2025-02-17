let settingsBtn = document.getElementById('settingsBtn');
let backupSettingsBtn = document.getElementById('backupSettingsBtn');
let settingsMenu = document.getElementById('settingsMenu');

// toggles settings menu on and off

settingsBtn.addEventListener('click', toggleSettingsMenu);
backupSettingsBtn.addEventListener('click', toggleSettingsMenu);

function toggleSettingsMenu() {
    settingsMenu.classList.toggle('settings-enabled');
}

// load profile/acct information into fields

let settingsUpdateProfilePicture = document.getElementById('settingsUpdateProfilePicture');

let settingsUpdateProfilePic = document.getElementById('settingsUpdateProfilePic');
let settingsUpdateProfilePicPreview = document.getElementById('settingsUpdateProfilePicPreview');

let settingsUpdateName = document.getElementById('settingsUpdateName');
let settingsUpdateUsername = document.getElementById('settingsUpdateUsername');
let settingsUpdateEmail = document.getElementById('settingsUpdateEmail');
let settingsUpdatePassword = document.getElementById('settingsUpdatePassword');

let settingsUpdateNamePreview = document.getElementById('settingsUpdateNamePreview');
let settingsUpdateUsernamePreview = document.getElementById('settingsUpdateUsernamePreview');
let settingsUpdateEmailPreview = document.getElementById('settingsUpdateEmailPreview');
let settingsUpdatePasswordPreview = document.getElementById('settingsUpdatePasswordPreview');

settingsUpdateProfilePicture.src = ls.getItem('truthTabGraniteProfilePicture');

let settingsUpdateProfilePicPreviewInnerText = ls.getItem('truthTabGraniteProfilePicture');

if (ls.getItem('truthTabGraniteProfilePicture').length > 10) {
    settingsUpdateProfilePicPreviewInnerText = settingsUpdateProfilePicPreviewInnerText.substring(0, 15);
    settingsUpdateProfilePicPreviewInnerText = "Profile Picture URL (" + settingsUpdateProfilePicPreviewInnerText + "...)"
}

settingsUpdateProfilePicPreview.innerText = settingsUpdateProfilePicPreviewInnerText;
settingsUpdateNamePreview.innerText = "Full Name (" + ls.getItem('truthTabGraniteName') + ")";
settingsUpdateUsernamePreview.innerText = "Username (" + ls.getItem('truthTabGraniteUsername') + ")";
settingsUpdateEmailPreview.innerText = "Email (" + ls.getItem('truthTabGraniteEmail') + ")";
settingsUpdatePasswordPreview.innerText = "Password (" + ls.getItem('truthTabGranitePassword') + ")";

settingsUpdateProfilePic.value = ls.getItem('truthTabGraniteProfilePicture');
settingsUpdateName.value = ls.getItem('truthTabGraniteName');
settingsUpdateUsername.value = ls.getItem('truthTabGraniteUsername');
settingsUpdateEmail.value = ls.getItem('truthTabGraniteEmail');
settingsUpdatePassword.value = ls.getItem('truthTabGranitePassword');


$.getJSON('https://sheetdb.io/api/v1/la8vm18y8v16z', function (member_details) {
    // looks through news database displaying each one
    for (let i = 0; i < member_details.length; i++) {
        // creates new news post
        if (member_details[i].username == ls.getItem('truthTabGraniteUsername')) {
            let accountUUID = member_details[i].uuid;
            setupAcctInfoChanger(accountUUID);
        } else {
            console.log('there was an issue updating profile information')
        }
    }
});

function setupAcctInfoChanger(accountUUID) {
    let accountUUIDContainer = document.createElement('span');
    accountUUIDContainer.innerText = accountUUID;
    accountUUIDContainer.style.display = 'none';
    accountUUIDContainer.id = 'accountUUIDContainer';
    settingsMenu.appendChild(accountUUIDContainer);
}

function update(event) {
    event.preventDefault();

    let settingsUpdateProfilePic = document.getElementById('settingsUpdateProfilePic');
    let settingsUpdateName = document.getElementById('settingsUpdateName');
    let settingsUpdateUsername = document.getElementById('settingsUpdateUsername');
    let settingsUpdateEmail = document.getElementById('settingsUpdateEmail');
    let settingsUpdatePassword = document.getElementById('settingsUpdatePassword');

    let accountUUID = document.getElementById('accountUUIDContainer').innerText;

    if (accountUUID >= 0) {
        fetch('https://sheetdb.io/api/v1/la8vm18y8v16z/batch_update', {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                data: [
                    {
                        "query": "uuid=" + accountUUID,
                        "name": settingsUpdateName.value,
                        "email": settingsUpdateEmail.value,
                        "username": settingsUpdateUsername.value,
                        "password": settingsUpdatePassword.value,
                        "profilePicture": settingsUpdateProfilePic.value
                    }
                ]
            })
        })
            .then((response) => response.json())
            .then((data) => window.location = document.URL, '_blank');
    } else {
        console.log('there was an issue updating profile information')
    }
}