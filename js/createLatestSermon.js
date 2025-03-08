let latestSermonVideoContainer = document.getElementById("latestSermonVideoContainer");
let latestSermonTitleContainer = document.getElementById("latestSermonTitleContainer");
let latestSermonDiscriptionContainer = document.getElementById("latestSermonDiscriptionContainer");
let latestSermonSpeakerContainer = document.getElementById("latestSermonSpeakerContainer");
let latestSermonDateContainer = document.getElementById("latestSermonDateContainer");
let latestSermonViewMediaContainer = document.getElementById("latestSermonViewMediaContainer");

// FETCHES JSON FROM DATABASE

$.getJSON('https://sheetdb.io/api/v1/1f0b8g95rfrlf', function (sermon_posts) {
    // looks through sermons database displaying each one
    for (let i = sermon_posts.length - 1; i >= sermon_posts.length - 1; i--) {
        // inject JSON into elements
        latestSermonVideoContainer.innerHTML = sermon_posts[i].sermon_src;
        latestSermonTitleContainer.innerText = sermon_posts[i].sermon_title;
        latestSermonDiscriptionContainer.innerText = sermon_posts[i].sermon_discription;
        latestSermonSpeakerContainer.innerText = sermon_posts[i].sermon_speaker;
        latestSermonDateContainer.innerText = sermon_posts[i].sermon_date;
        latestSermonViewMediaContainer.href = sermon_posts[i].sermon_link;
    }
});