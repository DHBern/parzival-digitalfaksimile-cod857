 function checkVers() {

eingabe = document.form1.Vers.value;
vers = parseFloat(eingabe);
if (vers > 1209) {alert("'Unser Frouwen Hinvart' endet mit Vers 1209"); document.form1.Vers.value=""; return;}
if (vers < 1025) {alert("'Unser Frouwen Hinvart' beginnt mit Vers 1025"); document.form1.Vers.value=""; return;}

if (vers =="" || isNaN(vers) == true || vers == "null" || vers == 0) {
		document.form1.Vers.value="";
		}
 
 if (vers >=1025 && vers <=1052) {curSlide=704; spalte="a"; showSlide;}
 if (vers >=1183 && vers <=1209) {curSlide=704; spalte="a"; showSlide;}
 
 }