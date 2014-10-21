
onload = init;

function init(){
		makeOneMove();
}
	


	function makeOneMove(){
		//makes all browsers understand the event
		//make a new circle
		var newc = document.createElement("div");
		newc.style.height = "50px";
		newc.style.width = "75px";
		newc.style.opacity = "1";
		newc.style.borderRadius = "50px";
		newc.style.border = "solid 2px #fff";
		newc.style.position = "absolute";
		//set location of the new div to where the mouse is
		newc.style.left = "50px";
		newc.style.top = "50px";
		//add "body" below
		document.body.appendChild(newc);
		//set timeout causes a function to happen after a number of milliseconds.
		setInterval(function(){moveABit()},1000/30);
		
		function moveABit(){
			var newc = document.getElementsByTagName("div")[0];
			console.log(newc.style.top);
			newc.style.top = (parseInt(newc.style.top) +5)+"px";
			/*newc.left = "150px";
			newc.style.opacity = "0.5";	*/
		}
	}
	
	/*this function moves the div a little and when repeated it appears to be an animation*/
	
