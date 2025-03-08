let createAcctProfile = document.getElementById('createAcctProfile');
let createAcctProfileInput = document.getElementById('createAcctProfileInput');

setInterval(function () {
    createAcctProfile.onerror = function () {
        this.src = 'https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg'; // place your error.png image instead
    };

    createAcctProfile.src = createAcctProfileInput.value;
}, 1000);