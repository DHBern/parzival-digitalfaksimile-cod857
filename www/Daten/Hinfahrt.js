var zoom = 50;
var lZusatz = "00";
var rZusatz = "00";
var werk = "Unser vrouwen hinvart";
var links = 0;
var rechts = 0;
var doppelSeite = true; 
var spalte = "";
var schreiber = "";
var lagenNr = "";
var lagenSymb = "";
var lagenName = "";
var oesz=unescape("%F6%DF");


window.addEventListener('load', function() {
  setListeners();
});

function setListeners() {

	infoButton = document.getElementById('infoButton');
	infoButton.addEventListener("click", function() {
    	if (curSlide === 707) {
        	infoFenster('info/infoEinbandHinten.html');
        } else {
  			infoFenster('info/infoHinvart.html');
        }
	});

	backButton = document.getElementById('prevButton');
	backButton.addEventListener('click', goPrev);

	nextButton = document.getElementById('nextButton');
	nextButton.addEventListener('click', goNext);

	button150 = document.getElementById('button150');
	button150.addEventListener('click', zoom150);

	button100 = document.getElementById('button100');
	button100.addEventListener('click', zoom100);

	button50 = document.getElementById('button50');
	button50.addEventListener('click', zoom50);

	werkSelect = document.getElementById("werkSelect");
	werkSelect.addEventListener("change", MM_jumpMenuDocs);


	blattEingabe = document.getElementById("blattEingabe");
	blattEingabe.addEventListener("keypress", function(event) {
  		if (event.key === "Enter") {
    		submitenter(blattEingabe, event);
  		}
	});

	blattFindenButton = document.getElementById('blattFindenButton');
	blattFindenButton.addEventListener("click", function() {
  		goPage();
	});

	prevButton2 = document.getElementById('prevButton2');
	prevButton2.addEventListener('click', goPrev);

	nextButton2 = document.getElementById('nextButton2');
	nextButton2.addEventListener('click', goNext);

	linkeSeite = document.getElementById('linkeSeite');
	linkeSeite.addEventListener("click", function() {
  		checkInitiale('links');
	});

	rechteSeite = document.getElementById('rechteSeite');
	rechteSeite.addEventListener("click", function() {
  		checkInitiale('rechts');
	});	

	checkURLParam(werk);
}

// Absenden mit Enter (Seite)
function submitenter(myfield,e)
{
var keycode;
if (window.event) keycode = window.event.keyCode;
else if (e) keycode = e.which;
else return true;

if (keycode == 13)
   {
   	seitenEingabe = document.form1.Eingabe.value;
   	
   		if(!window.seitenEingabe) {return;}
				
		if(seitenEingabe=="456b") {
		window.location.href="karl.html?" + 1456 + "&" + zoom;
		return false;
		}
		
		if(seitenEingabe=="456c") {
		window.location.href="karl.html?" + 1457 + "&" + zoom;
		return false;
		}
		
		else {		
		
		while (seitenEingabe.charAt(0)=="0") {
		seitenEingabe = seitenEingabe.substring(1, seitenEingabe.length);
		}
		
		if (seitenEingabe > 206 && seitenEingabe < 261 ) {
		alert("Die Paginierung des Codex springt von Seite 206 auf Seite 261\nBitte geben Sie eine andere Seite ein.");
		document.form1.Eingabe.value="";
		return;
		}
		curSlide = parseInt(seitenEingabe);
		
		seitenEingabeAnpassen();
				
		showSlide();
   return false;
   }
   }
else
   return true;
}



//Browser-Kompatibilit�t
if(document.all && !document.getElementById) {
    document.getElementById = function(id) {
         return document.all[id];
    }
}


// Browsertest
var browserName = navigator.appName;
var browserVer = parseInt(navigator.appVersion);
var browserOK = (((browserName == "Netscape") && (browserVer >= 5)) || 
	((browserName == "Microsoft Internet Explorer") && (browserVer >= 4)));



function showSlide() {
	if (browserOK) {
				
		
		werk="Unser vrouwen hinvart";
			
		if (curSlide =="" || isNaN(curSlide) == true || curSlide == "null" || curSlide == 0) {
		document.form1.Eingabe.value="";
		return;
		}
		
		
		
		seitenEingabeAnpassen();
		
		link = document.getElementById('infoButton'); 
		
		if (curSlide>705 && zoom!=50) {document.title="St. Gallen, Stiftsbibl., Cod. 857"; document.getElementById('Titel').innerHTML ="St. Gallen, Stiftsbibl., Cod. 857"; link.href="javascript:infoFenster('info/infoEinbandHinten.html')"}
		if (curSlide>706 && zoom==50) {document.title="St. Gallen, Stiftsbibl., Cod. 857"; document.getElementById('Titel').innerHTML ="St. Gallen, Stiftsbibl., Cod. 857"; link.href="javascript:infoFenster('info/infoEinbandHinten.html')"}
		if (curSlide<=705 && zoom!=50) {document.title="Karlsruhe, Bad. Landesbibl., Cod. K 2037 - Unser vrouwen hinvart"; document.getElementById('Titel').innerHTML ="Karlsruhe, Bad. Landesbibl., Cod. K 2037"; link.href="javascript:infoFenster('info/infoHinvart.html')"}
		if (curSlide<=706 && zoom==50) {document.title="Karlsruhe, Bad. Landesbibl., Cod. K 2037 - Unser vrouwen hinvart"; document.getElementById('Titel').innerHTML ="Karlsruhe, Bad. Landesbibl., Cod. K 2037"; link.href="javascript:infoFenster('info/infoHinvart.html')"}
			
		checkWerkwechsel();
									
		checkZoom();
				
		spalte = "";
		
				
	} else {
		
			alert("Sie verwenden den Browser " + browserName + " " + browserVer + ". Diese Anwendung ben�tigt Internet Explorer ab Version 5 bzw. Netscape ab Version 7 (unter Windows) oder Camino bzw. Netscape ab Version 7 (unter Macintosh).");
	}
}



function goNext() {


	if (zoom == 50) {
	
		
		blaettern(2);
		checkSeiteUp();
		
		
	}
	
	else {
	blaettern(1);
	checkSeiteUp();
	}
	
}

function blaettern(anzSeiten) {
curSlide=curSlide + anzSeiten;
return;
}



function goPrev() {
	
	if (zoom == 50) {
	
		blaettern(-2);
		checkSeiteDown();
		
	}

	else {
	blaettern(-1)
	checkSeiteDown();
	}


}


function goPage() {
	
		seitenEingabe = document.form1.Eingabe.value;
		
		if(seitenEingabe=="456b") {
		window.location.href="karl.html?" + 1456 + "&" + zoom;
		return false;
		}
		
		if(seitenEingabe=="456c") {
		window.location.href="karl.html?" + 1457 + "&" + zoom;
		return false;
		}
		
		else {		
				
		while (seitenEingabe.charAt(0)=="0") {
		seitenEingabe = seitenEingabe.substring(1, seitenEingabe.length);
		}
		
		if (seitenEingabe > 206 && seitenEingabe < 261 ) {
		alert("Die Paginierung des Codex springt von Seite 206 auf Seite 261\nBitte geben Sie eine andere Seite ein.");
		document.form1.Eingabe.value="";
		return;
		}
		
		curSlide = parseInt(seitenEingabe);
		
		seitenEingabeAnpassen();
		
				
		showSlide();
		}
}
		

function zoom150() {
		
		if (curSlide==704 && zoom==50)
		{curSlide=703;}
		
		if (curSlide==706 && zoom==50)
		{curSlide=705;}
		
		if((curSlide==707 || curSlide==705) && zoom==50) {
		doppelSeite = false;
		}
		
		zoom = 150;
		showSlide();	
}

function zoom100() {
		
		if (curSlide==704 && zoom==50)
		{curSlide=703;}
		
		if (curSlide==706 && zoom==50)
		{curSlide=705;}
		
		if((curSlide==707 || curSlide==705) && zoom==50) {
		doppelSeite = false;
		}
				
		zoom = 100;
		showSlide();	
}

function zoom50() {
		zoom = 50;
		showSlide();	
}


function checkSeiteUp() {
		
				
		
		
		
	
showSlide();
}

function checkSeiteDown() {
		
		
		if (curSlide==701 && zoom==50) {
		window.location.href="KJ.html?703";
		curSlide=703;
		}
		
				
			
		
showSlide();
}

//Menu Werk w�hlen
function MM_jumpMenuDocs(){ 
window.location.href = document.form1.menu1.value + "&" + zoom;;

}

//Menu Abschnitte w�hlen
function MM_jumpMenuParts(){ 
if (document.form1.menu2.value != "javascript:") {
curSlide = parseInt(document.form1.menu2.value);
document.form1.menu2.selectedIndex = 0;
showSlide();
}
}
	function TasteGedrueckt(Ereignis) {
		if (navigator.appName == "Netscape") {
			if (parseInt(zoom) != 150) {
				if (Ereignis.which == 37) {
					goPrev();
				}
				if (Ereignis.which == 39) {
					goNext();
				}
			 	return true;
			}
		}
		if (navigator.appName == "Microsoft Internet Explorer") {
			if (parseInt(zoom) != 150) {
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
	}

	document.onkeydown = TasteGedrueckt;