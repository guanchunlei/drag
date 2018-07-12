window.onload = function(){

var box = document.getElementById("box");
darg(box);
function darg (obj){

	obj.onmousedown =function(ev){
	var ev = ev ||event;
	// console.log(ev);
	 var disx = ev.clientX -this.offsetLeft;
	 var disy = ev.clientY - this.offsetTop;
	 if ( obj.setCapture ) {
				obj.setCapture();
			}
			
	// var w1 = document.documentElement.clientWidth;
	// var h1 = document.documentElement.clientHeight;
	// console.log(w1 ,h1);
	// console.log(disx , disy);

	 document.onmousemove= function(ev){

		var ev = ev||event;
		var l =ev.clientX -disx;
		var t = ev.clientY -disy;

		if(l<0){
			l=0
		}else if(l>document.documentElement.clientWidth -obj.offsetWidth){

				l=document.documentElement.clientWidth -obj.offsetWidth;
		}
		if(t<0){
			t=0;
		}else if(t>document.documentElement.clientHeight - obj.offsetHeight){
			t=document.documentElement.clientHeight -obj.offsetHeight;
		}

		obj.style.left = l +"px";
		obj.style.top = t + "px";

	  } 
	  document.onmouseup = function() {
				document.onmousemove = document.onmouseup = null;
				if ( obj.releaseCapture ) {
					obj.releaseCapture();
				}
			}



		return false;		
   }
}



}