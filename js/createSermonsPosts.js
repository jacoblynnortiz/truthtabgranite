
const sermonsContainer = document.getElementById("sermonsContainer");

let viewAllSermonsBtn = document.getElementById("viewAllSermonsBtn");

// FETCHES JSON FROM DATABASE 

$.getJSON('https://sheetdb.io/api/v1/1f0b8g95rfrlf', function(sermon_posts) {
    // looks through sermons database displaying each one
    for (let i = sermon_posts.length - 1; i >= sermon_posts.length - 10; i--) {
         // creates new sermon post
         let newSermonContainer = document.createElement("div");;
         let newSermonVideoContainer = document.createElement("div");;
         let newSermonInfoContainer = document.createElement("div");;
         let newSermonTitle = document.createElement("h3");
         let newSermonDiscription = document.createElement("p");

         let newSermonSpeakerDate = document.createElement("h4");
         let newSermonSpeaker = document.createElement("span");
         let newSermonDate = document.createElement("span");
 
         // creates sermon video
         newSermonContainer.classList.add("sermon");
         newSermonContainer.setAttribute("id", i);
         newSermonContainer.setAttribute("loading", "lazy");
         newSermonVideoContainer.innerHTML = sermon_posts[i].sermon_src;

         newSermonVideoContainer.classList.add("sermon-col1");
         newSermonInfoContainer.classList.add("sermon-col2");
 
         // creates sermon title
         newSermonTitle.setAttribute("id", i);
         newSermonTitle.innerText = sermon_posts[i].sermon_title;
 
         // creates sermon discription
         newSermonDiscription.setAttribute("id", i);
         newSermonDiscription.innerText = sermon_posts[i].sermon_discription;
 
         // creates sermon speaker and date tag
         newSermonSpeakerDate.setAttribute("id", i);

         newSermonSpeakerDate.setAttribute("id", i);
         newSermonSpeaker.innerText = sermon_posts[i].sermon_speaker + ' • ';
         newSermonSpeakerDate.appendChild(newSermonSpeaker);

         newSermonSpeakerDate.setAttribute("id", i);
         newSermonDate.innerText = sermon_posts[i].sermon_date;
         newSermonSpeakerDate.appendChild(newSermonDate);
     
         // adds post elements to sermons container
         sermonsContainer.appendChild(newSermonContainer);
         newSermonContainer.appendChild(newSermonVideoContainer);
         newSermonContainer.appendChild(newSermonInfoContainer);
         newSermonInfoContainer.appendChild(newSermonTitle);
         newSermonInfoContainer.appendChild(newSermonDiscription);
         newSermonInfoContainer.appendChild(newSermonSpeakerDate);
    }
});

viewAllSermonsBtn.addEventListener('click', function() {
    $.getJSON('https://sheetdb.io/api/v1/1f0b8g95rfrlf', function(sermon_posts) {
    // looks through sermons database displaying each one
    for (let i = sermon_posts.length - 11; i >= 0; i--) {
                 // creates new sermon post
                 let newSermonContainer = document.createElement("div");;
                 let newSermonVideoContainer = document.createElement("div");;
                 let newSermonInfoContainer = document.createElement("div");;
                 let newSermonTitle = document.createElement("h3");
                 let newSermonDiscription = document.createElement("p");
        
                 let newSermonSpeakerDate = document.createElement("h4");
                 let newSermonSpeaker = document.createElement("span");
                 let newSermonDate = document.createElement("span");
         
                 // creates sermon video
                 newSermonContainer.classList.add("sermon");
                 newSermonContainer.classList.add("animate-in");
                 newSermonContainer.setAttribute("id", i);
                 newSermonContainer.setAttribute("loading", "lazy");
                 newSermonVideoContainer.innerHTML = sermon_posts[i].sermon_src;
        
                 newSermonVideoContainer.classList.add("sermon-col1");
                 newSermonInfoContainer.classList.add("sermon-col2");
         
                 // creates sermon title
                 newSermonTitle.setAttribute("id", i);
                 newSermonTitle.innerText = sermon_posts[i].sermon_title;
         
                 // creates sermon discription
                 newSermonDiscription.setAttribute("id", i);
                 newSermonDiscription.innerText = sermon_posts[i].sermon_discription;
         
                 // creates sermon speaker and date tag
                 newSermonSpeakerDate.setAttribute("id", i);
        
                 newSermonSpeakerDate.setAttribute("id", i);
                 newSermonSpeaker.innerText = sermon_posts[i].sermon_speaker + ' • ';
                 newSermonSpeakerDate.appendChild(newSermonSpeaker);
        
                 newSermonSpeakerDate.setAttribute("id", i);
                 newSermonDate.innerText = sermon_posts[i].sermon_date;
                 newSermonSpeakerDate.appendChild(newSermonDate);
             
                 // adds post elements to sermons container
                 sermonsContainer.appendChild(newSermonContainer);
                 newSermonContainer.appendChild(newSermonVideoContainer);
                 newSermonContainer.appendChild(newSermonInfoContainer);
                 newSermonInfoContainer.appendChild(newSermonTitle);
                 newSermonInfoContainer.appendChild(newSermonDiscription);
                 newSermonInfoContainer.appendChild(newSermonSpeakerDate);
    }
    viewAllSermonsBtn.style.display = 'none';
});
});