
const sermonsContainer = document.getElementById("sermonsContainer");

let viewAllSermonsBtn = document.getElementById("viewAllSermonsBtn");

// FETCHES JSON FROM DATABASE 

$.getJSON('https://sheetdb.io/api/v1/1f0b8g95rfrlf', function(sermon_posts) {
    // looks through sermons database displaying each one
    for (let i = sermon_posts.length - 1; i >= sermon_posts.length - 10; i--) {
        // creates new sermon post
        let newSermonContainer = document.createElement("div");;
        let newSermonInfoContainer = document.createElement("div");;
        let newSermonTitle = document.createElement("h2");
        let newSermonDate = document.createElement("h3");

        // creates sermon video
        newSermonContainer.classList.add("sermon-container");
        if(i == sermon_posts.length - 10) {
            newSermonContainer.style.marginBottom = '65px';
        }
        newSermonContainer.setAttribute("id", i);
        newSermonContainer.setAttribute("loading", "lazy");
        newSermonContainer.innerHTML = sermon_posts[i].sermon_src;

        // creates sermon title
        newSermonTitle.setAttribute("id", i);
        newSermonTitle.innerText = sermon_posts[i].sermon_title;

        // creates sermon date
        newSermonDate.setAttribute("id", i);
        newSermonDate.innerText = sermon_posts[i].sermon_date;
    
        // adds post elements to sermons container
        sermonsContainer.appendChild(newSermonContainer);
        newSermonContainer.appendChild(newSermonInfoContainer);
        newSermonInfoContainer.appendChild(newSermonTitle);
        newSermonInfoContainer.appendChild(newSermonDate);
    }
});

viewAllSermonsBtn.addEventListener('click', function() {
    $.getJSON('https://sheetdb.io/api/v1/1f0b8g95rfrlf', function(sermon_posts) {
    // looks through sermons database displaying each one
    for (let i = sermon_posts.length - 11; i >= 0; i--) {
        // creates new sermon post
        let newSermonContainer = document.createElement("div");;
        let newSermonInfoContainer = document.createElement("div");;
        let newSermonTitle = document.createElement("h2");
        let newSermonDate = document.createElement("h3");

        // creates sermon video
        newSermonContainer.classList.add("sermon-container");
        newSermonContainer.classList.add("animate-in");
        newSermonContainer.setAttribute("id", i);
        newSermonContainer.setAttribute("loading", "lazy");
        newSermonContainer.innerHTML = sermon_posts[i].sermon_src;

        // creates sermon title
        newSermonTitle.setAttribute("id", i);
        newSermonTitle.innerText = sermon_posts[i].sermon_title;

        // creates sermon date
        newSermonDate.setAttribute("id", i);
        newSermonDate.innerText = sermon_posts[i].sermon_date;
    
        // adds post elements to sermons container
        sermonsContainer.appendChild(newSermonContainer);
        newSermonContainer.appendChild(newSermonInfoContainer);
        newSermonInfoContainer.appendChild(newSermonTitle);
        newSermonInfoContainer.appendChild(newSermonDate);
    }
    viewAllSermonsBtn.style.display = 'none';
});
});