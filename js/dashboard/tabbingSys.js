let sectionTitle = document.getElementById('sectionTitle');

const tabSectionsContainer = document.querySelector('.content');

const tabsContainer = document.querySelector('.tab-links-section');
const tabsList = tabsContainer.querySelector('ul');
const tabButtons = tabsList.querySelectorAll('a');
const tabSections = tabSectionsContainer.querySelectorAll('.tab-section');

sectionTitle.innerText = 'Home';

tabButtons.forEach((tab, index) => {
    if (index === 0) {
        tabSections[index].classList.add('tab-section-active');
        tabSections[index].classList.remove('tab-section-inactive');
    } else {
        tabSections[index].classList.add('tab-section-inactive');
        tabSections[index].classList.remove('tab-section-active');
    }
});

tabsContainer.addEventListener('click', (e) => {
    const clickedTab = e.target.closest("a");

    if (!clickedTab) return;

    e.preventDefault();

    // determins which tab you clicked to reveal said tab and hide the others

    const activeSectionId = clickedTab.getAttribute("href");
    const activeSection = document.getElementById(activeSectionId);
    tabSections.forEach((section) => {
        section.classList.add('tab-section-inactive');
        section.classList.remove('tab-section-active');
    });
    activeSection.classList.remove('tab-section-inactive');
    activeSection.classList.add('tab-section-active');

    // changes the name of the tab to the active tab

    switch (activeSectionId) {
        case "sectionHome":
            sectionTitle.innerText = 'Home';
            break;
        case "sectionDashboard":
            sectionTitle.innerText = 'Dashboard';
            break;
        case "sectionUserLogs":
            sectionTitle.innerText = 'User Logs';
            break;
        case "sectionDoorandUsher":
            sectionTitle.innerText = 'Door & Usher';
            break;
        case "sectionCleaning":
            sectionTitle.innerText = 'Cleaning';
            break;
    }

    // note

    let allTabs = tabsList.querySelectorAll("a");

    for (let tab = 0; tab < allTabs.length; tab++) {
        allTabs[tab].classList.remove('tab-active');;
        allTabs[tab].classList.add('tab-inactive');;
    }

    clickedTab.classList.remove('tab-inactive');
    clickedTab.classList.add('tab-active');
});

tabsContainer.addEventListener('click', (e) => {
    e.preventDefault();
});