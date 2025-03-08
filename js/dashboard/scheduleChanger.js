let doorScheduleFocused = true;
let cleaningScheduleFocused = false;

let doorTab = document.getElementById('doorTab');
let cleanTab = document.getElementById('cleanTab');
let doorSchedule = document.getElementById('doorSchedule');
let cleaningSchedule = document.getElementById('cleaningSchedule');

let requestDoorDelete = document.getElementById('requestDoorDelete');
let requestCleaningDelete = document.getElementById('requestCleaningDelete');

let deleteDoorConfirmation = document.getElementById('deleteDoorConfirmation');
let deleteCleaningConfirmation = document.getElementById('deleteCleaningConfirmation');

let cancelDoorScheduleDelete = document.getElementById('cancelDoorScheduleDelete');
let cancelCleaningScheduleDelete = document.getElementById('cancelCleaningScheduleDelete');

doorScheduleForm();

doorTab.addEventListener('click', function doorScheduleForm() {
    doorSchedule.style.display = 'flex';
    cleaningSchedule.style.display = 'none';
    doorTab.style.backgroundColor = 'transparent';
    cleanTab.style.backgroundColor = '#191919';
    doorTab.style.color = '#fff';
    cleanTab.style.color = 'grey';
    doorScheduleFocused = true;
    cleaningScheduleFocused = false;
});

cleanTab.addEventListener('click', function cleaningScheduleForm() {
    doorSchedule.style.display = 'none';
    cleaningSchedule.style.display = 'flex';
    cleanTab.style.backgroundColor = 'transparent';
    doorTab.style.backgroundColor = '#191919';
    doorTab.style.color = 'grey';
    cleanTab.style.color = '#fff';
    doorScheduleFocused = false;
    cleaningScheduleFocused = true;
});

function doorScheduleForm() {
    doorSchedule.style.display = 'flex';
    cleaningSchedule.style.display = 'none';
    doorTab.style.backgroundColor = 'transparent';
    cleanTab.style.backgroundColor = '#191919';
    doorTab.style.color = '#fff';
    cleanTab.style.color = 'grey';
}

// checks for deletion request

requestDoorDelete.addEventListener('click', function () {
    deleteDoorConfirmation.classList.add("animateConfirmation");
    deleteDoorConfirmation.classList.remove("animateUnConfirmation");
});

requestCleaningDelete.addEventListener('click', function () {
    deleteCleaningConfirmation.classList.add("animateConfirmation");
    deleteCleaningConfirmation.classList.remove("animateUnConfirmation");
});

cancelDoorScheduleDelete.addEventListener('click', function () {
    deleteDoorConfirmation.classList.add("animateUnConfirmation");
    deleteDoorConfirmation.classList.remove("animateConfirmation");
});

cancelCleaningScheduleDelete.addEventListener('click', function () {
    deleteCleaningConfirmation.classList.add("animateUnConfirmation");
    deleteCleaningConfirmation.classList.remove("animateConfirmation");
});