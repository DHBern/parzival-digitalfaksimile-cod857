var geladeneSeiteD;
var geladeneSeiteA;
var imgRightSrc;
var imgLeftSrc;

document.addEventListener("DOMContentLoaded", function() {
	setLinks();
});

function setLinks() {
	const faksimilePZDLinks = document.querySelectorAll('.faksimilePZD');
	faksimilePZDLinks.forEach(function(f) {
    	f.style.cursor = "pointer";
    });
	
    document.addEventListener("click", function(event) {
        const f = event.target.closest('.faksimilePZD');
        if (f) {
        	geladeneSeiteD = f.getAttribute("data");
        	// loadFaksimileNLav5(geladeneSeiteav5);
        	sendFaksimileD(geladeneSeiteD);
           }
    });

	const faksimileLinksA = document.querySelectorAll('.faksimileLinkA');
	faksimileLinksA.forEach(function(faksimileLink) {
    	faksimileLink.style.cursor = "pointer";
    });
	
    document.addEventListener("click", function(event) {
        const faksimileLinkA = event.target.closest('.faksimileLinkA');
        if (faksimileLinkA) {
        	geladeneSeiteA = faksimileLinkA.getAttribute("data");
        	// loadFaksimileFr44(geladeneSeiteFr44);
        	sendFaksimileA(geladeneSeiteA);
           }
    });
}


function sendFaksimileD(seite) {
	sendLeftImage('../../cod857bilder/D150/D' + seite + '.jpg');
}


function sendFaksimileA(seite) {
	sendRightImage('../001_150/001_00' + seite + '.jpg');
}

// send the image to the parent html
function sendRightImage(imgSrc) {
	if (!imgSrc || imgRightSrc === imgSrc) { return; } //guard
	imgRightSrc = imgSrc;
	const message = {
    	source: 'rightTransFrame',
    	data: imgRightSrc
    };
	// send to synopse
  	window.parent.postMessage(message, 'https://parzival.unibe.ch');
}

// send the image to the parent html
function sendLeftImage(imgSrc) {
	if (!imgSrc || imgLeftSrc === imgSrc) { return; } //guard
	imgLeftSrc = imgSrc;
	const message = {
    	source: 'leftTransFrame',
    	data: imgLeftSrc
    };
	// send to synopse
  	window.parent.postMessage(message, 'https://parzival.unibe.ch');
}


function faksimilePZ(seite) {
	if (geladeneSeitePZ != seite) {

		var Pfad=self.document.URL
		if (Pfad.search(/http:/)!=-1) {
			var lastSlash=Pfad.lastIndexOf("/")
			var relPfad1=Pfad.substring(0,lastSlash)
			lastSlash=relPfad1.lastIndexOf("/")
			var relPfad2=relPfad1.substring(0,lastSlash)
			lastSlash=relPfad2.lastIndexOf("/")
			var relPfad3=relPfad2.substring(0,lastSlash)
			bildURL= relPfad3 + "/cod857bilder/D150/D" + seite + ".jpg";
		} else {
			bildURL="../../cod857bilder/D150/D" + seite + ".jpg";
		}

		var content='<html>'
		content+='\n<head>'
		content+='<title>St. Gallen, Stiftsbibliothek, Cod. 857, S. ' + seite + '</title>'
		content+='\n<script type="text/javascript">'
		content+='\n'
		content+='\nfunction Vollbild() {'
		content+='\n'
		content+='\nvar content2=\'<html><body marginwidth=\"0\" marginheight=\"0\" topmargin=\"0\" leftmargin=\"0\"><img src=\"' + bildURL + '\" onClick=\"self.close()\"></body></html>\''
		content+='\nvar breite=screen.availWidth;'
		content+='\nvar hoehe=screen.availHeight;'
		content+='\nvar ff=window.open("","","width=breite,height=hoehe,scrollbars,resizable,")'
		content+='\nff.document.open()'
		content+='\nff.document.write(content2)'
		content+='\nff.document.close()'
		content+='\n}'
		content+='\n</script>'
		content+='\n'
		content+='\n'
		content+='\n</head>'
		content+='\n<body>'
		content+='\n<img src="' + bildURL + '"'
		content+=' onClick="Vollbild()">'
		content+='\n</body>'
		content+='\n</html>';
		top.frames['untenlinks'].document.open();
		top.frames['untenlinks'].document.write(content);
		top.frames['untenlinks'].document.close();
		statusZeilePZ(seite);
		geladeneSeitePZ = seite;
	}
}


function faksimileFr1(seite) {
	if (geladeneSeiteA != seite) {

		var zusatz="";
		if (parseFloat(seite) < 10) {zusatz="00"}
		if (parseFloat(seite) >=10 && parseFloat(seite) < 100) {zusatz="0"}
		if (parseFloat(seite) >= 100) {zusatz=""}

		var Pfad=self.document.URL
		if (Pfad.search(/http:/)!=-1) {
			var lastSlash=Pfad.lastIndexOf("/")
			var relPfad1=Pfad.substring(0,lastSlash)
			lastSlash=relPfad1.lastIndexOf("/")
			var relPfad2=relPfad1.substring(0,lastSlash)
			bildURL= relPfad2 + "/001_150/001_" + zusatz + seite + ".jpg";
		} else {
			bildURL="../001_150/001_" + zusatz + seite + ".jpg";
		}

		var content='<html>'
		content+='\n<head>'
		content+='<title>St. Gallen, Stiftsbibliothek, Cod. 857, S. ' + seite + '</title>'
		content+='\n<script type="text/javascript">'
		content+='\n'
		content+='\nfunction Vollbild() {'
		content+='\n'
		content+='\nvar content2=\'<html><body marginwidth=\"0\" marginheight=\"0\" topmargin=\"0\" leftmargin=\"0\"><img src=\"' + bildURL + '\" onClick=\"self.close()\"></body></html>\''
		content+='\nvar breite=screen.availWidth;'
		content+='\nvar hoehe=screen.availHeight;'
		content+='\nvar ff=window.open("","","width=breite,height=hoehe,scrollbars,resizable,")'
		content+='\nff.document.open()'
		content+='\nff.document.write(content2)'
		content+='\nff.document.close()'
		content+='\n}'
		content+='\n</script>'
		content+='\n'
		content+='\n'
		content+='\n</head>'
		content+='\n<body>'
		content+='\n<img src="' + bildURL + '"'
		content+=' onClick="Vollbild()">'
		content+='\n</body>'
		content+='\n</html>';
		top.frames['untenrechts'].document.open();
		top.frames['untenrechts'].document.write(content);
		top.frames['untenrechts'].document.close();
		statusZeileFr1(seite);
		geladeneSeiteFr1 = seite;
	}
}

function statusZeilePZ(seite) {
window.defaultStatus="Unten links: St. Gallen, Stiftsbibl., Cod. 857, Seite " + seite; 
window.status="Unten links: St. Gallen, Stiftsbibl., Cod. 857, Seite " + seite; 
return true;	
}

function statusZeileFr1(seite) {
var curStatus=window.status;
var rechtsStatus = "Unten rechts: Wien, �sterr. Nationalbibl., Cod. 13070, Bl. " + seite; 
window.defaultStatus = curStatus + "     " + rechtsStatus;
window.status = curStatus + "     " + rechtsStatus;
return true;	
}