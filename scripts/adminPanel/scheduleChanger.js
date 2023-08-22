let doorScheduleFocused = true;
let cleaningScheduleFocused = false;

let doorTab = document.getElementById('doorTab');
let cleanTab = document.getElementById('cleanTab');
let doorSchedule = document.getElementById('doorSchedule');
let cleaningSchedule = document.getElementById('cleaningSchedule');

doorScheduleForm();

doorTab.addEventListener('click', function doorScheduleForm() {
    doorSchedule.style.display = 'flex';
    cleaningSchedule.style.display = 'none';
    doorTab.style.backgroundColor = 'transparent';
    cleanTab.style.backgroundColor = '#ddd';
    doorTab.style.color = '#000';
    cleanTab.style.color = 'grey';
    doorScheduleFocused = true;
    cleaningScheduleFocused = false;
});

cleanTab.addEventListener('click', function cleaningScheduleForm() {
    doorSchedule.style.display = 'none';
    cleaningSchedule.style.display = 'flex';
    cleanTab.style.backgroundColor = 'transparent';
    doorTab.style.backgroundColor = '#ddd';
    doorTab.style.color = 'grey';
    cleanTab.style.color = '#000';
    doorScheduleFocused = false;
    cleaningScheduleFocused = true;
});

function doorScheduleForm() {
    doorSchedule.style.display = 'flex';
    cleaningSchedule.style.display = 'none';
    doorTab.style.backgroundColor = 'transparent';
    cleanTab.style.backgroundColor = '#ddd';
    doorTab.style.color = '#000';
    cleanTab.style.color = 'grey';
}