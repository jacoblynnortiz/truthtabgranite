$.getJSON('https://sheetdb.io/api/v1/9423yqblhh11f', function (user_enrollments) {
    let userLogsTable = document.getElementById("userLogsTable");

    // creates charts headers

    let name = document.createElement("th");
    let email = document.createElement("th");
    let message = document.createElement("th");
    let timestamp = document.createElement("th");

    let userLog = document.createElement("tr");

    name.innerText = "Full Name";
    email.innerText = "Email";
    message.innerText = "Message";
    timestamp.innerText = "Timestamp";

    userLog.classList.add('table-row');

    userLog.appendChild(name);
    userLog.appendChild(email);
    userLog.appendChild(message);
    userLog.appendChild(timestamp);
    userLogsTable.appendChild(userLog);

    // loops through entire database to display all logs

    for (let i = 0; i <= user_enrollments.length; i++) {
        // creates a new log

        let nameItem = document.createElement("td");
        let emailItem = document.createElement("td");
        let messageItem = document.createElement("td");
        let timestampItem = document.createElement("td");

        nameItem.setAttribute("data-cell", "Full Name");
        emailItem.setAttribute("data-cell", "Email");
        messageItem.setAttribute("data-cell", "Message");
        timestampItem.setAttribute("data-cell", "Timestamp");

        let userLog = document.createElement("tr");
        userLog.classList.add('table-row');

        nameItem.innerText = user_enrollments[i].fullName;
        emailItem.innerText = user_enrollments[i].email;
        messageItem.innerText = user_enrollments[i].message;
        timestampItem.innerText = user_enrollments[i].timestamp;

        userLog.appendChild(nameItem);
        userLog.appendChild(emailItem);
        userLog.appendChild(messageItem);
        userLog.appendChild(timestampItem);
        userLogsTable.appendChild(userLog);
    }
});