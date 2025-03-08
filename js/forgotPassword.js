let forgotPasswordBtn = document.getElementById('forgotPasswordBtn');

let forgotPasswordContainer1 = document.getElementById('forgotPasswordContainer1');

forgotPasswordBtn.addEventListener('click', forgotPassword);

function forgotPassword() {
    forgotPasswordContainer1.classList.toggle('enabled');
    memberLoginFocused = false;
    resetPasswordFocused1 = true;
    resetPasswordFocused2 = false;
}

function lookUpEmail(event) {
    event.preventDefault();
    let acctEmail = document.getElementById('acctEmail').value;

    let errorResetPassword1 = document.getElementById('errorResetPassword1');

    $.getJSON('https://sheetdb.io/api/v1/la8vm18y8v16z', function (member_details) {
        // looks through news database displaying each one
        for (let i = 0; i < member_details.length; i++) {
            // creates new news post
            if (member_details[i].email == acctEmail) {
                let accountUUID = member_details[i].uuid;
                setupPasswordChange(accountUUID);
            } else {
                errorResetPassword1.innerText = "The entered email isn't registered, please try entering another email.";
                errorResetPassword1.style.padding = '15px';
            }
        }
    });
}

function setupPasswordChange(accountUUID) {
    let resetPasswordContainer = document.getElementById('resetPasswordContainer');

    resetPasswordContainer1.style.display = 'none';
    resetPasswordContainer2.style.display = 'flex';

    let accountUUIDContainer = document.createElement('span');
    accountUUIDContainer.innerText = accountUUID;
    accountUUIDContainer.style.display = 'none';
    accountUUIDContainer.id = 'accountUUIDContainer';
    resetPasswordContainer2.appendChild(accountUUIDContainer);

    memberLoginFocused = false;
    resetPasswordFocused1 = false;
    resetPasswordFocused2 = true;
}

function update(event) {
    event.preventDefault();
    let newPassword = document.getElementById('newPassword').value;
    let confirmNewPassword = document.getElementById('confirmNewPassword').value;

    let errorResetPassword2 = document.getElementById('errorResetPassword2');

    let accountUUID = document.getElementById('accountUUIDContainer').innerText;

    if (newPassword == confirmNewPassword) {
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
                        "password": newPassword
                    }
                ]
            })
        })
            .then((response) => response.json())
            .then((data) => window.location = 'login', '_blank');
    } else {
        errorResetPassword2.innerText = "The entered password does not match, please try matching them correctly.";
        errorResetPassword2.style.padding = '15px';
    }
}