let ls = localStorage;

// all course tiles
let seriesBtn0 = document.getElementById('seriesBtn0');
let seriesBtn1 = document.getElementById('seriesBtn1');
let seriesBtn2 = document.getElementById('seriesBtn2');

// all course preview pages
let courseStonesFitlyFramedTogetherPreview = 'bible_series_pages/bible_series_stones_fit_the_frame_together_preview.html';
let courseRevelationPreview = 'bible_series_pages/bible_series_revelation_preview.html';
let courseBiblicalSpiritualLeadershipPreview = 'bible_series_pages/restricted/bible_series_biblical_and_spiritual_leadership_formation_preview.html';

// all course pages variables
let courseStonesFitlyFramedTogether = 'bible_series_pages/bible_series_stones_fit_the_frame_together.html';
let courseRevelation = 'bible_series_pages/bible_series_revelation.html';
let courseBiblicalSpiritualLeadership = 'bible_series_pages/restricted/bible_series_biblical_and_spiritual_leadership_formation.html';

// course progress variables
let courseRevelationProgress = ls.getItem('series_revelation_progess');
let courseStonesFitlyFramedTogetherProgress = ls.getItem('series_stones_fit_the_frame_together_progess');
let courseBiblicalSpiritualLeadershipProgress = ls.getItem('series_biblical_and_spiritual_leadership_formation_progess');

// auth related variables
let auth = document.getElementById('auth');
let authCodeBox = document.getElementById('authCodeBox');
let errorAuth = document.getElementById('errorAuth');
let authErrorMessageText = 'The authentication code you entered is invalid, if you want to access this restricted course please try again or request the auth code for this course from Brother Wilson below.';
let authCodes = [1234, 4444, 232323];
let authContainer = document.getElementById('authContainer');
let authScreenActivated = false;