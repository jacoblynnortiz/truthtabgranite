let cleaningScheduleDB = document.getElementById("cleaningScheduleDB");
let cleaningDontRepeat = false;
let cleaningNoUpcoming = false;
let cleaningDate = document.createElement("th");
let slot1 = document.createElement("th");
let slot2 = document.createElement("th");
let slot3 = document.createElement("th");

let cleaningMonthlyScheduleDays = [],
    cleaningGoal = dd;

let cleaningTodayDate = null;

cleaningDate.innerText = "Date";
slot1.innerText = "Slot #1";
slot2.innerText = "Slot #2";
slot3.innerText = "Slot #3";

cleaningScheduleDB.appendChild(cleaningDate);
cleaningScheduleDB.appendChild(slot1);
cleaningScheduleDB.appendChild(slot2);
cleaningScheduleDB.appendChild(slot3);

$.getJSON('https://sheetdb.io/api/v1/ybpphomtih2ho', function (door_schedule) {

    for (let i = 0; i < door_schedule.length; i++) {
        let cleaningDateV = document.createElement("td");
        let slot1V = document.createElement("td");
        let slot2V = document.createElement("td");
        let slot3V = document.createElement("td");

        let tableRow = document.createElement("tr");

        // looks for day number no matter if single or double digit months and days

        if(door_schedule[i].date[1] == '/' || door_schedule[i].date[1] == '-') {
            // checks for a single digit day number when month is also single digit number
            if(door_schedule[i].date[3] == '/' || door_schedule[i].date[3] == '-') {
                cleaningTodayDate = door_schedule[i].date[2];
                cleaningMonthlyScheduleDays.push(cleaningTodayDate);
            } else if(door_schedule[i].date[4] == '/' || door_schedule[i].date[4] == '-') {
                // checks for a double digit day number when month is also single digit number
                let cleaningTodayDate1 = door_schedule[i].date[2];
                let cleaningTodayDate2 = door_schedule[i].date[3];
                cleaningTodayDate = cleaningTodayDate1 + cleaningTodayDate2;
                cleaningMonthlyScheduleDays.push(cleaningTodayDate);
            }
        } else if(door_schedule[i].date[2] == '/' || door_schedule[i].date[2] == '-') {
            // checks for a single digit day number when month is also double digit number
            if(door_schedule[i].date[4] == '/' || door_schedule[i].date[4] == '-') {
                cleaningTodayDate = door_schedule[i].date[3];
                cleaningMonthlyScheduleDays.push(cleaningTodayDate);
            } else if(door_schedule[i].date[5] == '/' || door_schedule[i].date[4] == '-') {
                // checks for a double digit day number when month is also double digit number
                let cleaningTodayDate1 = door_schedule[i].date[3];
                let cleaningTodayDate2 = door_schedule[i].date[4];
                cleaningTodayDate = cleaningTodayDate1 + cleaningTodayDate2;
                cleaningMonthlyScheduleDays.push(cleaningTodayDate);
            }
        }

        if (cleaningTodayDate == dd || cleaningTodayDate == d) {
            cleaningDateV.innerText = "Today's Schedule";
            cleaningDateV.style.backgroundColor = 'gold';
            slot1V.style.backgroundColor = 'gold';
            slot2V.style.backgroundColor = 'gold';
            slot3V.style.backgroundColor = 'gold';
            cleaningNoUpcoming = true;
            cleaningDateV.setAttribute("data-cell", "Date");
        } else if (cleaningMonthlyScheduleDays[i] > dd || cleaningMonthlyScheduleDays[i] > d) {
            if(cleaningNoUpcoming == false) {
                if (cleaningDontRepeat == false) {
                    cleaningDateV.innerText = "Upcoming Schedule";
                    cleaningDateV.style.backgroundColor = 'gold';
                    slot1V.style.backgroundColor = 'gold';
                    slot2V.style.backgroundColor = 'gold';
                    slot3V.style.backgroundColor = 'gold';
                    cleaningDontRepeat = true;
                    cleaningDateV.setAttribute("data-cell", "Date");
                } else {
                    cleaningDateV.innerText = door_schedule[i].date;
                    cleaningDateV.setAttribute("data-cell", "Date");
                }
            } else {
                cleaningDateV.innerText = door_schedule[i].date;
                cleaningDateV.setAttribute("data-cell", "Date");
            }
        } else {
            cleaningDateV.innerText = door_schedule[i].date;
            cleaningDateV.setAttribute("data-cell", "Date");
        }

        slot1V.innerText = door_schedule[i].name1;
        slot2V.innerText = door_schedule[i].name2;
        slot3V.innerText = door_schedule[i].name3;

        slot1V.setAttribute("data-cell", "Slot #1");
        slot2V.setAttribute("data-cell", "Slot #2");
        slot3V.setAttribute("data-cell", "Slot #3");

        tableRow.appendChild(cleaningDateV);
        tableRow.appendChild(slot1V);
        tableRow.appendChild(slot2V);
        tableRow.appendChild(slot3V);
        cleaningScheduleDB.appendChild(tableRow);
    }

});