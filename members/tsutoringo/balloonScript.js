let showBalloons = document.getElementsByClassName("showBalloon");
balloonClickCallback = {
	copyID: () => {
		document.addEventListener("copy" , function(e){
			e.clipboardData.setData("text/plain" , "tsutoringo#7933");
			e.preventDefault();
			document.removeEventListener("copy", this);
		})
		document.execCommand("copy");
	}
}
for(var i=0;i<showBalloons.length;i++) {
	showBalloons[i].addEventListener("click", function() {
		balloonClickCallback[this.getAttribute("data-clickCallback")]() || void 0
		for(var ele of this.children) if(ele.classList.contains("balloon")) {
			ele.classList.add("show")
			setTimeout(() => ele.classList.remove("show"), 1000)
		}
	},false)
}