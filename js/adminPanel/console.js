// WARNING: EXPERMENTAL CODE, DO NOT IMPLEMENT INTO PUBLIC VERSION OF WEBSITE "UNSTABLE"

let consoleWindow = document.getElementById('consoleWindow');
let consoleEnter = document.getElementById('consoleEnter');

consoleEnter.addEventListener('click', sendCommand);

function sendCommand(event) {
    event.preventDefault();
    let consoleInput = document.getElementById('consoleInput');

    if (consoleInput.value == '') {
        return;
    } else if (consoleInput.value != '') {
        let newCommand = document.createElement("li");
        newCommand.innerText = consoleInput.value;

        $.getJSON('js/adminPanel/consoleCommands.json', function (consoleCommands, newCommand) {
            // looks through accounts database looking for match
            for (let i = 0; i < consoleCommands.length; i++) {
                var triedCommand = consoleInput.value;
                var values = triedCommand.split(" ");
                var commandName = values[0];
                var commandMessage = triedCommand.substr(triedCommand.indexOf(' ') + 1);
                console.log(commandName)
                console.log(commandMessage)
                if (newCommand == consoleCommands[i].commandName) {
                    console.log(newCommand + ' does match command: ' + consoleCommands[i].commandName)
                } else if (newCommand != consoleCommands[i].commandName) {
                    console.log(newCommand + ' does not match command: ' + consoleCommands[i].commandName)
                } else {
                    console.log(newCommand + ' does not match command: ' + consoleCommands[i].commandName)
                }
            }
        });

        consoleWindow.appendChild(newCommand);
        consoleInput.value = '';
    }

    $.getJSON('js/adminPanel/consoleCommands.json', function (consoleCommands) {
        // looks through accounts database looking for match
        for (let i = 0; i < consoleCommands.length; i++) {
            var triedCommand = newCommand;
            var values = triedCommand.split(" ");
            var commandName = values[0];
            var commandMessage = triedCommand.substr(triedCommand.indexOf(' ') + 1);
            console.log(commandName)
            console.log(commandMessage)
            if (commandName == consoleCommands[i].commandName) {
                console.log(commandName + ' does match command: ' + consoleCommands[i].commandName)
            } else if (commandName != consoleCommands[i].commandName) {
                console.log(commandName + ' does not match command: ' + consoleCommands[i].commandName)
            } else {
                console.log(commandName + ' does not match command: ' + consoleCommands[i].commandName)
            }
        }
    });
}