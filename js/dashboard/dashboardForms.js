var form1 = document.getElementById('sheetdb-form-1');
form1.addEventListener("submit", e => {
    e.preventDefault();
    fetch(form1.action, {
        method: "POST",
        body: new FormData(document.getElementById("sheetdb-form-1")),
    }).then(
        response => response.json()
    ).then((html) => {
        // you can put any JS code here
        window.location = 'adminPanel.html', '_blank';

    });
});
var form2 = document.getElementById('sheetdb-form-2');
form2.addEventListener("submit", e => {
    e.preventDefault();
    fetch(form2.action, {
        method: "POST",
        body: new FormData(document.getElementById("sheetdb-form-2")),
    }).then(
        response => response.json()
    ).then((html) => {
        // you can put any JS code here
        window.location = 'adminPanel.html', '_blank';

    });
});
var form3 = document.getElementById('sheetdb-form-3');
form3.addEventListener("submit", e => {
    e.preventDefault();
    fetch(form3.action, {
        method: "POST",
        body: new FormData(document.getElementById("sheetdb-form-3")),
    }).then(
        response => response.json()
    ).then((html) => {
        // you can put any JS code here
        window.location = 'adminPanel.html', '_blank';

    });
});
var form4 = document.getElementById('sheetdb-form-4');
form4.addEventListener("submit", e => {
    e.preventDefault();
    fetch(form4.action, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(
        response => response.json()
    ).then((html) => {
        // you can put any JS code here
        window.location = 'adminPanel.html', '_blank';

    });
});

var form5 = document.getElementById('sheetdb-form-5');
form5.addEventListener("submit", e => {
    e.preventDefault();
    fetch(form5.action, {
        method: "POST",
        body: new FormData(document.getElementById("sheetdb-form-5")),
    }).then(
        response => response.json()
    ).then((html) => {
        // you can put any JS code here
        window.location = 'adminPanel.html', '_blank';

    });
});
var form6 = document.getElementById('sheetdb-form-6');
form6.addEventListener("submit", e => {
    e.preventDefault();
    fetch(form6.action, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(
        response => response.json()
    ).then((html) => {
        // you can put any JS code here
        window.location = 'adminPanel.html', '_blank';

    });
});
var form7 = document.getElementById('sheetdb-form-7');
form7.addEventListener("submit", e => {
    e.preventDefault();
    fetch(form7.action, {
        method: "POST",
        body: new FormData(document.getElementById("sheetdb-form-7")),
    }).then(
        response => response.json()
    ).then((html) => {
        // you can put any JS code here
        window.location = 'adminPanel.html', '_blank';

    });
});