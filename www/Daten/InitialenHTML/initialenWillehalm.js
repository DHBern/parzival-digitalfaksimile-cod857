
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

var curSlide = "561"
var Zusatz = "";
var werk = "Willehalm";
var oesz=unescape("%F6%DF");
var bildgrAng = "(proportionale Bildgr" + oesz + "e)";
var standardAnsicht="";

WHInitialen = new Array("561","562","577","580","590","596","606","613","621","630","639","649","662","674")

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
	
	else {curSlide = "561"}
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
		
	window.defaultStatus = "Stiftsbibliothek St. Gallen, Codex 857  |  " + werk + ", Initiale S. " + parseInt(curSlide) + " " + bildgrAng;
	return;	
		
	} else {
		
		alert("Sie verwenden den Browser " + browserName + " " + browserVer + ". Diese Anwendung ben�tigt Internet Explorer ab Version 5 oder Netscape ab Version 6");
	}
}


function goNext() {

if (curSlide==674) {
window.location.href="InitKJ.html?694&" + standardAnsicht;
}

for (var i=0; i < WHInitialen.length; ++i)
	if (curSlide==WHInitialen[i]) {
	var j = i+1;
	curSlide=WHInitialen[j];
	showSlide();
	break;
	}
}


function goPrev() {

if (curSlide=="561") {
window.location.href="InitKarl.html?541&" + standardAnsicht;
}

for (var i=0; i < WHInitialen.length; ++i)
	if (curSlide==WHInitialen[i] && curSlide!=WHInitialen[0]) {
	var j = i-1;
	curSlide=WHInitialen[j];
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
window.defaultStatus = "Stiftsbibliothek St. Gallen, Codex 857  |  " + werk + ", Initiale S. " + parseInt(curSlide) + " " + bildgrAng;
return;
}

function proportionaleGroesse(){
var clearURL=document.location.toString().substr(0,document.location.toString().indexOf("?"));
window.location.href=clearURL + "?" + curSlide + "&";
} 

function codexLaden() {
window.location.search = "";
window.location.href = "../willehalm.html?" + parseInt(curSlide) + "&100";
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
