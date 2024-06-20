 
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

var curSlide = "416"
var Zusatz = "";
var werk = "Klage";
var oesz=unescape("%F6%DF");
var bildgrAng = "(proportionale Bildgr" + oesz + "e)";
var standardAnsicht="";

NLInitialen = new Array("291_1","291_2","292","296","302","305","307","311","313","316","321","323","326","327","330","332","337","342","345","353","356","359","360","365","369","376","378","381","383","387","389","392","393","396","400","406","411")

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
	
	else {curSlide = "416"}
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

if (curSlide==416) {
window.location.href="InitKarl.html?452&" + standardAnsicht;
}

for (var i=0; i < NLInitialen.length; ++i)
	if (curSlide==NLInitialen[i]) {
	var j = i+1;
	curSlide=NLInitialen[j];
	showSlide();
	break;
	}
}


function goPrev() {

if (curSlide=="416") {
window.location.href="InitNibelungen.html?411&" + standardAnsicht;
}

for (var i=0; i < NLInitialen.length; ++i)
	if (curSlide==NLInitialen[i] && curSlide!=NLInitialen[0]) {
	var j = i-1;
	curSlide=NLInitialen[j];
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
window.location.href = "../klage.html?" + parseInt(curSlide) + "&100";
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