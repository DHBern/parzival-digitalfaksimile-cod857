var imageLeft;
var imageRight;

window.addEventListener('load', function() {
	imageLeft = document.getElementById("imageLeft");
	imageRight = document.getElementById("imageRight");
	imageLeft.src = '../../cod857bilder/D150/D301.jpg';
	imageRight.src = '../044_100/044_001r.jpg';

	// load frame2fram communication
	loadMessageListener();
});

function loadMessageListener() {
	// Listen for messages from the frames (onclick on link to change images)
	window.addEventListener("message", function(event) {
  		if (event.origin === "https://parzival.unibe.ch") {
        	if (event.data.source === 'leftTransFrame' ) {
        		imageLeft.src = event.data.data;
        		
        	}
    	if (event.data.source === 'rightTransFrame' ) {
        	if (!imageRight){return;}
        		imageRight.src = event.data.data;
        	}	
    	}
	});
}


