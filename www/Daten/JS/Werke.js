function checkURLParam(werk) {


if (window.location.search != "") {
			
	var param=window.location.search;
	
	if (param.search(/&/)!=-1) {
	
		var amp=param.indexOf("&");
		var param1=param.substring(1,amp)
		curSlide=parseFloat(param1);
		var param2=param.substring(amp+1)
		zoom=param2
		if (zoom!=50) {doppelSeite=false}
		document.form1.Eingabe.focus();
		showSlide();
		}
	
		else {	
		curSlide=parseFloat(param.substring(1));
		document.form1.Eingabe.focus();
		showSlide();
		}
	}

else {
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

function seitenEingabeAnpassen() {
	
	if ((curSlide % 2)!=0 && zoom==50 && curSlide>1 && curSlide<415 &&curSlide!=261) {curSlide--; return}
	if ((curSlide % 2)==0 && zoom==50 && curSlide>1 && curSlide>415) {curSlide--; return}
	else {return}
	
	}
	
function seiteAnpassen() {
	
	if ((curSlide % 2)!=0 && curSlide>1 && curSlide<415 &&curSlide!=261) {curSlide--; return}
	if ((curSlide % 2)==0 && curSlide>1 && curSlide>415) {curSlide--; return}
	else {return}
	
	}