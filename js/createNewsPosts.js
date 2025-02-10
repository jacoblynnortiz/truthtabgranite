
const postSection = document.getElementById("posts");

// FETCHES JSON FROM DATABASE 

if (document.title == 'Truth Tabernacle of Granite City') {
    $.getJSON('https://sheetdb.io/api/v1/sn4bwy4h5v3t1', function (news_posts) {
        // looks through news database displaying each one
        for (let i = news_posts.length - 1; i >= news_posts.length - 3; i--) {
            // creates new news post
            let newPostContainer = document.createElement("div");
            let newPost = document.createElement("div");

            let newPostDateContainer = document.createElement("h4");
            let newPostCalendar = document.createElement("i");
            let newPostDate = document.createElement("span");
            let newPostTitle = document.createElement("h3");
            let newPostText = document.createElement("p");
            let newPostReadMore = document.createElement("a");
            let newPostButtonContainer = document.createElement("div");

            newPostContainer.classList.add("post-container");
            newPostContainer.setAttribute("id", "post" + i);

            // creates news post image
            newPost.classList.add("post");
            newPost.setAttribute("id", i);
            newPost.style.backgroundImage = "url(" + news_posts[i].img_src + ")";

            // creates news post date
            newPostCalendar.classList.add("fa-solid");
            newPostCalendar.classList.add("fa-calendar-days");
            newPostDate.setAttribute("id", i);
            newPostDate.innerText = news_posts[i].post_date;

            // creates news post title
            newPostTitle.classList.add("post-title");
            var newPostTitleInnerText = news_posts[i].post_title;
            if (newPostTitleInnerText.length > 45) {
                newPostTitleInnerText = newPostTitleInnerText.substring(0, 45);
                newPostTitleInnerText = newPostTitleInnerText + "..."
            }
            newPostTitle.setAttribute("id", i);
            newPostTitle.innerText = newPostTitleInnerText;

            // creates news post text and date
            newPostText.classList.add("post-txt");
            var newPostInnerText = news_posts[i].post_txt;
            if (newPostInnerText.length > 200) {
                newPostInnerText = newPostInnerText.substring(0, 200);
                newPostInnerText = newPostInnerText + "..."
            }
            newPostText.setAttribute("id", i);
            newPostText.innerHTML = newPostInnerText;

            newPostReadMore.innerText = "Read More";
            newPostReadMore.classList.add("post-read-more");
            newPostReadMore.href = "news.html#post" + i;

            newPostButtonContainer.classList.add("post-read-more-container");

            // adds post elements to posts container
            postSection.appendChild(newPostContainer);
            newPostContainer.appendChild(newPost);
            newPostContainer.appendChild(newPostDateContainer);
            newPostDateContainer.appendChild(newPostCalendar);
            newPostDateContainer.appendChild(newPostDate);
            newPostContainer.appendChild(newPostTitle);
            newPostContainer.appendChild(newPostText);
            newPostContainer.appendChild(newPostButtonContainer);
            newPostButtonContainer.appendChild(newPostReadMore);
        }
    });
} else {
    $.getJSON('https://sheetdb.io/api/v1/sn4bwy4h5v3t1', function (news_posts) {
        // looks through news database displaying each one
        for (let i = news_posts.length - 1; i >= news_posts.length - 6; i--) {
            // creates new news post
            let newPostContainer = document.createElement("div");
            let newPost = document.createElement("div");
            let newPostDateContainer = document.createElement("h4");
            let newPostCalendar = document.createElement("i");
            let newPostDate = document.createElement("span");
            let newPostTitle = document.createElement("h3");
            let newPostText = document.createElement("p");

            newPostContainer.classList.add("post-container");
            newPostContainer.setAttribute("id", i);

            // creates news post image
            newPost.classList.add("post");
            newPost.setAttribute("id", "post_" + i);
            newPost.style.backgroundImage = "url(" + news_posts[i].img_src + ")";

            // creates news post date
            newPostCalendar.classList.add("fa-solid");
            newPostCalendar.classList.add("fa-calendar-days");
            newPostDate.setAttribute("id", i);
            newPostDate.innerText = news_posts[i].post_date;

            // creates news post title
            newPostTitle.classList.add("post-title");
            newPostTitle.setAttribute("id", i);
            newPostTitle.innerText = news_posts[i].post_title;

            // creates news post text and date
            newPostText.classList.add("post-txt");
            newPostText.setAttribute("id", i);
            newPostText.innerHTML = news_posts[i].post_txt;

            // adds post elements to posts container
            postSection.appendChild(newPostContainer);
            newPostContainer.appendChild(newPost);
            newPostContainer.appendChild(newPostDateContainer);
            newPostDateContainer.appendChild(newPostCalendar);
            newPostDateContainer.appendChild(newPostDate);
            newPostContainer.appendChild(newPostTitle);
            newPostContainer.appendChild(newPostText);
        }
    });
}
