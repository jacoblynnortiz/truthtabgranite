let ls = localStorage;

let seriesBtn0 = document.getElementById('seriesBtn0');
let seriesBtn1 = document.getElementById('seriesBtn1');
let seriesBtn2 = document.getElementById('seriesBtn2');

let auth = document.getElementById('auth');
let authCodeBox = document.getElementById('authCodeBox');

let errorAuth = document.getElementById('errorAuth');

// generate auth screen

let authCodes = [1234, 4444, 232323];
let authContainer = document.getElementById('authContainer');
let authScreenActivated = false;

function generateAuthScreen(authScrenActivated) {
    authScreenActivated = true;
    authContainer.style.display = 'flex';
}
window.addEventListener('keypress', function (e) {
    if (authScreenActivated == true) {
        if (e.key === 'Enter') {
            authenticate(authCodes);
        }
    } else {
        console.log('hi')
    }
});

auth.addEventListener('click', function () {
    authenticate(authCodes);
});

function authenticate(authCodes) {
    if(authCodeBox.value == authCodes[0]) {
        window.location = 'bible_series_pages/restricted/bible_series_biblical_and_spiritual_leadership_formation_preview.html'
    } else if(authCodeBox.value == authCodes[1]) {
        console.log('1')
    } else {
        authCodeBox.value = ''
        errorAuth.innerText = "The authentication code you entered is invalid, if you want to access this restricted course please try again or request the auth code for this course from Brother Wilson below.";
        errorAuth.style.padding = '15px';
    }
}

// checks if already has memory or not of the courses

if(ls.getItem('series_revelation') != null) {
    console.log('this exists')
} else {
    ls.setItem('series_revelation', 0)
}

if(ls.getItem('series_stones_fit_the_frame_together') != null) {
    console.log('this exists')
} else {
    ls.setItem('series_stones_fit_the_frame_together', 0)
}

if(ls.getItem('series_biblical_and_spiritual_leadership_formation') != null) {
    console.log('this exists')
} else {
    ls.setItem('series_biblical_and_spiritual_leadership_formation', 0)
}

// checks if it should go to a preview or lesson

if(ls.getItem('series_revelation') == 0) {
    seriesBtn0.href = "bible_series_pages/bible_series_revelation_preview.html";
} else if(ls.getItem('series_revelation') == 1) {
    seriesBtn0.href = "bible_series_pages/bible_series_revelation.html";
}

if(ls.getItem('series_stones_fit_the_frame_together') == 0) {
    seriesBtn1.href = "bible_series_pages/bible_series_stones_fit_the_frame_together_preview.html";
} else if(ls.getItem('series_stones_fit_the_frame_together') == 1) {
    seriesBtn1.href = "bible_series_pages/bible_series_stones_fit_the_frame_together.html";
}

if(ls.getItem('series_biblical_and_spiritual_leadership_formation') == 0) {
    seriesBtn2.href = "javascript:void(0)";
} else if(ls.getItem('series_biblical_and_spiritual_leadership_formation') == 1) {
    seriesBtn2.onclick = '';
    seriesBtn2.href = "bible_series_pages/restricted/bible_series_biblical_and_spiritual_leadership_formation.html";
}