window.onload = function () {
	var musicDom = document.getElementById("play");
	// musicDom.onclick = function(){
	// 	var _className = this.className;
	// 	var _playState = this.style.animationPlayState;
	// 	if(_playState == "running"){
	// 		//this.setAttribute("class","");
	// 		this.style.animationPlayState = "paused";
	// 	}else{
	// 		//this.setAttribute("class","play");
	// 		this.style.animationPlayState = "running";
	// 	}
	// }
	musicDom.addEventListener("touchstart",function(){
		var _className = this.className;
		var _playState = this.style.animationPlayState;
		if(_playState == "running"){
			//this.setAttribute("class","");
			this.style.animationPlayState = "paused";
		}else{
			//this.setAttribute("class","play");
			this.style.animationPlayState = "running";
		}
	},false);
}