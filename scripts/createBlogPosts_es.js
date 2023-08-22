
const postSection = document.getElementById("posts");

// FETCHES JSON FROM DATABASE 

    if(document.title == 'Truth Tabernacle de Granite City') {
        $.getJSON('https://sheetdb.io/api/v1/sd8koklkibnt0', function(blog_posts) {
            for (let i = blog_posts.length - 1; i >= blog_posts.length - 3; i--) {
                // creates new post elements
                let newPostContainer = document.createElement("div");
                let newPost = document.createElement("img");
                let newPostText = document.createElement("p");
        
                newPostContainer.classList.add("post-container");
                newPostContainer.setAttribute("id", i);
            
                newPost.classList.add("post");
                newPost.setAttribute("id", i);
                newPost.src = blog_posts[i].img_src;
        
                newPostText.classList.add("post-txt");
                newPostText.setAttribute("id", i);
                newPostText.innerHTML = blog_posts[i].post_txt + blog_posts[i].post_date;
            
                // adds post elements to posts container
                postSection.appendChild(newPostContainer);
                newPostContainer.appendChild(newPost);
                newPostContainer.appendChild(newPostText);
            }
        });
    } else {
    $.getJSON('https://sheetdb.io/api/v1/sd8koklkibnt0', function(blog_posts) {
        for (let i = blog_posts.length - 1; i >= blog_posts.length - 6; i--) {
            // creates new post elements
            let newPostContainer = document.createElement("div");
            let newPost = document.createElement("img");
            let newPostText = document.createElement("p");
    
            newPostContainer.classList.add("post-container");
            newPostContainer.setAttribute("id", i);
        
            newPost.classList.add("post");
            newPost.setAttribute("id", i);
            newPost.src = blog_posts[i].img_src;
    
            newPostText.classList.add("post-txt");
            newPostText.setAttribute("id", i);
            newPostText.innerHTML = blog_posts[i].post_txt + blog_posts[i].post_date;;
        
            // adds post elements to posts container
            postSection.appendChild(newPostContainer);
            newPostContainer.appendChild(newPost);
            newPostContainer.appendChild(newPostText);
        }
    });
    }
    