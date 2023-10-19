$.getJSON('https://sheetdb.io/api/v1/8yk5oje5mdf3w', function (user_enrollments) {
    let usersEnrolledDB = document.getElementById("usersEnrolledDB");

    // creates charts headers

    let fullName = document.createElement("th");
    let email = document.createElement("th");
    let message = document.createElement("th");
    let timestamp = document.createElement("th");

    fullName.innerText = "Full Name";
    email.innerText = "E-mail";
    message.innerText = "Message";
    timestamp.innerText = "Timestamp";

    usersEnrolledDB.appendChild(fullName);
    usersEnrolledDB.appendChild(email);
    usersEnrolledDB.appendChild(message);
    usersEnrolledDB.appendChild(timestamp);

    // loops through entire database to display all logs

    for (let i = 0; i <= user_enrollments.length; i++) {
        // creates a new log

        let fullNameV = document.createElement("td");
        let emailV = document.createElement("td");
        let messageV = document.createElement("td");
        let timestampV = document.createElement("td");

        fullNameV.setAttribute("data-cell", "Full Name");
        emailV.setAttribute("data-cell", "E-mail");
        messageV.setAttribute("data-cell", "Message");
        timestampV.setAttribute("data-cell", "Timestamp");

        let tableRow = document.createElement("tr");

        fullNameV.innerText = user_enrollments[i].fullName;
        emailV.innerText = user_enrollments[i].email;
        messageV.innerText = user_enrollments[i].message;
        timestampV.innerText = user_enrollments[i].timestamp;

        tableRow.appendChild(fullNameV);
        tableRow.appendChild(emailV);
        tableRow.appendChild(messageV);
        tableRow.appendChild(timestampV);
        usersEnrolledDB.appendChild(tableRow);
    }
});