// variables for the 3 month tables

let monthTable1Clean = document.getElementById("monthTable1Clean");
let monthTable2Clean = document.getElementById("monthTable2Clean");
let monthTable3Clean = document.getElementById("monthTable3Clean");

// variables for the names of the 3 months and name of list

let quaterHeaderClean = document.getElementById("quaterHeaderClean");
let M1HeaderClean = document.getElementById("monthHeader1Clean");
let M2HeaderClean = document.getElementById("monthHeader2Clean");
let M3HeaderClean = document.getElementById("monthHeader3Clean");

// these are the true or false booleans that determin if
// there is still an upcoming schedule after one has been asigned

let noUpcomingScheduleClean = false;

// creates headers for the schedules tables

let M1dateClean = document.createElement("th");
let M1cleaner1 = document.createElement("th");
let M1cleaner2 = document.createElement("th");
let M1cleaner3 = document.createElement("th");

let M2dateClean = document.createElement("th");
let M2cleaner1 = document.createElement("th");
let M2cleaner2 = document.createElement("th");
let M2cleaner3 = document.createElement("th");

let M3dateClean = document.createElement("th");
let M3cleaner1 = document.createElement("th");
let M3cleaner2 = document.createElement("th");
let M3cleaner3 = document.createElement("th");

let scheduleCleanRow1 = document.createElement("tr");
let scheduleCleanRow2 = document.createElement("tr");
let scheduleCleanRow3 = document.createElement("tr");

scheduleCleanRow1.classList.add('table-row');
scheduleCleanRow2.classList.add('table-row');
scheduleCleanRow3.classList.add('table-row');

M1dateClean.innerText = "Date";
M1cleaner1.innerText = "Cleaner #1";
M1cleaner2.innerText = "Cleaner #2";
M1cleaner3.innerText = "Cleaner #3";

M2dateClean.innerText = "Date";
M2cleaner1.innerText = "Cleaner #1";
M2cleaner2.innerText = "Cleaner #2";
M2cleaner3.innerText = "Cleaner #3";

M3dateClean.innerText = "Date";
M3cleaner1.innerText = "Cleaner #1";
M3cleaner2.innerText = "Cleaner #2";
M3cleaner3.innerText = "Cleaner #3";

scheduleCleanRow1.appendChild(M1dateClean);
scheduleCleanRow1.appendChild(M1cleaner1);
scheduleCleanRow1.appendChild(M1cleaner2);
scheduleCleanRow1.appendChild(M1cleaner3);
monthTable1Clean.appendChild(scheduleCleanRow1);

scheduleCleanRow2.appendChild(M2dateClean);
scheduleCleanRow2.appendChild(M2cleaner1);
scheduleCleanRow2.appendChild(M2cleaner2);
scheduleCleanRow2.appendChild(M2cleaner3);
monthTable2Clean.appendChild(scheduleCleanRow2);

scheduleCleanRow3.appendChild(M3dateClean);
scheduleCleanRow3.appendChild(M3cleaner1);
scheduleCleanRow3.appendChild(M3cleaner2);
scheduleCleanRow3.appendChild(M3cleaner3);
monthTable3Clean.appendChild(scheduleCleanRow3);

// creates variables to know the current date

let monthlyScheduleDayClean = [],
    goalClean = dd;

let scheduleDayClean = null;

// logic to know what quarter it is and rename the names

let QuarterM1Clean, QuarterM2Clean, QuarterM3Clean;

if (mm == 1 || mm == 2 || mm == 3) {
    QuarterM1Clean = 1;
    QuarterM2Clean = 2;
    QuarterM3Clean = 3;
    quaterHeaderClean.innerText = 'QT 1 - Cleaning Schedule:';

    M1HeaderClean.innerText = 'January:';
    M2HeaderClean.innerText = 'February:';
    M3HeaderClean.innerText = 'March:';
} else if (mm == 4 || mm == 5 || mm == 6) {
    QuarterM1Clean = 4;
    QuarterM2Clean = 5;
    QuarterM3Clean = 6;
    quaterHeaderClean.innerText = 'QT 2 - Cleaning Schedule:';

    M1HeaderClean.innerText = 'April:';
    M2HeaderClean.innerText = 'May:';
    M3HeaderClean.innerText = 'June:';
} else if (mm == 7 || mm == 8 || mm == 9) {
    QuarterM1Clean = 7;
    QuarterM2Clean = 8;
    QuarterM3Clean = 9;
    quaterHeaderClean.innerText = 'QT 3 - Cleaning Schedule:';

    M1Header.innerText = 'July:';
    M2Header.innerText = 'August:';
    M3Header.innerText = 'September:';
} else if (mm == 10 || mm == 11 || mm == 12) {
    QuarterM1Clean = 10;
    QuarterM2Clean = 11;
    QuarterM3Clean = 12;
    quaterHeaderClean.innerText = 'QT 4 - Cleaning Schedule:';

    M1HeaderClean.innerText = 'October:';
    M2HeaderClean.innerText = 'November:';
    M3HeaderClean.innerText = 'December:';
}

$.getJSON('https://sheetdb.io/api/v1/r30p0zrj31ui1', function (cleaning_schedule) {

    for (let i = 0; i < cleaning_schedule.length; i++) {

        // this logic determins what month table the schedule needs to go to

        if (cleaning_schedule[i].date[1] == '/' || cleaning_schedule[i].date[1] == '-') {
            // checks for a double digit day number when month is also double digit number
            let scheduleMonth1 = cleaning_schedule[i].date[0];
            scheduleMonth = scheduleMonth1;
        } else if (cleaning_schedule[i].date[2] == '/' || cleaning_schedule[i].date[2] == '-') {
            // checks for a double digit day number when month is also double digit number
            let scheduleMonth1 = cleaning_schedule[i].date[0];
            let scheduleMonth2 = cleaning_schedule[i].date[1];
            scheduleMonth = scheduleMonth1 + scheduleMonth2;
        }

        // creates elements needed for a schedule

        let dateItem = document.createElement("td");
        let cleaner1Item = document.createElement("td");
        let cleaner2Item = document.createElement("td");
        let cleaner3Item = document.createElement("td");

        let scheduleRow = document.createElement("tr");

        scheduleRow.classList.add('table-row');

        // looks for day number no matter if single or double digit months and days

        if (cleaning_schedule[i].date[1] == '/' || cleaning_schedule[i].date[1] == '-') {
            // checks for a single digit day number when month is also single digit number
            if (cleaning_schedule[i].date[3] == '/' || cleaning_schedule[i].date[3] == '-') {
                scheduleDayClean = cleaning_schedule[i].date[2];
                monthlyScheduleDayClean.push(scheduleDayClean);
            } else if (cleaning_schedule[i].date[4] == '/' || cleaning_schedule[i].date[4] == '-') {
                // checks for a double digit day number when month is also single digit number
                let scheduleDayClean1 = cleaning_schedule[i].date[2];
                let scheduleDayClean2 = cleaning_schedule[i].date[3];
                scheduleDayClean = scheduleDayClean1 + scheduleDayClean2;
                monthlyScheduleDayClean.push(scheduleDayClean);
            }
        } else if (cleaning_schedule[i].date[2] == '/' || cleaning_schedule[i].date[2] == '-') {
            // checks for a single digit day number when month is also double digit number
            if (cleaning_schedule[i].date[4] == '/' || cleaning_schedule[i].date[4] == '-') {
                scheduleDayClean = cleaning_schedule[i].date[3];
                monthlyScheduleDayClean.push(scheduleDayClean);
            } else if (cleaning_schedule[i].date[5] == '/' || cleaning_schedule[i].date[4] == '-') {
                // checks for a double digit day number when month is also double digit number
                let scheduleDayClean1 = cleaning_schedule[i].date[3];
                let scheduleDayClean2 = cleaning_schedule[i].date[4];
                scheduleDayClean = scheduleDayClean1 + scheduleDayClean2;
                monthlyScheduleDayClean.push(scheduleDayClean);
            }
        }

        //labels schedule in gold and says todays schedule if schedule date
        // matches same month and day as today

        if (scheduleMonth == mm && scheduleDayClean == dd) {

            dateItem.innerText = "Today's Schedule";
            dateItem.style.backgroundColor = 'gold';
            cleaner1Item.style.backgroundColor = 'gold';
            cleaner2Item.style.backgroundColor = 'gold';
            cleaner3Item.style.backgroundColor = 'gold';
            noUpcomingScheduleClean = true;
            dateItem.setAttribute("data-cell", "Date");

        } else if (scheduleMonth == mm && monthlyScheduleDayClean[i] > dd) {
            if (noUpcomingScheduleClean == false) {

                dateItem.innerText = "Upcoming Schedule";
                dateItem.style.backgroundColor = 'gold';
                cleaner1Item.style.backgroundColor = 'gold';
                cleaner2Item.style.backgroundColor = 'gold';
                cleaner3Item.style.backgroundColor = 'gold';
                noUpcomingScheduleClean = true;
                dateItem.setAttribute("data-cell", "Date");
            } else {
                dateItem.innerText = cleaning_schedule[i].date;
                dateItem.setAttribute("data-cell", "Date");
            }
        } else if (scheduleMonth == mm + 1 && noUpcomingScheduleClean == false) {

                dateItem.innerText = "Upcoming Schedule";
                dateItem.style.backgroundColor = 'gold';
                cleaner1Item.style.backgroundColor = 'gold';
                cleaner2Item.style.backgroundColor = 'gold';
                cleaner3Item.style.backgroundColor = 'gold';
                noUpcomingScheduleClean = true;
                dateItem.setAttribute("data-cell", "Date");
        } else {
            dateItem.innerText = cleaning_schedule[i].date;
            dateItem.setAttribute("data-cell", "Date");
        }

        // sets the text and attributes needed to the items

        cleaner1Item.innerText = cleaning_schedule[i].cleaner1;
        cleaner2Item.innerText = cleaning_schedule[i].cleaner2;
        cleaner3Item.innerText = cleaning_schedule[i].cleaner3;

        cleaner1Item.setAttribute("data-cell", "Cleaner #1");
        cleaner2Item.setAttribute("data-cell", "Cleaner #2");
        cleaner3Item.setAttribute("data-cell", "Cleaner #3");

        // appends items to the schedule row

        scheduleRow.appendChild(dateItem);
        scheduleRow.appendChild(cleaner1Item);
        scheduleRow.appendChild(cleaner2Item);
        scheduleRow.appendChild(cleaner3Item);

        // adds schedule to whichever month it is assigned to

        if (QuarterM1 == scheduleMonth) {
            monthTable1Clean.appendChild(scheduleRow);
        } else if (QuarterM2 == scheduleMonth) {
            monthTable2Clean.appendChild(scheduleRow);
        } else if (QuarterM3 == scheduleMonth) {
            monthTable3Clean.appendChild(scheduleRow);
        }
    }

});