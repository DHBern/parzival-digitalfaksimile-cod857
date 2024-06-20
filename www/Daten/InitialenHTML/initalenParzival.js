
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
<!--
var curSlide = "5_1"
var Zusatz = "00";
var werk = "Parzival";
var zweiInitialen = "";
var oesz=unescape("%F6%DF");
var bildgrAng = "(proportionale Bildgr" + oesz + "e)";
var standardAnsicht="";

PZInitialen = new Array("5_1","5_2","21","36","40","43","54","66","73","75","82","98","114","124","128","144_1","144_2","149","157","166","178","192","262","276")

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
	
	else {curSlide = "5_1"}
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
	
	if (curSlide=="5_1" || curSlide=="144_1") {zweiInitialen="1. "}
	if (curSlide=="5_2" || curSlide=="144_2") {zweiInitialen="2. "}
	if (curSlide !="5_1" && curSlide!="5_2" && curSlide!="144_1" && curSlide!="144_2") {zweiInitialen="";}
	
							
	document.images["Initiale"].src = "../InitialenMax/" + Zusatz + curSlide + "i.jpg";
	document.getElementById('Seite').innerHTML = werk + ", " + zweiInitialen + "Initiale S. " + parseInt(curSlide) + " " + bildgrAng;
		
	window.defaultStatus = "Stiftsbibliothek St. Gallen, Codex 857  |  " + werk + ", " + zweiInitialen + "Initiale S. " + parseInt(curSlide) + " " + bildgrAng;
	return;	
		
	} else {
		
		alert("Sie verwenden den Browser " + browserName + " " + browserVer + ". Diese Anwendung ben�tigt Internet Explorer ab Version 5 oder Netscape ab Version 6");
	}
}


function goNext() {

if (curSlide==276) {
window.location.href="InitNibelungen.html?291_1&" + standardAnsicht;
}

for (var i=0; i < PZInitialen.length; ++i)
	if (curSlide==PZInitialen[i]) {
	var j = i+1;
	curSlide=PZInitialen[j];
	showSlide();
	break;
	}
}


function goPrev() {


for (var i=0; i < PZInitialen.length; ++i)
	if (curSlide==PZInitialen[i] && curSlide!=PZInitialen[0]) {
	var j = i-1;
	curSlide=PZInitialen[j];
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
window.location.href = "../parzival.html?" + parseInt(curSlide) + "&100";
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