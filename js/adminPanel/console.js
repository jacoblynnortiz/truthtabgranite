// WARNING: EXPERMENTAL CODE, DO NOT IMPLEMENT INTO PUBLIC VERSION OF WEBSITE "UNSTABLE"

let consoleWindow = document.getElementById('consoleWindow');
let consoleEnter = document.getElementById('consoleEnter');

consoleEnter.addEventListener('click', sendCommand());

function sendCommand() {
    let consoleInput = document.getElementById('consoleInput');

    if (consoleInput.value == '') {
        consoleInput.value = '';
    } else if (consoleInput.value == "/op") {
        let newCommand = document.createElement("li");
        newCommand.innerText = '"' + newCommand + '" is a valid command.';

        consoleWindow.appendChild(newCommand);
        consoleInput.value = '';
    } else if (consoleInput.value == "/deop") {
        let newCommand = document.createElement("li");
        newCommand.innerText = '"' + newCommand + '" is a valid command.';

        consoleWindow.appendChild(newCommand);
        consoleInput.value = '';
    } else {
        let newCommand = document.createElement("li");
        newCommand.innerText = '"' + consoleInput.value + '" is not valid command.';

        consoleWindow.appendChild(newCommand);
        consoleInput.value = '';
    }
}