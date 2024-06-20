var geladeneSeite;

document.addEventListener("DOMContentLoaded", function() {
  const myBody = document.getElementById("myBody");
  const page = myBody.getAttribute("data");
  faksimileNL(page);
  setLinks();
});

// setting styles
// generic event listener for all seitenangabe elements
function setLinks() {
	const faksimileLinks = document.querySelectorAll('.faksimileNL');
	faksimileLinks.forEach(function(faksimileLink) {
    	faksimileLink.style.cursor = "pointer";
    });
	
    document.addEventListener("click", function(event) {
        const faksimileLink = event.target.closest('.faksimileNL');
        if (faksimileLink) {
        	const page = faksimileLink.getAttribute("data");
        	faksimileNL(page);
           }
    });
}

function faksimileNLav5(seite) {

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
content+='\n<body marginwidth=\"0\" marginheight=\"0\" topmargin=\"0\" leftmargin=\"0\">'
content+='\n<img src="' + bildURL + '"'
content+=' onClick="Vollbild()">'
content+='\n</body>'
content+='\n</html>';
top.frames['untenlinks'].document.open();
top.frames['untenlinks'].document.write(content);
top.frames['untenlinks'].document.close();
}


function faksimileFr44(seite) {

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
	}
else {bildURL="../044_100/044_" + zusatz + seite + ".jpg";}

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
	
}

function faksimileNL(seite) {
	//alert("faksimile; seite: " + seite + " geladene Seite: " + geladeneSeite);
	if (geladeneSeite != seite) {

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
content+='\n<body marginwidth=\"0\" marginheight=\"0\" topmargin=\"0\" leftmargin=\"0\">'
content+='\n<img src="' + bildURL + '"'
content+=' onClick="Vollbild()">'
content+='\n</body>'
content+='\n</html>';
parent.frames['rechts'].document.open();
parent.frames['rechts'].document.write(content);
parent.frames['rechts'].document.close();
statusZeileNL(seite);

	}
	geladeneSeite = seite;
}

function statusZeileNL(seite) {
window.defaultStatus="Rechts: St. Gallen, Stiftsbibl., Cod. 857, Seite " + seite; 
window.status="Rechts: St. Gallen, Stiftsbibl., Cod. 857, Seite " + seite; 
return true;
}