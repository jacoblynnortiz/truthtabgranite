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

let percentLabel1 = document.getElementById('percentLabel1');
let percentLabel2 = document.getElementById('percentLabel2');
let percentLabel3 = document.getElementById('percentLabel3');

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
    if(authCodeBox.value == authCodes[0]) {
        window.location = courseBiblicalSpiritualLeadershipPreview;
    } else if(authCodeBox.value == authCodes[1]) {
        console.log('1')
    } else {
        authCodeBox.value = '';
        errorAuth.innerText = authErrorMessageText;
        errorAuth.style.padding = '15px';
    }
}

// checks if already has memory or not of the courses

if (ls.getItem('series_revelation') != null) {
    console.log('this exists')
    progress2.style.width = courseRevelationProgress;
    percentLabel2.innerText = courseRevelationProgress;
} else {
    ls.setItem('series_revelation', 0)
    ls.setItem(courseRevelationProgress, '0%')
    percentLabel2.innerText = courseRevelationProgress;
}

if (ls.getItem('series_stones_fit_the_frame_together') != null) {
    console.log('this exists')
    progress1.style.width = courseStonesFitlyFramedTogetherProgress;
    percentLabel1.innerText = courseStonesFitlyFramedTogetherProgress;
} else {
    ls.setItem('series_stones_fit_the_frame_together', 0)
    ls.setItem(courseStonesFitlyFramedTogetherProgress, '0%')
    percentLabel1.innerText = courseStonesFitlyFramedTogetherProgress;
}

if (ls.getItem('series_biblical_and_spiritual_leadership_formation') != null) {
    console.log('this exists')
    progress3.style.width = courseBiblicalSpiritualLeadershipProgress;
    percentLabel3.innerText = courseBiblicalSpiritualLeadershipProgress;
} else {
    ls.setItem('series_biblical_and_spiritual_leadership_formation', 0)
    ls.setItem(courseBiblicalSpiritualLeadershipProgress, '0%')
    percentLabel3.innerText = courseBiblicalSpiritualLeadershipProgress;
}

// make continue section series section know if to make visible or
// leave hidden based on if you are already enrolled or not.

if (ls.getItem('series_revelation') == 0) {
    seriesBtn0.href = courseRevelationPreview;
    seriesBtn0.style.display = 'none';
    continuedetector1 = false;
} else if (ls.getItem('series_revelation') == 1) {
    seriesBtn0.href = courseRevelation;
    seriesBtn0.style.display = 'flex';
    continuedetector1 = true;
}

if (ls.getItem('series_stones_fit_the_frame_together') == 0) {
    seriesBtn1.href = courseStonesFitlyFramedTogetherPreview;
    seriesBtn1.style.display = 'none';
    continuedetector2 = false;
} else if (ls.getItem('series_stones_fit_the_frame_together') == 1) {
    seriesBtn1.href = courseStonesFitlyFramedTogether;
    seriesBtn1.style.display = 'flex';
    continuedetector2 = true;
}

if (ls.getItem('series_biblical_and_spiritual_leadership_formation') == 0) {
    seriesBtn2.href = courseBiblicalSpiritualLeadershipPreview;
    seriesBtn2.style.display = 'none';
    continuedetector3 = false;
} else if (ls.getItem('series_biblical_and_spiritual_leadership_formation') == 1) {
    seriesBtn2.href = courseBiblicalSpiritualLeadership;
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

// make featured series section know if to make link go to
// preview page or lessons page for said course

if (ls.getItem('series_stones_fit_the_frame_together') == 0) {
    featuredSeriesBtn0.href = courseStonesFitlyFramedTogetherPreview;
} else if (ls.getItem('series_stones_fit_the_frame_together') == 1) {
    featuredSeriesBtn0.href = courseStonesFitlyFramedTogether;
}

if (ls.getItem('series_revelation') == 0) {
    featuredSeriesBtn1.href = courseRevelationPreview;
} else if (ls.getItem('series_revelation') == 1) {
    featuredSeriesBtn1.href = courseRevelation;
}

if (ls.getItem('series_biblical_and_spiritual_leadership_formation') == 0) {
    featuredSeriesBtn2.href = "javascript:void(0)";
} else if (ls.getItem('series_biblical_and_spiritual_leadership_formation') == 1) {
    featuredSeriesBtn2.onclick = '';
    featuredSeriesBtn2.href = courseBiblicalSpiritualLeadership;
}