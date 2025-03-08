let sectionTitle = document.getElementById('sectionTitle');

let tabHome = document.getElementById('tabHome');

// let tabDashboard = document.getElementById('tabDashboard');
// let tabUserLogs = document.getElementById('tabUserLogs');

let tabDoorandUsher = document.getElementById('tabDoorandUsher');
let tabCleaning = document.getElementById('tabCleaning');

let sectionHome = document.getElementById('sectionHome');

let sectionDashboard = document.getElementById('sectionDashboard');
let sectionUserLogs = document.getElementById('sectionUserLogs');

let sectionDoorandUser = document.getElementById('sectionDoorandUsher');
let sectionCleaning = document.getElementById('sectionCleaning');

tabHome.addEventListener('click', activeTabHome);

tabDashboard.addEventListener('click', activeTabDashboard);
tabUserLogs.addEventListener('click', activeTabUserLogs);

tabDoorandUsher.addEventListener('click', activeTabDoorandUsher);
tabCleaning.addEventListener('click', activeTabCleaning);

activeTabHome();

function activeTabHome() {
    sectionTitle.innerText = 'Home';

    tabHome.classList.remove('tab-inactive');
    tabHome.classList.add('tab-active');
    tabDashboard.classList.remove('tab-active');
    tabDashboard.classList.add('tab-inactive');
    tabUserLogs.classList.remove('tab-active');
    tabUserLogs.classList.add('tab-inactive');
    tabDoorandUsher.classList.remove('tab-active');
    tabDoorandUsher.classList.add('tab-inactive');
    tabCleaning.classList.remove('tab-active');
    tabCleaning.classList.add('tab-inactive');
    
    sectionHome.classList.remove('tab-section-inactive');
    sectionHome.classList.add('tab-section-active');
    sectionDashboard.classList.add('tab-section-inactive');
    sectionDashboard.classList.remove('tab-section-active');
    sectionUserLogs.classList.remove('tab-section-active');
    sectionUserLogs.classList.add('tab-section-inactive');
    sectionDoorandUser.classList.add('tab-section-inactive');
    sectionDoorandUser.classList.remove('tab-section-active');
    sectionCleaning.classList.remove('tab-section-active');
    sectionCleaning.classList.add('tab-section-inactive');
}

function activeTabDashboard() {
    sectionTitle.innerText = 'Dashboard';

    tabHome.classList.remove('tab-active');
    tabHome.classList.add('tab-inactive');
    tabDashboard.classList.remove('tab-inactive');
    tabDashboard.classList.add('tab-active');
    tabUserLogs.classList.remove('tab-active');
    tabUserLogs.classList.add('tab-inactive');
    tabDoorandUsher.classList.remove('tab-active');
    tabDoorandUsher.classList.add('tab-inactive');
    tabCleaning.classList.remove('tab-active');
    tabCleaning.classList.add('tab-inactive');
    
    sectionHome.classList.remove('tab-section-active');
    sectionHome.classList.add('tab-section-inactive');
    sectionDashboard.classList.add('tab-section-active');
    sectionDashboard.classList.remove('tab-section-inactive');
    sectionUserLogs.classList.remove('tab-section-active');
    sectionUserLogs.classList.add('tab-section-inactive');
    sectionDoorandUser.classList.add('tab-section-inactive');
    sectionDoorandUser.classList.remove('tab-section-active');
    sectionCleaning.classList.remove('tab-section-active');
    sectionCleaning.classList.add('tab-section-inactive');
}

function activeTabUserLogs() {
    sectionTitle.innerText = 'User Logs';

    tabHome.classList.remove('tab-active');
    tabHome.classList.add('tab-inactive');
    tabDashboard.classList.remove('tab-active');
    tabDashboard.classList.add('tab-inactive');
    tabUserLogs.classList.remove('tab-inactive');
    tabUserLogs.classList.add('tab-active');
    tabDoorandUsher.classList.remove('tab-active');
    tabDoorandUsher.classList.add('tab-inactive');
    tabCleaning.classList.remove('tab-active');
    tabCleaning.classList.add('tab-inactive');
    
    sectionHome.classList.remove('tab-section-active');
    sectionHome.classList.add('tab-section-inactive');
    sectionDashboard.classList.add('tab-section-inactive');
    sectionDashboard.classList.remove('tab-section-active');
    sectionUserLogs.classList.remove('tab-section-inactive');
    sectionUserLogs.classList.add('tab-section-active');
    sectionDoorandUser.classList.add('tab-section-inactive');
    sectionDoorandUser.classList.remove('tab-section-active');
    sectionCleaning.classList.remove('tab-section-active');
    sectionCleaning.classList.add('tab-section-inactive');
}

function activeTabDoorandUsher() {
    sectionTitle.innerText = 'Door & Usher';

    tabHome.classList.remove('tab-active');
    tabHome.classList.add('tab-inactive');
    tabDashboard.classList.remove('tab-active');
    tabDashboard.classList.add('tab-inactive');
    tabUserLogs.classList.remove('tab-active');
    tabUserLogs.classList.add('tab-inactive');
    tabDoorandUsher.classList.remove('tab-inactive');
    tabDoorandUsher.classList.add('tab-active');
    tabCleaning.classList.remove('tab-active');
    tabCleaning.classList.add('tab-inactive');
    
    sectionHome.classList.remove('tab-section-active');
    sectionHome.classList.add('tab-section-inactive');
    sectionDashboard.classList.add('tab-section-inactive');
    sectionDashboard.classList.remove('tab-section-active');
    sectionUserLogs.classList.remove('tab-section-active');
    sectionUserLogs.classList.add('tab-section-inactive');
    sectionDoorandUser.classList.add('tab-section-active');
    sectionDoorandUser.classList.remove('tab-section-inactive');
    sectionCleaning.classList.remove('tab-section-active');
    sectionCleaning.classList.add('tab-section-inactive');
}

function activeTabCleaning() {
    sectionTitle.innerText = 'Cleaning';

    tabHome.classList.remove('tab-active');
    tabHome.classList.add('tab-inactive');
    tabDashboard.classList.remove('tab-active');
    tabDashboard.classList.add('tab-inactive');
    tabUserLogs.classList.remove('tab-active');
    tabUserLogs.classList.add('tab-inactive');
    tabDoorandUsher.classList.remove('tab-active');
    tabDoorandUsher.classList.add('tab-inactive');
    tabCleaning.classList.remove('tab-inactive');
    tabCleaning.classList.add('tab-active');
    
    sectionHome.classList.remove('tab-section-active');
    sectionHome.classList.add('tab-section-inactive');
    sectionDashboard.classList.add('tab-section-inactive');
    sectionDashboard.classList.remove('tab-section-active');
    sectionUserLogs.classList.remove('tab-section-active');
    sectionUserLogs.classList.add('tab-section-inactive');
    sectionDoorandUser.classList.add('tab-section-inactive');
    sectionDoorandUser.classList.remove('tab-section-active');
    sectionCleaning.classList.remove('tab-section-inactive');
    sectionCleaning.classList.add('tab-section-active');
}