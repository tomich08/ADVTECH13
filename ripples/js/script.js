
//rippling click activity.
//languages offer other useful events than onclick

document.onmousemove = 
	function(evt){
		makeOneCircle(evt);
	}
	
/*document.onclick = 
	function(evt){
		makeOneCircle(evt);
	}*/

	function makeOneCircle(evt){
		evt = (evt||event)
		//makes all browsers understand the event
		//make a new circle
		var newc = document.createElement("div");
		newc.style.height = "50px";
		newc.style.width = "50px";
		newc.style.opacity = "1";
		newc.style.borderRadius = "50px";
		newc.style.border = "solid 2px #009";
		newc.style.position = "absolute";
		newc.style.transition = "width .2s ease-out, height .2s ease-out, opacity .2s ease-out";
		newc.style.webkitTransition = "width .2s ease-out, height .2s ease-out, opacity .2s ease-out";
		//set location of the new div to where the mouse is
		newc.style.left = evt.clientX+"px";
		newc.style.top = evt.clientY+"px";
		//add "body" below
		document.body.appendChild(newc);
		//set timeout causes a function to happen after a number of milliseconds.
		setTimeout(function(){
			newc.style.height = "150px";
			newc.style.width = "150px";
			newc.style.opacity = "0";
			newc.style.borderRadius = "75px";
		},0);
	}