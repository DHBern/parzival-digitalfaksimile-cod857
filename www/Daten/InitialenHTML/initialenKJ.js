 
	function TasteGedrueckt(Ereignis) {
		if (navigator.appName == "Netscape") {
			if (Ereignis.which == 37) {
				goPrev();
			}
			if (Ereignis.which == 39) {
				goNext();
			}
			 return true;
		}
		if (navigator.appName == "Microsoft Internet Explorer") {
			if (window.event.keyCode == 37) {
				goPrev();
				return true;
			} 
			if (window.event.keyCode == 39) {
				goNext();
				return true;
			}
		}
	}

	document.onkeydown = TasteGedrueckt;

var curSlide = "694"
var Zusatz = "";
var werk = "Kindheit Jesu";
var oesz = unescape("%F6%DF");
var oesz = unescape("%F6%DF");
var bildgrAng = "(proportionale Bildgr" + oesz + "e)";
var standardAnsicht="";

KJInitialen = new Array("694")

//Browser-Kompatibilit�t
if(document.all && !document.getElementById) {
    document.getElementById = function(id) {
         return document.all[id];
    }
}

function checkURLParam() {

if (window.location.search != "") { 
	param=window.location.search;
	var amp=param.indexOf("&");
	curSlide=param.substring(1,amp);
	standardAnsicht=param.substring(amp+1)
	showSlide();
	if(standardAnsicht=="s") {
	bildschirmGroesse()
	}
	return;
	}
	
	else {curSlide = "694"}
	showSlide();
	bildschirmGroesse()
	return;

}




// Browsertest
var browserName = navigator.appName;
var browserVer = parseInt(navigator.appVersion);
var browserOK = (((browserName == "Netscape") && (browserVer >= 5)) || 
	((browserName == "Microsoft Internet Explorer") && (browserVer >= 4)));

function showSlide() {
	if (browserOK) {
	
	
	if (parseInt(curSlide) <= 9) {Zusatz = "00";}
	if (parseInt(curSlide) > 9) {Zusatz = "0";}
	if (parseInt(curSlide) > 99) {Zusatz = "";}	
	
						
	document.images["Initiale"].src = "../InitialenMax/" + Zusatz + curSlide + "i.jpg";
	document.getElementById('Seite').innerHTML = werk + ", Initiale S. " + parseInt(curSlide) + " " + bildgrAng;
		
	window.defaultStatus = "Berlin, Staatsbibl., mgf 1021  |  " + werk + ", Initiale S. " + parseInt(curSlide) + " " + bildgrAng;
	return;	
		
	} else {
		// show an error message for older browsers
		alert("Sie verwenden den Browser " + browserName + " " + browserVer + ". Diese Anwendung ben�tigt Internet Explorer ab Version 5 oder Netscape ab Version 6");
	}
}


function goNext() {

if (curSlide==694) {
alert("Keine weiteren Initialen.");
return;
}

for (var i=0; i < KJInitialen.length; ++i)
	if (curSlide==KJInitialen[i]) {
	var j = i+1;
	curSlide=KJInitialen[j];
	showSlide();
	break;
	}
}


function goPrev() {

if (curSlide=="694") {
window.location.href="InitWillehalm.html?674&" + standardAnsicht;
}

for (var i=0; i < KJInitialen.length; ++i)
	if (curSlide==KJInitialen[i] && curSlide!=KJInitialen[0]) {
	var j = i-1;
	curSlide=KJInitialen[j];
	showSlide();
	break;
	}

}

function bildschirmGroesse() {
var verfHoehe = (screen.availHeight) * 0.6;
document.images[1].height=verfHoehe;
bildgrAng = "(standardisierte Bildgr" + oesz + "e)";
standardAnsicht="s";
document.getElementById('Seite').innerHTML = werk + ", Initiale S. " + parseInt(curSlide) + " " + bildgrAng;
window.defaultStatus = "Berlin, Staatsbibl., mgf 1021  |  " + werk + ", Initiale S. " + parseInt(curSlide) + " " + bildgrAng;
return;
}

function proportionaleGroesse(){
var clearURL=document.location.toString().substr(0,document.location.toString().indexOf("?"));
window.location.href=clearURL + "?" + curSlide + "&";
} 

function codexLaden() {
window.location.search = "";
window.location.href = "../KJ.html?" + parseInt(curSlide) + "&100";
}


//Menu Werk w�hlen
function MM_jumpMenuDocs(){ 
window.location.href = document.form1.menu1.value;
}

//Menu Abschnitte w�hlen
function MM_jumpMenuParts(){ 
if (document.form1.menu2.value != "javascript:") {
curSlide = document.form1.menu2.value;
showSlide();
}
}