// Language Selector

document.getElementById("lang").onchange = function () {
	if (this.selectedIndex !== 0) {
		window.location.href = this.value;
	}
};