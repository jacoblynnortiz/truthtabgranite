let sideCourseOverview = document.getElementById('sideCourseOverview');
let sideCourseOverviewBtn = document.getElementById('sideCourseOverviewBtn');

let bibleSeriesContainer = document.getElementById('bibleSeriesContainer');

let sideCourseOverviewOpen = true;

if (window.matchMedia('screen and (max-width: 1200px)').matches) {
    if (sideCourseOverviewOpen == true) {
        sideCourseOverview.style.right = '-100%';
        sideCourseOverviewBtn.style.right = '0px';
        sideCourseOverviewOpen = false;
    } else {
        sideCourseOverview.style.right = '0px';
        sideCourseOverviewBtn.style.right = '450px';
        sideCourseOverviewOpen = true;
    }
} else {
    let sideCourseOverviewOpen = false;
    if (sideCourseOverviewOpen == true) {
        sideCourseOverview.style.right = '-100%';
        sideCourseOverviewBtn.style.right = '0px';
        sideCourseOverviewOpen = false;
        bibleSeriesContainer.style.paddingRight = '0px';
    } else {
        sideCourseOverview.style.right = '0px';
        sideCourseOverviewBtn.style.right = '450px';
        sideCourseOverviewOpen = true;
        bibleSeriesContainer.style.paddingRight = '465px';
    }
}  

function sideCourseOverviewToggle() {
    if (window.matchMedia('screen and (max-width: 1200px)').matches) {
        if (sideCourseOverviewOpen == true) {
            sideCourseOverview.style.right = '-100%';
            sideCourseOverviewBtn.style.right = '0px';
            sideCourseOverviewOpen = false;
        } else {
            sideCourseOverview.style.right = '0px';
            sideCourseOverviewBtn.style.right = '450px';
            sideCourseOverviewOpen = true;
        }
    } else {
        if (sideCourseOverviewOpen == true) {
            sideCourseOverview.style.right = '-100%';
            sideCourseOverviewBtn.style.right = '0px';
            sideCourseOverviewOpen = false;
            bibleSeriesContainer.style.paddingRight = '0px';
        } else {
            sideCourseOverview.style.right = '0px';
            sideCourseOverviewBtn.style.right = '450px';
            sideCourseOverviewOpen = true;
            bibleSeriesContainer.style.paddingRight = '465px';
        }
    }    
}