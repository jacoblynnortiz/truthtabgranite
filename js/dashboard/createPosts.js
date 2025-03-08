let datePostedContainer = document.getElementById('datePostedContainer');
let sheetdbForm1 = document.getElementById('sheetdb-form-1');
let postLangChanger = document.getElementById('postLangChanger');

let imgSrcInput = document.getElementById('imgSrcInput');
let previewPostImage = document.getElementById('previewPostImage');

// gets current date to be able to make timestamp for post

const datePosted = mm + '/' + dd + '/' + yyyy;

datePostedContainer.value = datePosted;

// detects language change to post to the respective database

document.getElementById("postLangChanger").onchange = function () {
    if (this.value == 'english') {
        sheetdbForm1.action = 'https://sheetdb.io/api/v1/sn4bwy4h5v3t1';
    } else {
        alert('This feature is currently unavailable')
    }
};

setInterval(function() {
    previewPostImage.src = imgSrcInput.value;
}, 1000);