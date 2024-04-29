// variables for the 3 month tables

let monthTable1 = document.getElementById("monthTable1");
let monthTable2 = document.getElementById("monthTable2");
let monthTable3 = document.getElementById("monthTable3");

// variables for the names of the 3 months and name of list

let quaterHeader = document.getElementById("quaterHeader");
let M1Header = document.getElementById("monthHeader1");
let M2Header = document.getElementById("monthHeader2");
let M3Header = document.getElementById("monthHeader3");

// these are the true or false booleans that determin if
// there is still an upcoming schedule after one has been asigned

let noUpcomingSchedule = false;

// creates headers for the schedules tables

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

monthTable1.appendChild(M1date);
monthTable1.appendChild(M1door1);
monthTable1.appendChild(M1door2);
monthTable1.appendChild(M1door3);
monthTable1.appendChild(M1usher);

monthTable2.appendChild(M2date);
monthTable2.appendChild(M2door1);
monthTable2.appendChild(M2door2);
monthTable2.appendChild(M2door3);
monthTable2.appendChild(M2usher);

monthTable3.appendChild(M3date);
monthTable3.appendChild(M3door1);
monthTable3.appendChild(M3door2);
monthTable3.appendChild(M3door3);
monthTable3.appendChild(M3usher);

// creates variables to know the current date

const today = new Date();
const yyyy = today.getFullYear();
let mm = today.getMonth() + 1; // Months start at 0!
let dd = today.getDate();

let hour = today.getHours()

let monthlyScheduleDays = [],
    goal = dd;

const currentDate = mm + '/' + dd + '/' + yyyy;

let scheduleDay = null;

// logic to know what quarter it is and rename the names

let QuarterM1, QuarterM2, QuarterM3;

if (mm == 1 || mm == 2 || mm == 3) {
    QuarterM1 = 1;
    QuarterM2 = 2;
    QuarterM3 = 3;
    quaterHeader.innerText = 'QT 1 - Door & Usher Schedule:';

    M1Header.innerText = 'January:';
    M2Header.innerText = 'February:';
    M3Header.innerText = 'March:';
} else if (mm == 4 || mm == 5 || mm == 6) {
    QuarterM1 = 4;
    QuarterM2 = 5;
    QuarterM3 = 6;
    quaterHeader.innerText = 'QT 2 - Door & Usher Schedule:';

    M1Header.innerText = 'April:';
    M2Header.innerText = 'May:';
    M3Header.innerText = 'June:';
} else if (mm == 7 || mm == 8 || mm == 9) {
    QuarterM1 = 7;
    QuarterM2 = 8;
    QuarterM3 = 9;
    quaterHeader.innerText = 'QT 3 - Door & Usher Schedule:';

    M1Header.innerText = 'July:';
    M2Header.innerText = 'August:';
    M3Header.innerText = 'September:';
} else if (mm == 10 || mm == 11 || mm == 12) {
    QuarterM1 = 10;
    QuarterM2 = 11;
    QuarterM3 = 12;
    quaterHeader.innerText = 'QT 4 - Door & Usher Schedule:';

    M1Header.innerText = 'October:';
    M2Header.innerText = 'November:';
    M3Header.innerText = 'December:';
}

$.getJSON('https://sheetdb.io/api/v1/9xbs0d16nkjhc', function (door_usher_schedule) {

    for (let i = 0; i < door_usher_schedule.length; i++) {

        // this logic determins what month table the schedule needs to go to

        if (door_usher_schedule[i].date[1] == '/' || door_usher_schedule[i].date[1] == '-') {
            // checks for a double digit day number when month is also double digit number
            let scheduleMonth1 = door_usher_schedule[i].date[0];
            scheduleMonth = scheduleMonth1;
        } else if (door_usher_schedule[i].date[2] == '/' || door_usher_schedule[i].date[2] == '-') {
            // checks for a double digit day number when month is also double digit number
            let scheduleMonth1 = door_usher_schedule[i].date[0];
            let scheduleMonth2 = door_usher_schedule[i].date[1];
            scheduleMonth = scheduleMonth1 + scheduleMonth2;
        }

        // creates elements needed for a schedule

        let dateItem = document.createElement("td");
        let door1Item = document.createElement("td");
        let door2Item = document.createElement("td");
        let door3Item = document.createElement("td");
        let usherItem = document.createElement("td");

        let scheduleRow = document.createElement("tr");

        // looks for day number no matter if single or double digit months and days

        if (door_usher_schedule[i].date[1] == '/' || door_usher_schedule[i].date[1] == '-') {
            // checks for a single digit day number when month is also single digit number
            if (door_usher_schedule[i].date[3] == '/' || door_usher_schedule[i].date[3] == '-') {
                scheduleDay = door_usher_schedule[i].date[2];
                monthlyScheduleDays.push(scheduleDay);
            } else if (door_usher_schedule[i].date[4] == '/' || door_usher_schedule[i].date[4] == '-') {
                // checks for a double digit day number when month is also single digit number
                let scheduleDay1 = door_usher_schedule[i].date[2];
                let scheduleDay2 = door_usher_schedule[i].date[3];
                scheduleDay = scheduleDay1 + scheduleDay2;
                monthlyScheduleDays.push(scheduleDay);
            }
        } else if (door_usher_schedule[i].date[2] == '/' || door_usher_schedule[i].date[2] == '-') {
            // checks for a single digit day number when month is also double digit number
            if (door_usher_schedule[i].date[4] == '/' || door_usher_schedule[i].date[4] == '-') {
                scheduleDay = door_usher_schedule[i].date[3];
                monthlyScheduleDays.push(scheduleDay);
            } else if (door_usher_schedule[i].date[5] == '/' || door_usher_schedule[i].date[4] == '-') {
                // checks for a double digit day number when month is also double digit number
                let scheduleDay1 = door_usher_schedule[i].date[3];
                let scheduleDay2 = door_usher_schedule[i].date[4];
                scheduleDay = scheduleDay1 + scheduleDay2;
                monthlyScheduleDays.push(scheduleDay);
            }
        }

        //labels schedule in gold and says todays schedule if schedule date
        // matches same month and day as today

        if (scheduleMonth == mm && scheduleDay == dd) {
            dateItem.innerText = "Today's Schedule";
            dateItem.style.backgroundColor = 'gold';
            door1Item.style.backgroundColor = 'gold';
            door2Item.style.backgroundColor = 'gold';
            door3Item.style.backgroundColor = 'gold';
            usherItem.style.backgroundColor = 'gold';
            noUpcomingSchedule = true;
            dateItem.setAttribute("data-cell", "Date");

        } else if (scheduleMonth == mm && monthlyScheduleDays[i] > dd) {
            if (noUpcomingSchedule == false) {

                dateItem.innerText = "Upcoming Schedule";
                dateItem.style.backgroundColor = 'gold';
                door1Item.style.backgroundColor = 'gold';
                door2Item.style.backgroundColor = 'gold';
                door3Item.style.backgroundColor = 'gold';
                usherItem.style.backgroundColor = 'gold';
                noUpcomingSchedule = true;
                dateItem.setAttribute("data-cell", "Date");
            } else {
                dateItem.innerText = door_usher_schedule[i].date;
                dateItem.setAttribute("data-cell", "Date");
            }
        } else if (scheduleMonth == mm + 1 && noUpcomingSchedule == false) {

                dateItem.innerText = "Upcoming Schedule";
                dateItem.style.backgroundColor = 'gold';
                door1Item.style.backgroundColor = 'gold';
                door2Item.style.backgroundColor = 'gold';
                door3Item.style.backgroundColor = 'gold';
                usherItem.style.backgroundColor = 'gold';
                noUpcomingSchedule = true;
                dateItem.setAttribute("data-cell", "Date");
        } else {
            dateItem.innerText = door_usher_schedule[i].date;
            dateItem.setAttribute("data-cell", "Date");
        }

        // sets the text and attributes needed to the items

        door1Item.innerText = door_usher_schedule[i].door1;
        door2Item.innerText = door_usher_schedule[i].door2;
        door3Item.innerText = door_usher_schedule[i].door3;
        usherItem.innerText = door_usher_schedule[i].usher;

        door1Item.setAttribute("data-cell", "Door #1");
        door2Item.setAttribute("data-cell", "Door #2");
        door3Item.setAttribute("data-cell", "Door #3");
        usherItem.setAttribute("data-cell", "Usher");

        // appends items to the schedule row

        scheduleRow.appendChild(dateItem);
        scheduleRow.appendChild(door1Item);
        scheduleRow.appendChild(door2Item);
        scheduleRow.appendChild(door3Item);
        scheduleRow.appendChild(usherItem);

        // adds schedule to whichever month it is assigned to

        if (QuarterM1 == scheduleMonth) {
            monthTable1.appendChild(scheduleRow);
        } else if (QuarterM2 == scheduleMonth) {
            monthTable2.appendChild(scheduleRow);
        } else if (QuarterM3 == scheduleMonth) {
            monthTable3.appendChild(scheduleRow);
        }
    }

});