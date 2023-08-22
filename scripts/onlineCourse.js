let ls = localStorage;

let seriesBtn0 = document.getElementById('seriesBtn0');
let seriesBtn1 = document.getElementById('seriesBtn1');
let seriesBtn2 = document.getElementById('seriesBtn2');

let featuredSeriesBtn0 = document.getElementById('featuredSeriesBtn0');
let featuredSeriesBtn1 = document.getElementById('featuredSeriesBtn1');
let featuredSeriesBtn2 = document.getElementById('featuredSeriesBtn2');

let continueContainer = document.getElementById('continueContainer');
let continueContainerHeader = document.getElementById('continueContainerHeader');

let continuedetector1 = false;
let continuedetector2 = false;
let continuedetector3 = false;

let progress1 = document.getElementById('progress1');
let progress2 = document.getElementById('progress2');
let progress3 = document.getElementById('progress3');

let auth = document.getElementById('auth');
let authCodeBox = document.getElementById('authCodeBox');

let errorAuth = document.getElementById('errorAuth');

let percentLabel1 = document.getElementById('percentLabel1');
let percentLabel2 = document.getElementById('percentLabel2');
let percentLabel3 = document.getElementById('percentLabel3');

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

if (ls.getItem('series_revelation') != null) {
    console.log('this exists')
    progress2.style.width = ls.getItem('series_revelation_progess');
    percentLabel2.innerText = ls.getItem('series_revelation_progess');
} else {
    ls.setItem('series_revelation', 0)
    ls.setItem('series_revelation_progess', '0%')
    percentLabel2.innerText = ls.getItem('series_revelation_progess');
}

if (ls.getItem('series_stones_fit_the_frame_together') != null) {
    console.log('this exists')
    progress1.style.width = ls.getItem('series_stones_fit_the_frame_together_progess');
    percentLabel1.innerText = ls.getItem('series_stones_fit_the_frame_together_progess');
} else {
    ls.setItem('series_stones_fit_the_frame_together', 0)
    ls.setItem('series_stones_fit_the_frame_together_progess', '0%')
    percentLabel1.innerText = ls.getItem('series_stones_fit_the_frame_together_progess');
}

if (ls.getItem('series_biblical_and_spiritual_leadership_formation') != null) {
    console.log('this exists')
    progress3.style.width = ls.getItem('series_biblical_and_spiritual_leadership_formation_progess');
    percentLabel3.innerText = ls.getItem('series_biblical_and_spiritual_leadership_formation_progess');
} else {
    ls.setItem('series_biblical_and_spiritual_leadership_formation', 0)
    ls.setItem('series_biblical_and_spiritual_leadership_formation_progess', '0%')
    percentLabel3.innerText = ls.getItem('series_biblical_and_spiritual_leadership_formation_progess');
}

// make continue section series section know if to make visible or leave hidden based on if you are already enrolled or not.

if (ls.getItem('series_revelation') == 0) {
    seriesBtn0.href = "bible_series_pages/bible_series_revelation_preview.html";
    seriesBtn0.style.display = 'none';
    continuedetector1 = false;
} else if (ls.getItem('series_revelation') == 1) {
    seriesBtn0.href = "bible_series_pages/bible_series_revelation.html";
    seriesBtn0.style.display = 'flex';
    continuedetector1 = true;
}

if (ls.getItem('series_stones_fit_the_frame_together') == 0) {
    seriesBtn1.href = "bible_series_pages/bible_series_stones_fit_the_frame_together_preview.html";
    seriesBtn1.style.display = 'none';
    continuedetector2 = false;
} else if (ls.getItem('series_stones_fit_the_frame_together') == 1) {
    seriesBtn1.href = "bible_series_pages/bible_series_stones_fit_the_frame_together.html";
    seriesBtn1.style.display = 'flex';
    continuedetector2 = true;
}

if (ls.getItem('series_biblical_and_spiritual_leadership_formation') == 0) {
    seriesBtn2.href = "bible_series_pages/restricted/bible_series_biblical_and_spiritual_leadership_formation_preview.html";
    seriesBtn2.style.display = 'none';
    continuedetector3 = false;
} else if (ls.getItem('series_biblical_and_spiritual_leadership_formation') == 1) {
    seriesBtn2.href = "bible_series_pages/restricted/bible_series_biblical_and_spiritual_leadership_formation.html";
    seriesBtn2.style.display = 'flex';
    continuedetector3 = true;
}

// determins if to make "continue where you left off section" visible

if (continuedetector1 || continuedetector2 || continuedetector3 == true) {
    continueContainer.style.display = 'flex';
    continueContainerHeader.style.display = 'flex';
    console.log('continue area enabled')
} else {
    console.log('continue area disabled')
}

// make featured series section know if to make link go to preview page or lessons page for said course

if (ls.getItem('series_stones_fit_the_frame_together') == 0) {
    featuredSeriesBtn0.href = "bible_series_pages/bible_series_stones_fit_the_frame_together_preview.html";
} else if (ls.getItem('series_stones_fit_the_frame_together') == 1) {
    featuredSeriesBtn0.href = "bible_series_pages/bible_series_stones_fit_the_frame_together.html";
}

if (ls.getItem('series_revelation') == 0) {
    featuredSeriesBtn1.href = "bible_series_pages/bible_series_revelation_preview.html";
} else if (ls.getItem('series_biblical_and_spiritual_leadership_formation') == 1) {
    featuredSeriesBtn1.href = "bible_series_pages/bible_series_revelation.html";
}

if (ls.getItem('series_biblical_and_spiritual_leadership_formation') == 0) {
    featuredSeriesBtn2.href = "javascript:void(0)";
} else if (ls.getItem('series_biblical_and_spiritual_leadership_formation') == 1) {
    featuredSeriesBtn2.onclick = '';
    featuredSeriesBtn2.href = "bible_series_pages/restricted/bible_series_biblical_and_spiritual_leadership_formation.html";
}