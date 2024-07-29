let sideCourseOverview = document.getElementById('sideCourseOverview');
let sideCourseOverviewBtn = document.getElementById('sideCourseOverviewBtn');

let bibleSeriesContainer = document.getElementById('bibleSeriesContainer');

let sideCourseOverviewOpen = true;

if (window.matchMedia('screen and (max-width: 1200px)').matches) {
    if (sideCourseOverviewOpen == true) {
        let i = sideCourseOverview.clientWidth;
        let j = '-' + i + 'px';
        sideCourseOverview.style.right = j;
        sideCourseOverviewBtn.style.rotate = '0deg';
        sideCourseOverviewBtn.style.transform = 'translateX(0px)';
        if (window.matchMedia('screen and (max-width: 435px)').matches) {
            sideCourseOverviewBtn.style.transform = 'translateX(0px)';
            sideCourseOverviewOpen = false;
        }
        sideCourseOverviewOpen = false;
    } else {
        sideCourseOverview.style.right = '0px';
        sideCourseOverviewBtn.style.rotate = '180deg';
        if (window.matchMedia('screen and (max-width: 435px)').matches) {
            sideCourseOverviewBtn.style.transform = 'translateX(-35px)';
            sideCourseOverviewOpen = true;
        }
        sideCourseOverviewOpen = true;
    }
} else {
    sideCourseOverviewOpen = false;
    if (sideCourseOverviewOpen == true) {
        let i = sideCourseOverview.clientWidth;
        let j = '-' + i + 'px';
        sideCourseOverview.style.right = j;
        sideCourseOverviewBtn.style.rotate = '0deg';
        sideCourseOverviewOpen = false;
        bibleSeriesContainer.style.paddingRight = '0px';
    } else {
        sideCourseOverview.style.right = '0px';
        sideCourseOverviewBtn.style.rotate = '180deg';
        sideCourseOverviewOpen = true;
        bibleSeriesContainer.style.paddingRight = '425px';
    }
}

function sideCourseOverviewToggle() {
    if (window.matchMedia('screen and (max-width: 1200px)').matches) {
        if (sideCourseOverviewOpen == true) {
            let i = sideCourseOverview.clientWidth;
            let j = '-' + i + 'px';
            sideCourseOverview.style.right = j;
            sideCourseOverviewBtn.style.rotate = '0deg';
            if (window.matchMedia('screen and (max-width: 435px)').matches) {
                sideCourseOverviewBtn.style.transform = 'translateX(0px)';
                sideCourseOverviewOpen = false;
            }
            sideCourseOverviewOpen = false;
        } else {
            sideCourseOverview.style.right = '0px';
            sideCourseOverviewBtn.style.rotate = '180deg';
            if (window.matchMedia('screen and (max-width: 435px)').matches) {
                sideCourseOverviewBtn.style.transform = 'translateX(-35px)';
                sideCourseOverviewOpen = true;
            }
            sideCourseOverviewOpen = true;
        }
    } else {
        if (sideCourseOverviewOpen == true) {
            let i = sideCourseOverview.clientWidth;
            let j = '-' + i + 'px';
            sideCourseOverview.style.right = j;
            sideCourseOverviewBtn.style.rotate = '0deg';
            sideCourseOverviewOpen = false;
            bibleSeriesContainer.style.paddingRight = '0px';
        } else {
            sideCourseOverview.style.right = '0px';
            sideCourseOverviewBtn.style.rotate = '180deg';
            sideCourseOverviewOpen = true;
            bibleSeriesContainer.style.paddingRight = '425px';
        }
    }    
}