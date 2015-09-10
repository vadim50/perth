
var link = document.querySelector(".navigation");
var popup = document.querySelector(".surprize");
var close = document.querySelector(".show-btn");

 link.addEventListener("click", function(event) {
event.preventDefault();
    popup.classList.add("surprize-show");

});
	 close.addEventListener("click",function(event) {
		 event.preventDefault();
		 popup.classList.remove("surprize-show");
	});
