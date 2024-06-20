function checkStrophe() {

eingabe = document.form1.Strophe.value;
strophe = parseInt(eingabe);

if (strophe > 4) {alert(strophe + ": ungueltige Eingabe. Der Text besitzt nur 4 Strophen"); document.form1.Strophe.value=""; return;}


if (strophe == 1) {curSlide=693; spalte="b"; showSlide();}
if (strophe >= 2 && strophe <= 4) {curSlide=693; spalte="a"; showSlide();}
}