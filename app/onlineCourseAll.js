// generate auth screen

function generateAuthScreen(authScrenActivated) {
    authScreenActivated = true;
    authContainer.style.display = 'flex';
}
window.addEventListener('keypress', function (e) {
    if (authScreenActivated == true && e.key === 'Enter') {
        authenticate(authCodes);
    } else {
        console.log('hi')
    }
});

auth.addEventListener('click', function() {
    authenticate(authCodes)
});

function authenticate(authCodes) {
    if (authCodeBox.value == authCodes[0]) {
        window.location = courseBiblicalSpiritualLeadershipPreview;
    } else if (authCodeBox.value == authCodes[1]) {
        console.log('1')
    } else {
        authCodeBox.value = ''
        errorAuth.innerText = authErrorMessageText;
        errorAuth.style.padding = '15px';
    }
}

// checks if already has memory or not of the courses

if (ls.getItem('series_revelation') != null) {
    console.log('this exists')
} else {
    ls.setItem('series_revelation', 0)
}

if (ls.getItem('series_stones_fit_the_frame_together') != null) {
    console.log('this exists')
} else {
    ls.setItem('series_stones_fit_the_frame_together', 0)
}

if (ls.getItem('series_biblical_and_spiritual_leadership_formation') != null) {
    console.log('this exists')
} else {
    ls.setItem('series_biblical_and_spiritual_leadership_formation', 0)
}

// checks if it should go to a preview or lesson

if (ls.getItem('series_revelation') == 0) {
    seriesBtn0.href = courseRevelationPreview;
} else if (ls.getItem('series_revelation') == 1) {
    seriesBtn0.href = courseRevelation;
}

if (ls.getItem('series_stones_fit_the_frame_together') == 0) {
    seriesBtn1.href = courseStonesFitlyFramedTogetherPreview;
} else if (ls.getItem('series_stones_fit_the_frame_together') == 1) {
    seriesBtn1.href = courseStonesFitlyFramedTogether;
}

if (ls.getItem('series_biblical_and_spiritual_leadership_formation') == 0) {
    seriesBtn2.href = "javascript:void(0)";
} else if (ls.getItem('series_biblical_and_spiritual_leadership_formation') == 1) {
    seriesBtn2.onclick = '';
    seriesBtn2.href = courseBiblicalSpiritualLeadership;
}