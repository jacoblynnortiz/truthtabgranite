let datePostedContainer = document.getElementById('datePostedContainer');
let sheetdbForm1 = document.getElementById('sheetdb-form-1');
let postLangChanger = document.getElementById('postLangChanger');

let imgSrcInput = document.getElementById('imgSrcInput');
let previewPostImage = document.getElementById('previewPostImage');

// gets current date to be able to make timestamp for post

const today = new Date();
const yyyy = today.getFullYear();
let mm = today.getMonth() + 1; // Months start at 0!
let dd = today.getDate();

const datePosted = mm + '/' + dd + '/' + yyyy;

datePostedContainer.value = datePosted;

// detects language change to post to the respective database

document.getElementById("postLangChanger").onchange = function () {
    if (this.value == 'english') {
        sheetdbForm1.action = 'https://sheetdb.io/api/v1/sn4bwy4h5v3t1';
    } else {
        sheetdbForm1.action = 'https://sheetdb.io/api/v1/p15xdj6p5l8fi';
    }
};

setInterval(function() {
    previewPostImage.src = imgSrcInput.value;
}, 1000);