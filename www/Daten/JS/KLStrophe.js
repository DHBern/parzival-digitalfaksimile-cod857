function checkStrophe() {

eingabe = document.form1.Strophe.value;
strophe = parseInt(eingabe);

if (strophe > 4357) {alert("Der letzte Vers der 'Klage' ist 4357."); document.form1.Strophe.value=""; return;}
if (strophe >= 1172 && strophe <= 1174) {alert("Die Verse 1172 - 1174 fehlen.")}

if (strophe =="" || isNaN(strophe) == true || strophe == "null" || strophe == 0) {
		document.form1.Strophe.value="";
		}

if (strophe >= 1 && strophe <= 51) {curSlide = 416; spalte="a"; showSlide();}
if (strophe >= 52 && strophe <= 111) {curSlide = 416; spalte="b"; showSlide();}
if (strophe >= 112 && strophe <= 173) {curSlide = 417; spalte="a"; showSlide();}
if (strophe >= 174 && strophe <= 237) {curSlide = 417; spalte="b"; showSlide();}
if (strophe >= 238 && strophe <= 298) {curSlide = 418; spalte="a"; showSlide();}
if (strophe >= 299 && strophe <= 361) {curSlide = 418; spalte="b"; showSlide();}
if (strophe >= 362 && strophe <= 418) {curSlide = 419; spalte="a"; showSlide();}
if (strophe >= 419 && strophe <= 481) {curSlide = 419; spalte="b"; showSlide();}
if (strophe >= 482 && strophe <= 541) {curSlide = 420; spalte="a"; showSlide();}
if (strophe >= 542 && strophe <= 603) {curSlide = 420; spalte="b"; showSlide();}
if (strophe >= 604 && strophe <= 665) {curSlide = 421; spalte="a"; showSlide();}
if (strophe >= 666 && strophe <= 729) {curSlide = 421; spalte="b"; showSlide();}
if (strophe >= 730 && strophe <= 793) {curSlide = 422; spalte="a"; showSlide();}
if (strophe >= 794 && strophe <= 854) {curSlide = 422; spalte="b"; showSlide();}
if (strophe >= 855 && strophe <= 909) {curSlide = 423; spalte="a"; showSlide();}
if (strophe >= 910 && strophe <= 964) {curSlide = 423; spalte="b"; showSlide();}
if (strophe >= 965 && strophe <= 1017) {curSlide = 424; spalte="a"; showSlide();}
if (strophe >= 1018 && strophe <= 1075) {curSlide = 424; spalte="b"; showSlide();}
if (strophe >= 1076 && strophe <= 1131) {curSlide = 425; spalte="a"; showSlide();}
if (strophe >= 1132 && strophe <= 1192) {curSlide = 425; spalte="b"; showSlide();}
if (strophe >= 1193 && strophe <= 1242) {curSlide = 426; spalte="a"; showSlide();}
if (strophe >= 1243 && strophe <= 1299) {curSlide = 426; spalte="b"; showSlide();}
if (strophe >= 1300 && strophe <= 1357) {curSlide = 427; spalte="a"; showSlide();}
if (strophe >= 1358 && strophe <= 1412) {curSlide = 427; spalte="b"; showSlide();}
if (strophe >= 1413 && strophe <= 1469) {curSlide = 428; spalte="a"; showSlide();}
if (strophe >= 1470 && strophe <= 1526) {curSlide = 428; spalte="b"; showSlide();}
if (strophe >= 1527 && strophe <= 1590) {curSlide = 429; spalte="a"; showSlide();}
if (strophe >= 1591 && strophe <= 1644) {curSlide = 429; spalte="b"; showSlide();}
if (strophe >= 1645 && strophe <= 1703) {curSlide = 430; spalte="a"; showSlide();}
if (strophe >= 1704 && strophe <= 1765) {curSlide = 430; spalte="b"; showSlide();}
if (strophe >= 1766 && strophe <= 1826) {curSlide = 431; spalte="a"; showSlide();}
if (strophe >= 1827 && strophe <= 1882) {curSlide = 431; spalte="b"; showSlide();}
if (strophe >= 1883 && strophe <= 1940) {curSlide = 432; spalte="a"; showSlide();}
if (strophe >= 1941 && strophe <= 2001) {curSlide = 432; spalte="b"; showSlide();}
if (strophe >= 2002 && strophe <= 2064) {curSlide = 433; spalte="a"; showSlide();}
if (strophe >= 2065 && strophe <= 2122) {curSlide = 433; spalte="b"; showSlide();}
if (strophe >= 2123 && strophe <= 2184) {curSlide = 434; spalte="a"; showSlide();}
if (strophe >= 2185 && strophe <= 2244) {curSlide = 434; spalte="b"; showSlide();}
if (strophe >= 2245 && strophe <= 2309) {curSlide = 435; spalte="a"; showSlide();}
if (strophe >= 2310 && strophe <= 2372) {curSlide = 435; spalte="b"; showSlide();}
if (strophe >= 2373 && strophe <= 2428) {curSlide = 436; spalte="a"; showSlide();}
if (strophe >= 2429 && strophe <= 2487) {curSlide = 436; spalte="b"; showSlide();}
if (strophe >= 2488 && strophe <= 2546) {curSlide = 437; spalte="a"; showSlide();}
if (strophe >= 2547 && strophe <= 2611) {curSlide = 437; spalte="b"; showSlide();}
if (strophe >= 2612 && strophe <= 2673) {curSlide = 438; spalte="a"; showSlide();}
if (strophe >= 2674 && strophe <= 2740) {curSlide = 438; spalte="b"; showSlide();}
if (strophe >= 2741 && strophe <= 2803) {curSlide = 439; spalte="a"; showSlide();}
if (strophe >= 2804 && strophe <= 2862) {curSlide = 439; spalte="b"; showSlide();}
if (strophe >= 2863 && strophe <= 2915) {curSlide = 440; spalte="a"; showSlide();}
if (strophe >= 2916 && strophe <= 2972) {curSlide = 440; spalte="b"; showSlide();}
if (strophe >= 2973 && strophe <= 3029) {curSlide = 441; spalte="a"; showSlide();}
if (strophe >= 3030 && strophe <= 3081) {curSlide = 441; spalte="b"; showSlide();}
if (strophe >= 3082 && strophe <= 3135) {curSlide = 442; spalte="a"; showSlide();}
if (strophe >= 3136 && strophe <= 3196) {curSlide = 442; spalte="b"; showSlide();}
if (strophe >= 3197 && strophe <= 3257) {curSlide = 443; spalte="a"; showSlide();}
if (strophe >= 3258 && strophe <= 3315) {curSlide = 443; spalte="b"; showSlide();}
if (strophe >= 3316 && strophe <= 3372) {curSlide = 444; spalte="a"; showSlide();}
if (strophe >= 3373 && strophe <= 3433) {curSlide = 444; spalte="b"; showSlide();}
if (strophe >= 3434 && strophe <= 3494) {curSlide = 445; spalte="a"; showSlide();}
if (strophe >= 3495 && strophe <= 3553) {curSlide = 445; spalte="b"; showSlide();}
if (strophe >= 3554 && strophe <= 3613) {curSlide = 446; spalte="a"; showSlide();}
if (strophe >= 3614 && strophe <= 3676) {curSlide = 446; spalte="b"; showSlide();}
if (strophe >= 3677 && strophe <= 3736) {curSlide = 447; spalte="a"; showSlide();}
if (strophe >= 3737 && strophe <= 3791) {curSlide = 447; spalte="b"; showSlide();}
if (strophe >= 3792 && strophe <= 3853) {curSlide = 448; spalte="a"; showSlide();}
if (strophe >= 3854 && strophe <= 3916) {curSlide = 448; spalte="b"; showSlide();}
if (strophe >= 3917 && strophe <= 3983) {curSlide = 449; spalte="a"; showSlide();}
if (strophe >= 3984 && strophe <= 4044) {curSlide = 449; spalte="b"; showSlide();}
if (strophe >= 4045 && strophe <= 4105) {curSlide = 450; spalte="a"; showSlide();}
if (strophe >= 4106 && strophe <= 4165) {curSlide = 450; spalte="b"; showSlide();}
if (strophe >= 4166 && strophe <= 4230) {curSlide = 451; spalte="a"; showSlide();}
if (strophe >= 4231 && strophe <= 4312) {curSlide = 451; spalte="b"; showSlide();}
if (strophe >= 4313 && strophe <= 4357) {curSlide = 451; spalte=" unten"; showSlide();}
}