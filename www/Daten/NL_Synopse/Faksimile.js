var geladeneSeiteav5;
var geladeneSeiteFr44;
var imgRightSrc;
var imgLeftSrc;


document.addEventListener("DOMContentLoaded", function() {
	setLinks();
});

function setLinks() {
	const faksimileNLav5Links = document.querySelectorAll('.faksimileNLav5');
	faksimileNLav5Links.forEach(function(faksimileNLav5) {
    	faksimileNLav5.style.cursor = "pointer";
    });
	
    document.addEventListener("click", function(event) {
        const faksimileNLav5 = event.target.closest('.faksimileNLav5');
        if (faksimileNLav5) {
        	geladeneSeiteav5 = faksimileNLav5.getAttribute("data");
        	sendFaksimileNLav5(geladeneSeiteav5);
           }
    });

	const faksimileFr44Links = document.querySelectorAll('.faksimileFr44');
	faksimileFr44Links.forEach(function(faksimileLink) {
    	faksimileLink.style.cursor = "pointer";
    });
	
    document.addEventListener("click", function(event) {
        const faksimileFr44 = event.target.closest('.faksimileFr44');
        if (faksimileFr44) {
        	geladeneSeiteFr44 = faksimileFr44.getAttribute("data");
        	sendFaksimileFr44(geladeneSeiteFr44);
           }
    });
}


function sendFaksimileNLav5(seite) {
	sendLeftImage('../../cod857bilder/D150/D' + seite + '.jpg');
}


function sendFaksimileFr44(seite) {
	sendRightImage('../044_100/044_00' + seite + '.jpg');
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

function loadFaksimileNLav5_del(seite) {
	if (geladeneSeiteav5 != seite) {

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
		statusZeileNLav5(seite);
		geladeneSeiteav5 = seite;
	}
}


function loadFaksimileFr44_del(seite) {
	if (geladeneSeiteFr44 != seite) {

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
			bildURL= relPfad2 + "/044_100/044_" + zusatz + seite + ".jpg";
		} else {
			bildURL="../044_100/044_" + zusatz + seite + ".jpg";
		}
    	console.log('existing page');
    	console.log(bildURL);

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
		statusZeileFr44(seite);	
		geladeneSeiteFr44 = seite;
	}
}

function faksimileNL_del(seite) {

var Pfad=self.document.URL
if (Pfad.search(/http:/)!=-1) {
	var lastSlash=Pfad.lastIndexOf("/")
	var relPfad1=Pfad.substring(0,lastSlash)
	lastSlash=relPfad1.lastIndexOf("/")
	var relPfad2=relPfad1.substring(0,lastSlash)
	lastSlash=relPfad2.lastIndexOf("/")
	var relPfad3=relPfad2.substring(0,lastSlash)
	bildURL= relPfad3 + "/cod857bilder/D150/D" + seite + ".jpg";
	}
else {bildURL="../../cod857bilder/D150/D" + seite + ".jpg";}

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
parent.frames['rechts'].document.open();
parent.frames['rechts'].document.write(content);
parent.frames['rechts'].document.close();
statusZeileNL(seite);
}

function statusZeileNLav5(seite) {
window.defaultStatus="Unten links: St. Gallen, Stiftsbibl., Cod. 857, Seite " + seite; 
window.status="Unten links: St. Gallen, Stiftsbibl., Cod. 857, Seite " + seite; 
return true;	
}

function statusZeileFr44(seite) {
var curStatus=window.status;
var rechtsStatus = "Unten rechts: Berlin, Staatsbibl., Fragm. 44, Bl. " + seite; 
window.defaultStatus = curStatus + "     " + rechtsStatus;
window.status = curStatus + "     " + rechtsStatus;
return true;	
}