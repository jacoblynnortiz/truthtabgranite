let datePostedSermonContainer = document.getElementById('datePostedSermonContainer');
let sheetdbForm2 = document.getElementById('sheetdb-form-2');

// gets current date to be able to make timestamp for sermon

datePostedSermonContainer.value = datePosted;

// detects language change to post to the respective database

document.getElementById("sermonLangChanger").onchange = function () {
    if (this.value == 'english') {
        sheetdbForm2.action = 'https://sheetdb.io/api/v1/1f0b8g95rfrlf';
    } else {
        sheetdbForm2.action = 'https://sheetdb.io/api/v1/id5r5hiin7tld';
    }
};