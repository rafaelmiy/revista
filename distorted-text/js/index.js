(function () {
  window.addEventListener('load', function () {		
		var word = "FAMILY INC",
			i = 0,
			distortNum = 15,
			clipHeightJitter = 50,
			wordOffsetJitter = 22,
			stopLock = true,
			progressingNum = 0,
			logNum = 100000,
			direction = Math.random() > 0.5 ? "" : "-";
		
		document.body.innerHTML += "<div id=\"distortMe\">";	
		var distortDiv = document.getElementById("distortMe");
	 	
		for(i; i < distortNum; i++) {

			var jit = getRandomInt(0, clipHeightJitter),
				distortNumHalf = distortNum/2;
		
			progressingNum = (Math.round(getBaseLog(i, logNum)) * 3);
			
			if (i > distortNumHalf && stopLock) {
				
				newDirection = Math.random() > 0.5 ? "" : "-";
				
				if (newDirection != direction) {
					stopLock = false;
					direction = newDirection;
				} 
					
			}
			
			var nextToLast = distortNum - i;
			 
			if(nextToLast == 1) {
				distortDiv.innerHTML += "<div class=\"distortOut\"><p class=\"distorted\" style=\"position:relative; top: -30px; left:"+direction+progressingNum+"px;height:" + clipHeightJitter + "px\">" + word + "</p></div>";
			} else {
				distortDiv.innerHTML += "<div class=\"distortOut\"><p class=\"distorted\" style=\"position:relative; top: 0px; left:"+direction+progressingNum+"px;height:" + jit + "px\">" + word + "</p></div>";
			}
	 	}
	 	
	 	document.body.innerHTML += "</div>";
		
		function getRandomInt(min, max) {
		    return Math.floor(Math.random() * (max - min + 1)) + min;
		}
		
		function getBaseLog(x, y) {
		  return Math.log(y) / Math.log(x);
		}
	 
  });
}) ();