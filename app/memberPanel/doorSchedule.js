let scheduleDB = document.getElementById("scheduleDB");
let dontRepeat = false;
let noUpcoming = false;
let date = document.createElement("th");
let door1 = document.createElement("th");
let door2 = document.createElement("th");
let door3 = document.createElement("th");
let usher = document.createElement("th");

const today = new Date();
const yyyy = today.getFullYear();
let mm = today.getMonth() + 1; // Months start at 0!
let dd = today.getDate();

let monthlyScheduleDays = [],
    goal = dd;

const currentDate = mm + '/' + dd + '/' + yyyy;

let todayDate = null;

date.innerText = "Date";
door1.innerText = "Door #1";
door2.innerText = "Door #2";
door3.innerText = "Door #3";
usher.innerText = "Usher";

scheduleDB.appendChild(date);
scheduleDB.appendChild(door1);
scheduleDB.appendChild(door2);
scheduleDB.appendChild(door3);
scheduleDB.appendChild(usher);

$.getJSON('https://sheetdb.io/api/v1/vic0ho7i91v4l', function (door_usher_schedule) {

    for (let i = 0; i < door_usher_schedule.length; i++) {
        let dateV = document.createElement("td");
        let door1V = document.createElement("td");
        let door2V = document.createElement("td");
        let door3V = document.createElement("td");
        let usherV = document.createElement("td");

        let tableRow = document.createElement("tr");

        // looks for day number no matter if single or double digit months and days

        if(door_usher_schedule[i].date[1] == '/' || door_usher_schedule[i].date[1] == '-') {
            // checks for a single digit day number when month is also single digit number
            if(door_usher_schedule[i].date[3] == '/' || door_usher_schedule[i].date[3] == '-') {
                todayDate = door_usher_schedule[i].date[2];
                monthlyScheduleDays.push(todayDate);
                console.log(monthlyScheduleDays)
            } else if(door_usher_schedule[i].date[4] == '/' || door_usher_schedule[i].date[4] == '-') {
                // checks for a double digit day number when month is also single digit number
                let todayDate1 = door_usher_schedule[i].date[2];
                let todayDate2 = door_usher_schedule[i].date[3];
                todayDate = todayDate1 + todayDate2;
                monthlyScheduleDays.push(todayDate);
            }
        } else if(door_usher_schedule[i].date[2] == '/' || door_usher_schedule[i].date[2] == '-') {
            // checks for a single digit day number when month is also double digit number
            if(door_usher_schedule[i].date[4] == '/' || door_usher_schedule[i].date[4] == '-') {
                todayDate = door_usher_schedule[i].date[3];
                monthlyScheduleDays.push(todayDate);
            } else if(door_usher_schedule[i].date[5] == '/' || door_usher_schedule[i].date[4] == '-') {
                // checks for a double digit day number when month is also double digit number
                let todayDate1 = door_usher_schedule[i].date[3];
                let todayDate2 = door_usher_schedule[i].date[4];
                todayDate = todayDate1 + todayDate2;
                monthlyScheduleDays.push(todayDate);
            }
        }

        if (todayDate == dd) {
            dateV.innerText = "Today's Schedule";
            dateV.style.backgroundColor = 'gold';
            door1V.style.backgroundColor = 'gold';
            door2V.style.backgroundColor = 'gold';
            door3V.style.backgroundColor = 'gold';
            usherV.style.backgroundColor = 'gold';
            noUpcoming = true;
            dateV.setAttribute("data-cell", "Date");
        } else if (monthlyScheduleDays[i] > dd) {
            console.log(monthlyScheduleDays[i])
            if(noUpcoming == false) {
                if (dontRepeat == false) {
                    dateV.innerText = "Upcoming Schedule";
                    dateV.style.backgroundColor = 'gold';
                    door1V.style.backgroundColor = 'gold';
                    door2V.style.backgroundColor = 'gold';
                    door3V.style.backgroundColor = 'gold';
                    usherV.style.backgroundColor = 'gold';
                    dontRepeat = true;
                    dateV.setAttribute("data-cell", "Date");
                } else {
                    dateV.innerText = door_usher_schedule[i].date;
                    dateV.setAttribute("data-cell", "Date");
                }
            } else {
                dateV.innerText = door_usher_schedule[i].date;
                dateV.setAttribute("data-cell", "Date");
            }
        } else {
            dateV.innerText = door_usher_schedule[i].date;
            dateV.setAttribute("data-cell", "Date");
        }

        door1V.innerText = door_usher_schedule[i].door1;
        door2V.innerText = door_usher_schedule[i].door2;
        door3V.innerText = door_usher_schedule[i].door3;
        usherV.innerText = door_usher_schedule[i].usher;

        door1V.setAttribute("data-cell", "Door #1");
        door2V.setAttribute("data-cell", "Door #2");
        door3V.setAttribute("data-cell", "Door #3");
        usherV.setAttribute("data-cell", "Usher");

        tableRow.appendChild(dateV);
        tableRow.appendChild(door1V);
        tableRow.appendChild(door2V);
        tableRow.appendChild(door3V);
        tableRow.appendChild(usherV);
        scheduleDB.appendChild(tableRow);
    }

});