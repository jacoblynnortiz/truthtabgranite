let scheduleDB1 = document.getElementById("scheduleDB1");
let scheduleDB2 = document.getElementById("scheduleDB2");
let scheduleDB3 = document.getElementById("scheduleDB3");

let M1Header = document.getElementById("M1Header");
let M2Header = document.getElementById("M2Header");
let M3Header = document.getElementById("M3Header");

let quaterHeader = document.getElementById("quaterHeader");

let dontRepeat = false;
let noUpcoming = false;

let M1date = document.createElement("th");
let M1door1 = document.createElement("th");
let M1door2 = document.createElement("th");
let M1door3 = document.createElement("th");
let M1usher = document.createElement("th");

let M2date = document.createElement("th");
let M2door1 = document.createElement("th");
let M2door2 = document.createElement("th");
let M2door3 = document.createElement("th");
let M2usher = document.createElement("th");

let M3date = document.createElement("th");
let M3door1 = document.createElement("th");
let M3door2 = document.createElement("th");
let M3door3 = document.createElement("th");
let M3usher = document.createElement("th");

const today = new Date();
const yyyy = today.getFullYear();
let mm = today.getMonth() + 1; // Months start at 0!
let dd = today.getDate();

let monthlyScheduleDays = [],
    goal = dd;

const currentDate = mm + '/' + dd + '/' + yyyy;

let todayDate = null;

let QuarterM1, QuarterM2, QuarterM3;

if(mm == 1 || mm == 2 || mm == 3) {
    QuarterM1 = 1;
    QuarterM2 = 2;
    QuarterM3 = 3;
    quaterHeader.innerText = 'QT 1 - Door & Usher Greeting Schedule:';

    M1Header.innerText = 'January:';
    M2Header.innerText = 'February:';
    M3Header.innerText = 'March:';
} else if(mm == 4 || mm == 5 || mm == 6) {
    QuarterM1 = 4;
    QuarterM2 = 5;
    QuarterM3 = 6;
    quaterHeader.innerText = 'QT 2 - Door & Usher Greeting Schedule:';
    
    M1Header.innerText = 'April:';
    M2Header.innerText = 'May:';
    M3Header.innerText = 'June:';
} else if(mm == 7 || mm == 8 || mm == 9) {
    QuarterM1 = 7;
    QuarterM2 = 8;
    QuarterM3 = 9;
    quaterHeader.innerText = 'QT 3 - Door & Usher Greeting Schedule:';
    
    M1Header.innerText = 'July:';
    M2Header.innerText = 'August:';
    M3Header.innerText = 'September:';
} else if(mm == 10 || mm == 11 || mm == 12) {
    QuarterM1 = 10;
    QuarterM2 = 11;
    QuarterM3 = 12;
    quaterHeader.innerText = 'QT 4 - Door & Usher Greeting Schedule:';
    
    M1Header.innerText = 'October:';
    M2Header.innerText = 'November:';
    M3Header.innerText = 'December:';
}

M1date.innerText = "Date";
M1door1.innerText = "Door #1";
M1door2.innerText = "Door #2";
M1door3.innerText = "Door #3";
M1usher.innerText = "Usher";

M2date.innerText = "Date";
M2door1.innerText = "Door #1";
M2door2.innerText = "Door #2";
M2door3.innerText = "Door #3";
M2usher.innerText = "Usher";

M3date.innerText = "Date";
M3door1.innerText = "Door #1";
M3door2.innerText = "Door #2";
M3door3.innerText = "Door #3";
M3usher.innerText = "Usher";

scheduleDB1.appendChild(M1date);
scheduleDB1.appendChild(M1door1);
scheduleDB1.appendChild(M1door2);
scheduleDB1.appendChild(M1door3);
scheduleDB1.appendChild(M1usher);

scheduleDB2.appendChild(M2date);
scheduleDB2.appendChild(M2door1);
scheduleDB2.appendChild(M2door2);
scheduleDB2.appendChild(M2door3);
scheduleDB2.appendChild(M2usher);

scheduleDB3.appendChild(M3date);
scheduleDB3.appendChild(M3door1);
scheduleDB3.appendChild(M3door2);
scheduleDB3.appendChild(M3door3);
scheduleDB3.appendChild(M3usher);

$.getJSON('https://sheetdb.io/api/v1/vic0ho7i91v4l', function (door_usher_schedule) {

    for (let i = 0; i < door_usher_schedule.length; i++) {

        if(door_usher_schedule[i].date[1] == '/' || door_usher_schedule[i].date[1] == '-') {
            // checks for a double digit day number when month is also double digit number
            let currentMonth1 = door_usher_schedule[i].date[0];
            scheduleMonth = scheduleMonth1;
            console.log(currentMonth)
        } else if(door_usher_schedule[i].date[2] == '/' || door_usher_schedule[i].date[2] == '-') {
            // checks for a double digit day number when month is also double digit number
            let currentMonth1 = door_usher_schedule[i].date[0];
            let currentMonth2 = door_usher_schedule[i].date[1];
            currentMonth = currentMonth1 + currentMonth2;
            console.log(currentMonth)
        }

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

        if (currentMonth == mm && todayDate == dd) {

            dateV.innerText = "Today's Schedule";
            dateV.style.backgroundColor = 'gold';
            door1V.style.backgroundColor = 'gold';
            door2V.style.backgroundColor = 'gold';
            door3V.style.backgroundColor = 'gold';
            usherV.style.backgroundColor = 'gold';
            noUpcoming = true;
            dateV.setAttribute("data-cell", "Date");
        } else if (currentMonth == mm && monthlyScheduleDays[i] > dd) {
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

        if(door_usher_schedule[i].date[1] == '/' || door_usher_schedule[i].date[1] == '-') {
            // checks for a double digit day number when month is also double digit number
            let scheduleMonth1 = door_usher_schedule[i].date[0];
            scheduleMonth = scheduleMonth1;
            console.log(scheduleMonth)
        } else if(door_usher_schedule[i].date[2] == '/' || door_usher_schedule[i].date[2] == '-') {
            // checks for a double digit day number when month is also double digit number
            let scheduleMonth1 = door_usher_schedule[i].date[0];
            let scheduleMonth2 = door_usher_schedule[i].date[1];
            scheduleMonth = scheduleMonth1 + scheduleMonth2;
            console.log(scheduleMonth)
        }

        if(QuarterM1 == scheduleMonth) {
            scheduleDB1.appendChild(tableRow);
        } else if(QuarterM2 == scheduleMonth) {
            scheduleDB2.appendChild(tableRow);
        } else if(QuarterM3 == scheduleMonth) {
            scheduleDB3.appendChild(tableRow);
        }
    }

});