let sideCourseOverview = document.getElementById('sideCourseOverview');
let bibleSeriesContainer = document.getElementById('bibleSeriesContainer');

let sideCourseOverviewOpen = true;

if (window.matchMedia('screen and (max-width: 1200px)').matches) {
    if (sideCourseOverviewOpen == true) {
        let i = sideCourseOverview.clientWidth;
        let j = '-' + i + 'px';
        sideCourseOverview.style.right = j;
        sideCourseOverviewOpen = false;
    } else {
        sideCourseOverview.style.right = '0px';
        sideCourseOverviewOpen = true;
    }
} else {
    sideCourseOverviewOpen = false;
    if (sideCourseOverviewOpen == true) {
        let i = sideCourseOverview.clientWidth;
        let j = '-' + i + 'px';
        sideCourseOverview.style.right = j;
        sideCourseOverviewOpen = false;
        bibleSeriesContainer.style.paddingRight = '0px';
    } else {
        sideCourseOverview.style.right = '0px';
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
            sideCourseOverviewOpen = false;
        } else {
            sideCourseOverview.style.right = '0px';
            sideCourseOverviewOpen = true;
        }
    } else {
        if (sideCourseOverviewOpen == true) {
            let i = sideCourseOverview.clientWidth;
            let j = '-' + i + 'px';
            sideCourseOverview.style.right = j;
            sideCourseOverviewOpen = false;
            bibleSeriesContainer.style.paddingRight = '0px';
        } else {
            sideCourseOverview.style.right = '0px';
            sideCourseOverviewOpen = true;
            bibleSeriesContainer.style.paddingRight = '425px';
        }
    }    
}
