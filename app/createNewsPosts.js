
const postSection = document.getElementById("posts");

// FETCHES JSON FROM DATABASE 

if (document.title == 'Truth Tabernacle of Granite City') {
    $.getJSON('https://sheetdb.io/api/v1/sn4bwy4h5v3t1', function (blog_posts) {
        // looks through news database displaying each one
        for (let i = blog_posts.length - 1; i >= blog_posts.length - 3; i--) {
            // creates new news post
            let newPostContainer = document.createElement("div");
            let newPost = document.createElement("div");
            let newPostTitle = document.createElement("h3");
            let newPostText = document.createElement("p");
            let newPostReadMore = document.createElement("a");
            let newPostButtonContainer = document.createElement("div");

            newPostContainer.classList.add("post-container");
            newPostContainer.setAttribute("id", "post_" + i);

            // creates news post image
            newPost.classList.add("post");
            newPost.setAttribute("id", i);
            newPost.style.backgroundImage = "url(" + blog_posts[i].img_src + ")";

            // creates news post title
            newPostTitle.classList.add("post-title");
            var newPostTitleInnerText = blog_posts[i].post_title;
            if (newPostTitleInnerText.length > 45) {
                newPostTitleInnerText = newPostTitleInnerText.substring(0, 45);
                newPostTitleInnerText = newPostTitleInnerText + "..."
            }
            newPostTitle.setAttribute("id", i);
            newPostTitle.innerText = newPostTitleInnerText;

            // creates news post text and date
            newPostText.classList.add("post-txt");
            var newPostInnerText = blog_posts[i].post_txt;
            if (newPostInnerText.length > 200) {
                newPostInnerText = newPostInnerText.substring(0, 200);
                newPostInnerText = newPostInnerText + "..."
            }
            newPostText.setAttribute("id", i);
            newPostText.innerHTML = newPostInnerText + blog_posts[i].post_date;

            newPostReadMore.innerText = "Read More";
            newPostReadMore.classList.add("post-read-more");
            newPostReadMore.href = "news.html#post_" + i;

            newPostButtonContainer.classList.add("post-read-more-container");

            // adds post elements to posts container
            postSection.appendChild(newPostContainer);
            newPostContainer.appendChild(newPost);
            newPost.appendChild(newPostTitle);
            newPostContainer.appendChild(newPostText);
            newPostContainer.appendChild(newPostButtonContainer);
            newPostButtonContainer.appendChild(newPostReadMore);
        }
    });
} else {
    $.getJSON('https://sheetdb.io/api/v1/sn4bwy4h5v3t1', function (blog_posts) {
        // looks through news database displaying each one
        for (let i = blog_posts.length - 1; i >= blog_posts.length - 6; i--) {
            // creates new news post
            let newPostContainer = document.createElement("div");
            let newPost = document.createElement("div");
            let newPostTitle = document.createElement("h3");
            let newPostText = document.createElement("p");

            newPostContainer.classList.add("post-container");
            newPostContainer.setAttribute("id", i);

            // creates news post image
            newPost.classList.add("post");
            newPost.setAttribute("id", "post_" + i);
            newPost.style.backgroundImage = "url(" + blog_posts[i].img_src + ")";

            // creates news post title
            newPostTitle.classList.add("post-title");
            newPostTitle.setAttribute("id", i);
            newPostTitle.innerText = blog_posts[i].post_title;

            // creates news post text and date
            newPostText.classList.add("post-txt");
            newPostText.setAttribute("id", i);
            newPostText.innerHTML = blog_posts[i].post_txt + blog_posts[i].post_date;

            // adds post elements to posts container
            postSection.appendChild(newPostContainer);
            newPostContainer.appendChild(newPost);
            newPost.appendChild(newPostTitle);
            newPostContainer.appendChild(newPostText);
        }
    });
}
