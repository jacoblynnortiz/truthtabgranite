// makes navigation menu toggle between desktop and mobile menu

function myFunction() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}

// FETCHES JSON FROM DATABASE

if (document.title == 'Truth Tabernacle of Granite City' || document.title == 'Truth Tabernacle de Granite City') {
	$.getJSON('https://sheetdb.io/api/v1/1f0b8g95rfrlf', function (sermon_posts) {
		let latestSermon = document.getElementById('latestSermon');
		let latestSermonHeader = document.createElement('h2');

		latestSermonHeader.innerText = "Watch this week's sermons";

		// this looks through the sermon posts database and gets the object in the array that is on top
		// (which is the latest sermon)

		for (let i = sermon_posts.length - 1; i >= sermon_posts.length - 3; i--) {
			latestSermon.innerHTML = sermon_posts[i--].sermon_src + sermon_posts[i--].sermon_src + sermon_posts[i--].sermon_src;
		}
	});
}

document.getElementById("lang").onchange = function () {
	if (this.selectedIndex !== 0) {
		window.location.href = this.value;
	}
};