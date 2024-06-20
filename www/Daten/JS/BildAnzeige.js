function checkZoom() {
var links=0;
var rechts=0;
var LagenAngabe="";
var werkZusatz="";
var sz=unescape("%DF");
var spezialSeite="";
var Seite="Seite ";
var werkAnz="";
var spezLage="";
var spezLagenSymb="blind.gif";
var spezKonkordanz="";


	if (zoom==50) {
		
		if (curSlide<414) {
	
			if ((curSlide % 2)==0) {

			links = curSlide;
			rechts = curSlide + 1;
			}

			else {
			rechts = curSlide;
			links = curSlide - 1;
			}
					
		}
	
		
		
		if (curSlide>414) {
			
			if(curSlide==1456 || curSlide==1457) {zusatzSeiten(); return;}
		
			if(curSlide>708) {return;}
		
			if ((curSlide % 2)!=0) {

			var links = curSlide;
			var rechts = curSlide + 1;
			}

			else {
			rechts = curSlide;
			links = curSlide - 1;
			}
		
		}
	
		
	if (curSlide==206) {links=206; rechts=261; curSlide=links; doppelSeite=true;}
	if (curSlide==208) {links=262; rechts=263; curSlide=links; doppelSeite=true;}
	
	if (curSlide==260) {links=206; rechts=261; curSlide=links; doppelSeite=true;}
	if (curSlide==204) {links=204; rechts=205; curSlide=links; doppelSeite=true;}
	
	if(curSlide==260 || curSlide==261) {links=206; rechts=261; doppelSeite=true;}			



	if (links <= 9) {lZusatz = "00";}
	if (links > 9) {lZusatz = "0";}
	if (links > 99) {lZusatz = "";}

	if (rechts <= 9) {rZusatz = "00";}
	if (rechts > 9) {rZusatz = "0";}
	if (rechts > 99) {rZusatz = "";}
	
	
	
	checkBlattDoppelt();
	checkKonkordDoppelt();
	checkHand();
	checkLageDoppelt();
	
	var rechteSeite = rechts;
	var linkeSeite = links;	
	
	if (curSlide==703 || curSlide==704) {
	linkeSeite="703"
	rechteSeite="B'st."
	}
	
	if (curSlide==705 || curSlide==706) {
	linkeSeite="Bruchstück"
	rechteSeite="Einband innen"
	}	
	
	if (werk=="Karl") {werkZusatz=" der Gro"+sz+"e"}
	if (werk!="Karl") {werkZusatz="";}
	
	if (curSlide >= 4 && curSlide <=706) {LagenAngabe = lagenNr + ". Lage, " +lagenName;}
	
	
	if (curSlide<4 || curSlide>704) {
		
	if(curSlide==2 || curSlide==3) {spezialSeite="Einband innen / Vorsatzblatt Vorderseite";}
	if(curSlide==0 || curSlide==1) {spezialSeite="Einband au" + sz +"en (Vorderseite)";}	
	
	if(curSlide==705 || curSlide==706) {
		spezialSeite="Bruchstück / Einband innen";
		spezLage=LagenAngabe
		spezLagenSymb="LagensymboleDoppelt/Einzel1v.gif";
		spezKonkordanz="Unser vrouwen hinvart (Rückseite)";}
		
	if(curSlide==707 || curSlide==708) {spezialSeite="Einband au" + sz +"en (Rückseite)";}
		
	
	document.images["linkeSeite"].src = "../cod857bilder/D" + zoom + "/D" + lZusatz + links + ".jpg";
	document.images["rechteSeite"].src = "../cod857bilder/D" + zoom + "/D" + rZusatz + rechts + ".jpg";
	document.form1.Eingabe.value = "";
	document.getElementById('Seite').innerHTML = spezialSeite;
	document.getElementById('Konkordanz').innerHTML = spezKonkordanz;
	document.getElementById('Schreiber').innerHTML = "";
	document.getElementById('Lage').innerHTML = spezLage;
	document.images["Lagensymbol"].src = spezLagenSymb;
	
	window.defaultStatus = spezialSeite + "  |  Bildgr" + oesz +"e: " + zoom + "%";return true;
		
	doppelSeite = true;	
	}
		
	else {
	
	if(curSlide==4 || curSlide==5) {Seite=""; linkeSeite="Vorsatzblatt Rückseite "; rechteSeite=" Seite 5"}
	
	if(curSlide==703 && werk=="Unser vrouwen hinvart") {werkAnz="U. vr. hinvart";}
	if(curSlide==704 && werk=="Unser vrouwen hinvart") {werkAnz="U. vr. hinvart";}
		
	if(curSlide!=703 && curSlide!=704) {werkAnz=werk;}
	if(curSlide==703 && werk=="Kindheit Jesu") {werkAnz=werk;}
	if(curSlide==704 && werk=="Kindheit Jesu") {werkAnz=werk;}
	
	document.images["linkeSeite"].src = "../cod857bilder/D" + zoom + "/D" + lZusatz + links + ".jpg";
	document.images["rechteSeite"].src = "../cod857bilder/D" + zoom + "/D" + rZusatz + rechts + ".jpg";
	document.form1.Eingabe.value = "";
	document.getElementById('Seite').innerHTML = Seite + linkeSeite + "/" + rechteSeite + blattangabe;
	document.getElementById('Konkordanz').innerHTML = werkAnz + werkZusatz + " " + konkordanz;
	document.getElementById('Schreiber').innerHTML = schreiber;
	document.getElementById('Lage').innerHTML = lagenNr + ". Lage, " +lagenName;
	document.images["Lagensymbol"].src = "LagensymboleDoppelt/" + lagenSymb + ".gif";
	
	window.defaultStatus = Seite + linkeSeite + "/" + rechteSeite + "  |  " + werk + werkZusatz + " " + konkordanz + "  |  Bildgr" + oesz +"e: " + zoom + "%";return true;
	 
	doppelSeite = true;	
	}
	}


else {
	

	if(curSlide==1456 || curSlide==1457) {zusatzSeiten(); return;}

		if (links <= 9) {lZusatz = "00";}
		if (links > 9) {lZusatz = "0";}
		if (links > 99) {lZusatz = "";}
		
		if (curSlide <= 9) {lZusatz = "00";}
		if (curSlide > 9) {lZusatz = "0";}
		if (curSlide > 99) {lZusatz = "";}
		
		
		
		
	checkBlatt();
	checkKonkord();
	checkHand();
	checkLage();	
	
	var linkeSeite=curSlide;
	
	
	
	if (werk=="Karl") {werkZusatz=" der Gro"+sz+"e"}
	if (werk!="Karl") {werkZusatz="";}
	
	
	if (curSlide > 4 && curSlide <707) {LagenAngabe = lagenNr + ". Lage, " +lagenName;}
	
	if(curSlide<5 || curSlide>705) {
	
	if(curSlide==4) {spezialSeite="Vorsatzblatt Rückseite";}
	if(curSlide==3) {spezialSeite="Vorsatzblatt Vorderseite";}
	if(curSlide==2) {spezialSeite="Einband innen";}
	if(curSlide==0 || curSlide==1) {spezialSeite="Einband au" + sz +"en (Vorderseite)";}
	
	if(curSlide==706) {spezialSeite="Einband innen";}
	if(curSlide==707) {spezialSeite="Einband au" + sz +"en (Rückseite)";}				
	
	document.images["linkeSeite"].src = "../cod857bilder/D" + zoom + "/D" + lZusatz + curSlide + ".jpg";
	document.images["rechteSeite"].src = "blind.gif";
	document.form1.Eingabe.value = "";
	document.getElementById('Seite').innerHTML = spezialSeite;
	document.getElementById('Konkordanz').innerHTML = "";
	document.getElementById('Schreiber').innerHTML = "";
	document.getElementById('Lage').innerHTML = "";
	document.images["Lagensymbol"].src = "blind.gif";
	
	window.defaultStatus = spezialSeite + blattangabe + "  |  Bildgr" + oesz +"e: " + zoom + "%"; return true;
	
	doppelSeite = false;	
	}
	
	
	
	else {
		
	if(curSlide>703) {Seite="";}
	if(curSlide==704) {spezialSeite="Bruchstück";}
	if(curSlide==705) {spezialSeite="Bruchstück";}
	if(curSlide<=703) {spezialSeite=linkeSeite;}
	
	if(curSlide==290) {werkAnz="Parzival";}
	if(curSlide==560) {werkAnz="Willehalm"; werkZusatz="";}
	if(curSlide!=290 && curSlide!=560) {werkAnz=werk;}
	
	document.images["linkeSeite"].src = "../cod857bilder/D" + zoom + "/D" + lZusatz + curSlide + ".jpg";
	document.images["rechteSeite"].src = "blind.gif";
	document.form1.Eingabe.value = "";
	document.getElementById('Seite').innerHTML = Seite + spezialSeite + blattangabe;
	document.getElementById('Konkordanz').innerHTML = werkAnz  + werkZusatz + " " +  konkordanz;
	document.getElementById('Schreiber').innerHTML = schreiber;
	document.getElementById('Lage').innerHTML = LagenAngabe;
	document.images["Lagensymbol"].src = "Lagensymbole/" + lagenSymb + ".gif";
	
	window.defaultStatus = Seite + spezialSeite + blattangabe + "  |  " + werkAnz + werkZusatz + " " + konkordanz + "  |  Bildgr" + oesz +"e: " + zoom + "%"; return true;
	
	doppelSeite = false;
	}
	}

    
}

function zusatzSeiten() {

if(zoom==50) {
	
	links=1456;
	rechts=1457;
	
	if(curSlide==1457) {curSlide=1456;}
	
	document.images["linkeSeite"].src = "../cod857bilder/D" + zoom + "/D" + links + ".jpg";
	document.images["rechteSeite"].src = "../cod857bilder/D" + zoom + "/D" + rechts + ".jpg";
	document.form1.Eingabe.value = "";
	document.getElementById('Seite').innerHTML = "Seite 456b/456c (Bl. 199v/200r)";
	document.getElementById('Konkordanz').innerHTML = "Karl der Gro" + sz + "e 565-788";
	document.getElementById('Schreiber').innerHTML = "Schreiber VII";
	document.getElementById('Lage').innerHTML = "26. Lage, Quaternio";
	document.images["Lagensymbol"].src = "LagensymboleDoppelt/L4_3v.gif";
	
	window.defaultStatus = "Seite 456b/456c (Bl. 199v/200r)  |  Karl der Gro" +sz+ "e 565-788  |  Bildgr" + oesz +"e: " + zoom + "%"; return true;
		
	doppelSeite = true;
	konkordanz="";
	
	}	
	
	

else {
	
	
	
	checkKonkord();
	checkLage();	
	
	
	
	LagenAngabe = lagenNr + ". Lage, " +lagenName;
	
	if (werk=="Karl") {werkZusatz=" der Gro"+sz+"e"}
	werkAnz="Karl";
			
	if(curSlide==1456) {spezialSeite="Seite 456b "}
	if(curSlide==1457) {spezialSeite="Seite 456c "}
	
	if(curSlide==1456) {blattangabe="(Bl. 199v)"}
	if(curSlide==1457) {blattangabe="(Bl. 200r)"}
	
	document.images["linkeSeite"].src = "../cod857bilder/D" + zoom + "/D" + curSlide + ".jpg";
	document.images["rechteSeite"].src = "blind.gif";
	document.form1.Eingabe.value = "";
	document.getElementById('Seite').innerHTML = spezialSeite + blattangabe;
	document.getElementById('Konkordanz').innerHTML = werkAnz  + werkZusatz + " " +  konkordanz;
	document.getElementById('Schreiber').innerHTML = "Schreiber VII";
	document.getElementById('Lage').innerHTML = LagenAngabe;
	document.images["Lagensymbol"].src = "Lagensymbole/" + lagenSymb + ".gif";
	
	window.defaultStatus = spezialSeite + blattangabe + "  |  " + werkAnz + werkZusatz + " " + konkordanz + "  |  Bildgr" + oesz +"e: " + zoom + "%"; return true;
	
	doppelSeite = false;
	konkordanz="";	
	}



                                                                                   


}