function checkVers() {

eingabe = document.form1.Vers.value;
vers = parseFloat(eingabe);
if (vers > 1141) {alert("Der letzte Vers von 'Kindheit Jesu' ist 1141"); document.form1.Vers.value=""; return;}

if (vers >=397 && vers <= 404) {alert("Die Verse 397 - 404 fehlen.\nEin Verzeichnis der fehlenden Verse befindet sich in der Info-Datei.")}
if (vers >=715 && vers <= 718) {alert("Die Verse 715 - 718 fehlen.\nEin Verzeichnis der fehlenden Verse befindet sich in der Info-Datei.")}
if (vers >=1053 && vers <= 1056) {alert("Die Verse 1053 - 1056 fehlen.\nEin Verzeichnis der fehlenden Verse befindet sich in der Info-Datei.")}
if (vers >=1091 && vers <= 1098) {alert("Die Verse 1091 - 1098 fehlen.\nEin Verzeichnis der fehlenden Verse befindet sich in der Info-Datei.")}


if (vers =="" || isNaN(vers) == true || vers == "null" || vers == 0) {
		document.form1.Vers.value="";
		}

if (vers>=1 && vers<=58) {curSlide=694; spalte="a"; showSlide();}
if (vers>=59 && vers<=114) {curSlide=694; spalte="b"; showSlide();}
if (vers>=115 && vers<=175) {curSlide=695; spalte="a"; showSlide();}
if (vers>=176 && vers<=236) {curSlide=695; spalte="b"; showSlide();}
if (vers>=237 && vers<=296) {curSlide=696; spalte="a"; showSlide();}
if (vers>=297 && vers<=348) {curSlide=696; spalte="b"; showSlide();}
if (vers>=349 && vers<=411) {curSlide=697; spalte="a"; showSlide();}
if (vers>=412 && vers<=472) {curSlide=697; spalte="b"; showSlide();}
if (vers>=473 && vers<=520) {curSlide=698; spalte="a"; showSlide();}
if (vers>=521 && vers<=558) {curSlide=698; spalte="b"; showSlide();}
if (vers>=559 && vers<=614) {curSlide=699; spalte="a"; showSlide();}
if (vers>=615 && vers<=672) {curSlide=699; spalte="b"; showSlide();}
if (vers>=673 && vers<=738) {curSlide=700; spalte="a"; showSlide();}
if (vers>=739 && vers<=788) {curSlide=700; spalte="b"; showSlide();}
if (vers>=789 && vers<=842) {curSlide=701; spalte="a"; showSlide();}
if (vers>=843 && vers<=904) {curSlide=701; spalte="b"; showSlide();}
if (vers>=905 && vers<=963) {curSlide=702; spalte="a"; showSlide();}
if (vers>=964 && vers<=1007) {curSlide=702; spalte="b"; showSlide();}
if (vers>=1008 && vers<=1071) {curSlide=703; spalte="a"; showSlide();}
if (vers>=1072 && vers<=1141) {curSlide=703; spalte="b"; showSlide();}

}
