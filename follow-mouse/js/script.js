
var dist_per_frame =0;
//make counter/timer variable to count how many times that move a bit is run
var timer_counter = 0;
//set up a name for our movetimer so we can use in multiple functions
var movetimer;

onload = init;

function init(){
		makeOneMove();//this puts a single circle on the screen.
		//when user clicks anywhere, start moving towards that point.
		document.onclick = 
			function(evt){
				causeTrip(evt);	
			}
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
		/*setInterval(function(){moveABit()},1000/30);*/
	}
		
	function causeTrip(evt){
		evt = (evt||event);
		//variable that will store the high and low position of the mouse.
		var destination_y = evt.clientY;
		/*var newc = document.getElementsByTagName("div")[0].style.top = destination_y + "px";*/	
		//store the overall distance to get circle to where mouse is.
		var y_distance = destination_y - parseInt(document.getElementsByTagName("div")[0].style.top);
		//store how far it should move to get partway to the mouse.
		dist_per_frame = y_distance/30;
		
		clearInterval(movetimer);	
		timer_counter = 0;
		
		movetimer = setInterval(function(){moveABit()},1000/30);
	}//closes function causeTrip
	
	
	
	function moveABit(){
		var newc = document.getElementsByTagName("div")[0];
			/*console.log(newc.style.top);*/
		newc.style.top = (parseInt(newc.style.top) + dist_per_frame)+"px";
			//command to stop this function after it has performed 30 times(clear the interval)
		timer_counter++;
		if(timer_counter > 30){
			clearInterval(movetimer);	
			timer_counter = 0;		
		}
	}
	
	
	/*this function moves the circle towards the point where the mouse is
	**	@param 	evt the mouse event. gives us mouse coordinates
	*/
	
	