window.addEventListener('load', function() {
  setVars();
});

var infoButton;
var backButton;
var nextButton;
var werkSelect;
var buchSelect;
var button150;
var button100;
var button50;
var verseingabeInput;
var parzivalButton;
var titurelButton;
var blattEingabe;
var blattFindenButton;

function TasteGedrueckt(Ereignis) {
    if (navigator.appName == "Netscape") {
    //zoom *= 1;
    //alert (typeof zoom);
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
    //zoom *= 1;
    //alert (typeof zoom);
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

function setVars() {
    zoom = 50;
    lZusatz = "00";
    rZusatz = "00";
    werk = "Parzival";
    links = 0;
    rechts = 0;
    doppelSeite = true;
    spalte = "";
    schreiber = "";
    lagenNr = "";
    lagenSymb = "";
    lagenName = "";
    oesz=unescape("%F6%DF");

	infoButton = document.getElementById('infoButton');
	infoButton.addEventListener("click", function() {
    	console.log(curSlide);
    	if (curSlide === 1) {
        	infoFenster('info/infoEinbandVorne.html');
        } else {
  		infoFenster('info/infoParzival.html'); }
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

	buchSelect = document.getElementById("buchSelect");
	buchSelect.addEventListener("change", MM_jumpMenuParts);

	verseingabeInput = document.getElementById("verseingabe");
	verseingabeInput.addEventListener("keypress", function(event) {
  		if (event.key === "Enter") {
    		submitenter2(verseingabeInput, event);
  		}
	});

	versFindenButton = document.getElementById('versFindenButton');
	versFindenButton.addEventListener("click", function() {
  		checkVers();
	});


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

	
	linkeSeite = document.getElementById('linkeSeite');
	linkeSeite.addEventListener("click", function() {
  		checkInitiale('links');
	});

	rechteSeite = document.getElementById('rechteSeite');
	rechteSeite.addEventListener("click", function() {
  		checkInitiale('rechts');
	});

	prevButton2  = document.getElementById('prevButton2');
	prevButton2.addEventListener('click', goPrev);

	nextButton2 = document.getElementById('nextButton2');
	nextButton2.addEventListener('click', goNext);

	checkURLParam(werk);
}

function checkURLParam(werk) {


    if (window.location.search != "") {

        var param = window.location.search;

        if (param.search(/&/) != -1) {

            var amp = param.indexOf("&");
            var param1 = param.substring(1, amp)
            curSlide = parseFloat(param1);
            var param2 = param.substring(amp + 1)
            zoom = param2
            if (zoom != 50) {
                doppelSeite = false
            }
            document.form1.Eingabe.focus();
            showSlide();
        } else {
            curSlide = parseFloat(param.substring(1));
            document.form1.Eingabe.focus();
            showSlide();
        }
    } else {
        if (werk == "Parzival") {
            curSlide = 5;
            document.form1.Eingabe.focus();
            showSlide();
        }

        if (werk == "Nibelungenlied") {
            curSlide = 290;
            document.form1.Eingabe.focus();
            showSlide();
        }

        if (werk == "Klage") {
            curSlide = 416;
            document.form1.Eingabe.focus();
            showSlide();
        }

        if (werk == "Karl") {
            curSlide = 452;
            document.form1.Eingabe.focus();
            showSlide();
        }

        if (werk == "Willehalm") {
            curSlide = 561;
            document.form1.Eingabe.focus();
            showSlide();
        }

        if (werk == "Friedrich v. Sonnenburg") {
            curSlide = 693;
            document.form1.Eingabe.focus();
            showSlide();
        }

        if (werk == "Kindheit Jesu") {
            curSlide = 693;
            document.form1.Eingabe.focus();
            showSlide();
        }

        if (werk == "Unser vrouwen hinvart") {
            curSlide = 703;
            document.form1.Eingabe.focus();
            showSlide();
        }

    }
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

        seiteAnpassen();

        showSlide();

        return false;
    }
    }
        else
        return true;
    }

    // Absenden mit Enter (Vers)
    function submitenter2(myfield,e)
    {
        var keycode;
        if (window.event) keycode = window.event.keyCode;
        else if (e) keycode = e.which;
        else return true;

        if (keycode == 13)
    {
        checkVers();
        return false;
    }
        else
        return true;
    }

    //Browser-Kompatibilität
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


    if (isNaN(curSlide) == true) {
    document.form1.Eingabe.value="";
    return;
}

    if (curSlide < 1 && zoom!=50) {
    curSlide=1;
}

    if(curSlide==3 && zoom==50) {
    curSlide=2;
}

    if(curSlide==5 && zoom==50) {
    curSlide=4;
}

    if (curSlide < 0 && zoom==50) {
    curSlide=0;
}

    if((curSlide==258 || curSlide==259) && zoom==50) {
    curSlide=204;
}

    //seitenEingabeAnpassen();

    if(curSlide==260) {curSlide=261}

    //if(zoom==50 &&curSlide==2) {curSlide=3}

    //if(zoom==50 && curSlide==261) {curSlide=260}

    link = document.getElementById('infoButton');

    if (curSlide<5 && zoom!=50) {document.title="St. Gallen, Stiftsbibl., Cod. 857"; link.href="javascript:infoFenster('info/infoEinbandVorne.html')"}
    if (curSlide<4 && zoom==50) {document.title="St. Gallen, Stiftsbibl., Cod. 857"; link.href="javascript:infoFenster('info/infoEinbandVorne.html')"}
    if (curSlide>=5 && zoom!=50) {document.title="St. Gallen, Stiftsbibl., Cod. 857 - Parzival"; link.href="javascript:infoFenster('info/infoParzival.html')"}
    if (curSlide>=4 && zoom==50) {document.title="St. Gallen, Stiftsbibl., Cod. 857 - Parzival"; link.href="javascript:infoFenster('info/infoParzival.html')"}


    checkWerkwechsel();

    checkZoom();


    spalte = "";
    document.form1.Vers.value="";


} else {

    alert("Sie verwenden den Browser " + browserName + " " + browserVer + ". Diese Anwendung benötigt Internet Explorer ab Version 5 bzw. Netscape ab Version 7 (unter Windows) oder Camino bzw. Netscape ab Version 7 (unter Macintosh).");
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

    if((curSlide>1 && zoom!=50) || (curSlide>=0 && zoom==50)) {

    if (zoom == 50) {
    blaettern(-2);
    checkSeiteDown();
}

    else {
    blaettern(-1)
    checkSeiteDown();
}
}
    else {return;}

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

    seiteAnpassen();

    showSlide();
}
}


    function zoom150() {
    if(curSlide==0) {curSlide=1;}
    if(curSlide==261 && zoom==50) {curSlide=206}
    if(zoom==50) {seiteAnpassen();}
    zoom = 150;
    showSlide();
}

    function zoom100() {
    if(curSlide==0) {curSlide=1;}
    if(curSlide==261 && zoom==50) {curSlide=206}
    if(zoom==50) {seiteAnpassen();}
    zoom = 100;
    showSlide();
}

    function zoom50() {

    if(zoom!=50) {seiteAnpassen();}

    zoom = 50;
    showSlide();
}


    function checkSeiteUp() {
    if (curSlide == 207 ) {
    curSlide = 261;
    showSlide();
}



    showSlide();
}

    function checkSeiteDown() {
    if (curSlide == 260 ) {
    curSlide = 206;
    showSlide();
}


    showSlide();
}

    //Menu Werk wählen
    function MM_jumpMenuDocs(){
    window.location.href = document.form1.menu1.value + "&" + zoom;

}

    //Menu Abschnitte wählen
    function MM_jumpMenuParts(){
    if (document.form1.menu2.value != "javascript:") {
    curSlide = parseInt(document.form1.menu2.value);
    document.form1.menu2.selectedIndex = 0;
    if ((curSlide % 2)!=0 && curSlide>1 &&curSlide!=261 && zoom==50) {curSlide--;}
    showSlide();
}
}

function seiteAnpassen() {

    if ((curSlide % 2)!=0 && curSlide>1 && curSlide<415 &&curSlide!=261) {curSlide--; return}
    if ((curSlide % 2)==0 && curSlide>1 && curSlide>415) {curSlide--; return}
    else {return}

}
