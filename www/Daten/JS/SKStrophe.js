function checkStrophe() {

eingabe = document.form1.Strophe.value;
strophe = parseInt(eingabe);

if (strophe > 12206) {alert("Der letzte Vers des 'Karl' ist 12206"); document.form1.Strophe.value=""; return;}

if (strophe >=1305 && strophe <=1318) {alert("Die Verse 1305 - 1318  fehlen.\nEin Verzeichnis der fehlenden Verse befindet sich in der Info-Datei.")}
if (strophe >=1475 && strophe <=1476) {alert("Die Verse 1475 - 1476  fehlen.\nEin Verzeichnis der fehlenden Verse befindet sich in der Info-Datei.")}
if (strophe >=1777 && strophe <=1780) {alert("Die Verse 1777 - 1780  fehlen.\nEin Verzeichnis der fehlenden Verse befindet sich in der Info-Datei.")} 
if (strophe >=1913 && strophe <=1914) {alert("Die Verse 1913 - 1914  fehlen.\nEin Verzeichnis der fehlenden Verse befindet sich in der Info-Datei.")}
if (strophe >=1923 && strophe <=1932) {alert("Die Verse 1923 - 1932  fehlen.\nEin Verzeichnis der fehlenden Verse befindet sich in der Info-Datei.")}
if (strophe >=1995 && strophe <=1998) {alert("Die Verse 1995 - 1998  fehlen.\nEin Verzeichnis der fehlenden Verse befindet sich in der Info-Datei.")}
if (strophe >=2029 && strophe <=2032) {alert("Die Verse 2029 - 2032  fehlen.\nEin Verzeichnis der fehlenden Verse befindet sich in der Info-Datei.")}
if (strophe >=2041 && strophe <=2042) {alert("Die Verse 2041 - 2042  fehlen.\nEin Verzeichnis der fehlenden Verse befindet sich in der Info-Datei.")}
if (strophe >=2237 && strophe <=2238) {alert("Die Verse 2237 - 2238  fehlen.\nEin Verzeichnis der fehlenden Verse befindet sich in der Info-Datei.")}
if (strophe >=2315 && strophe <=2318) {alert("Die Verse 2315 - 2318  fehlen.\nEin Verzeichnis der fehlenden Verse befindet sich in der Info-Datei.")}
if (strophe >=2461 && strophe <=2462) {alert("Die Verse 2461 - 2462  fehlen.\nEin Verzeichnis der fehlenden Verse befindet sich in der Info-Datei.")}
if (strophe >=3135 && strophe <=3136) {alert("Die Verse 3135 - 3136  fehlen.\nEin Verzeichnis der fehlenden Verse befindet sich in der Info-Datei.")}
if (strophe >=4819 && strophe <=4820) {alert("Die Verse 4819 - 4820  fehlen.\nEin Verzeichnis der fehlenden Verse befindet sich in der Info-Datei.")}
if (strophe >=4905 && strophe <=4922) {alert("Die Verse 4905 - 4922  fehlen.\nEin Verzeichnis der fehlenden Verse befindet sich in der Info-Datei.")}
if (strophe >=5005 && strophe <=5006) {alert("Die Verse 5005 - 5006  fehlen.\nEin Verzeichnis der fehlenden Verse befindet sich in der Info-Datei.")}
if (strophe >=5113 && strophe <=5114) {alert("Die Verse 5113 - 5114  fehlen.\nEin Verzeichnis der fehlenden Verse befindet sich in der Info-Datei.")}
if (strophe >=5263 && strophe <=5264) {alert("Die Verse 5263 - 5264  fehlen.\nEin Verzeichnis der fehlenden Verse befindet sich in der Info-Datei.")}
if (strophe >=5709 && strophe <=5714) {alert("Die Verse 5709 - 5714  fehlen.\nEin Verzeichnis der fehlenden Verse befindet sich in der Info-Datei.")}
if (strophe >=6003 && strophe <=6004) {alert("Die Verse 6003 - 6004  fehlen.\nEin Verzeichnis der fehlenden Verse befindet sich in der Info-Datei.")}
if (strophe >=6943 && strophe <=6962) {alert("Die Verse 6943 - 6962  fehlen.\nEin Verzeichnis der fehlenden Verse befindet sich in der Info-Datei.")}
if (strophe >=6993 && strophe <=6998) {alert("Die Verse 6993 - 6998  fehlen.\nEin Verzeichnis der fehlenden Verse befindet sich in der Info-Datei.")}
if (strophe >=7155 && strophe <=7168) {alert("Die Verse 7155 - 7168  fehlen.\nEin Verzeichnis der fehlenden Verse befindet sich in der Info-Datei.")}
if (strophe >=7631 && strophe <=7632) {alert("Die Verse 7631 - 7632  fehlen.\nEin Verzeichnis der fehlenden Verse befindet sich in der Info-Datei.")}
if (strophe >=8873 && strophe <=8874) {alert("Die Verse 8873 - 8874  fehlen.\nEin Verzeichnis der fehlenden Verse befindet sich in der Info-Datei.")}
if (strophe >=10409 && strophe <=10410) {alert("Die Verse 10409 - 10410  fehlen.\nEin Verzeichnis der fehlenden Verse befindet sich in der Info-Datei.")}
if (strophe >=10955 && strophe <=10960) {alert("Die Verse 10955 - 10960  fehlen.\nEin Verzeichnis der fehlenden Verse befindet sich in der Info-Datei.")}

if (strophe =="" || isNaN(strophe) == true || strophe == "null" || strophe == 0) {
		document.form1.Strophe.value="";
		}

if (strophe >= 1 && strophe <= 56) {curSlide=452; spalte="a"; showSlide();}
if (strophe >= 57 && strophe <= 112) {curSlide=452; spalte="b"; showSlide();}
if (strophe >= 113 && strophe <= 169) {curSlide=453; spalte="a"; showSlide();}
if (strophe >= 170 && strophe <= 226) {curSlide=453; spalte="b"; showSlide();}
if (strophe >= 227 && strophe <= 283) {curSlide=454; spalte="a"; showSlide();}
if (strophe >= 284 && strophe <= 340) {curSlide=454; spalte="b"; showSlide();}
if (strophe >= 341 && strophe <= 396) {curSlide=455; spalte="a"; showSlide();}
if (strophe >= 397 && strophe <= 452) {curSlide=455; spalte="b"; showSlide();}
if (strophe >= 453 && strophe <= 508) {curSlide=456; spalte="a"; showSlide();}
if (strophe >= 509 && strophe <= 564) {curSlide=456; spalte="b"; showSlide();}
if (strophe >= 565 && strophe <= 620) {curSlide=1456; spalte="a"; showSlide();}
if (strophe >= 621 && strophe <= 676) {curSlide=1456; spalte="b"; showSlide();}
if (strophe >= 677 && strophe <= 732) {curSlide=1457; spalte="a"; showSlide();}
if (strophe >= 733 && strophe <= 788) {curSlide=1457; spalte="b"; showSlide();}
if (strophe >= 789 && strophe <= 844) {curSlide=457; spalte="a"; showSlide();}
if (strophe >= 845 && strophe <= 900) {curSlide=457; spalte="b"; showSlide();}
if (strophe >= 901 && strophe <= 956) {curSlide=458; spalte="a"; showSlide();}
if (strophe >= 957 && strophe <= 1012) {curSlide=458; spalte="b"; showSlide();}
if (strophe >= 1013 && strophe <= 1068) {curSlide=459; spalte="a"; showSlide();}
if (strophe >= 1069 && strophe <= 1124) {curSlide=459; spalte="b"; showSlide();}
if (strophe >= 1125 && strophe <= 1180) {curSlide=460; spalte="a"; showSlide();}
if (strophe >= 1181 && strophe <= 1236) {curSlide=460; spalte="b"; showSlide();}
if (strophe >= 1237 && strophe <= 1292) {curSlide=461; spalte="a"; showSlide();}
if (strophe >= 1293 && strophe <= 1362) {curSlide=461; spalte="b"; showSlide();}
if (strophe >= 1363 && strophe <= 1418) {curSlide=462; spalte="a"; showSlide();}
if (strophe >= 1419 && strophe <= 1476) {curSlide=462; spalte="b"; showSlide();}
if (strophe >= 1477 && strophe <= 1532) {curSlide=463; spalte="a"; showSlide();}
if (strophe >= 1533 && strophe <= 1588) {curSlide=463; spalte="b"; showSlide();}
if (strophe >= 1589 && strophe <= 1644) {curSlide=464; spalte="a"; showSlide();}
if (strophe >= 1645 && strophe <= 1700) {curSlide=464; spalte="b"; showSlide();}
if (strophe >= 1701 && strophe <= 1756) {curSlide=465; spalte="a"; showSlide();}
if (strophe >= 1757 && strophe <= 1816) {curSlide=465; spalte="b"; showSlide();}
if (strophe >= 1817 && strophe <= 1871) {curSlide=466; spalte="a"; showSlide();}
if (strophe >= 1872 && strophe <= 1939) {curSlide=466; spalte="b"; showSlide();}
if (strophe >= 1940 && strophe <= 2000) {curSlide=467; spalte="a"; showSlide();}
if (strophe >= 2001 && strophe <= 2061) {curSlide=467; spalte="b"; showSlide();}
if (strophe >= 2062 && strophe <= 2114) {curSlide=468; spalte="a"; showSlide();}
if (strophe >= 2115 && strophe <= 2169) {curSlide=468; spalte="b"; showSlide();}
if (strophe >= 2170 && strophe <= 2224) {curSlide=469; spalte="a"; showSlide();}
if (strophe >= 2225 && strophe <= 2281) {curSlide=469; spalte="b"; showSlide();}
if (strophe >= 2282 && strophe <= 2340) {curSlide=470; spalte="a"; showSlide();}
if (strophe >= 2341 && strophe <= 2395) {curSlide=470; spalte="b"; showSlide();}
if (strophe >= 2396 && strophe <= 2450) {curSlide=471; spalte="a"; showSlide();}
if (strophe >= 2451 && strophe <= 2507) {curSlide=471; spalte="b"; showSlide();}
if (strophe >= 2508 && strophe <= 2564) {curSlide=472; spalte="a"; showSlide();}
if (strophe >= 2565 && strophe <= 2619) {curSlide=472; spalte="b"; showSlide();}
if (strophe >= 2620 && strophe <= 2674) {curSlide=473; spalte="a"; showSlide();}
if (strophe >= 2675 && strophe <= 2729) {curSlide=473; spalte="b"; showSlide();}
if (strophe >= 2730 && strophe <= 2784) {curSlide=474; spalte="a"; showSlide();}
if (strophe >= 2785 && strophe <= 2839) {curSlide=474; spalte="b"; showSlide();}
if (strophe >= 2840 && strophe <= 2894) {curSlide=475; spalte="a"; showSlide();}
if (strophe >= 2895 && strophe <= 2949) {curSlide=475; spalte="b"; showSlide();}
if (strophe >= 2950 && strophe <= 3004) {curSlide=476; spalte="a"; showSlide();}
if (strophe >= 3005 && strophe <= 3059) {curSlide=476; spalte="b"; showSlide();}
if (strophe >= 3060 && strophe <= 3114) {curSlide=477; spalte="a"; showSlide();}
if (strophe >= 3115 && strophe <= 3171) {curSlide=477; spalte="b"; showSlide();}
if (strophe >= 3172 && strophe <= 3226) {curSlide=478; spalte="a"; showSlide();}
if (strophe >= 3227 && strophe <= 3281) {curSlide=478; spalte="b"; showSlide();}
if (strophe >= 3282 && strophe <= 3336) {curSlide=479; spalte="a"; showSlide();}
if (strophe >= 3337 && strophe <= 3391) {curSlide=479; spalte="b"; showSlide();}
if (strophe >= 3392 && strophe <= 3446) {curSlide=480; spalte="a"; showSlide();}
if (strophe >= 3447 && strophe <= 3501) {curSlide=480; spalte="b"; showSlide();}
if (strophe >= 3502 && strophe <= 3557) {curSlide=481; spalte="a"; showSlide();}
if (strophe >= 3558 && strophe <= 3613) {curSlide=481; spalte="b"; showSlide();}
if (strophe >= 3614 && strophe <= 3669) {curSlide=482; spalte="a"; showSlide();}
if (strophe >= 3670 && strophe <= 3725) {curSlide=482; spalte="b"; showSlide();}
if (strophe >= 3726 && strophe <= 3782) {curSlide=483; spalte="a"; showSlide();}
if (strophe >= 3783 && strophe <= 3839) {curSlide=483; spalte="b"; showSlide();}
if (strophe >= 3840 && strophe <= 3895) {curSlide=484; spalte="a"; showSlide();}
if (strophe >= 3896 && strophe <= 3952) {curSlide=484; spalte="b"; showSlide();}
if (strophe >= 3953 && strophe <= 4009) {curSlide=485; spalte="a"; showSlide();}
if (strophe >= 4010 && strophe <= 4065) {curSlide=485; spalte="b"; showSlide();}
if (strophe >= 4066 && strophe <= 4122) {curSlide=486; spalte="a"; showSlide();}
if (strophe >= 4123 && strophe <= 4179) {curSlide=486; spalte="b"; showSlide();}
if (strophe >= 4180 && strophe <= 4238) {curSlide=487; spalte="a"; showSlide();}
if (strophe >= 4239 && strophe <= 4297) {curSlide=487; spalte="b"; showSlide();}
if (strophe >= 4298 && strophe <= 4354) {curSlide=488; spalte="a"; showSlide();}
if (strophe >= 4355 && strophe <= 4411) {curSlide=488; spalte="b"; showSlide();}
if (strophe >= 4412 && strophe <= 4468) {curSlide=489; spalte="a"; showSlide();}
if (strophe >= 4469 && strophe <= 4525) {curSlide=489; spalte="b"; showSlide();}
if (strophe >= 4526 && strophe <= 4582) {curSlide=490; spalte="a"; showSlide();}
if (strophe >= 4583 && strophe <= 4639) {curSlide=490; spalte="b"; showSlide();}
if (strophe >= 4640 && strophe <= 4696) {curSlide=491; spalte="a"; showSlide();}
if (strophe >= 4697 && strophe <= 4753) {curSlide=491; spalte="b"; showSlide();}
if (strophe >= 4754 && strophe <= 4810) {curSlide=492; spalte="a"; showSlide();}
if (strophe >= 4811 && strophe <= 4868) {curSlide=492; spalte="b"; showSlide();}
if (strophe >= 4869 && strophe <= 4942) {curSlide=493; spalte="a"; showSlide();}
if (strophe >= 4943 && strophe <= 5000) {curSlide=493; spalte="b"; showSlide();}
if (strophe >= 5001 && strophe <= 5058) {curSlide=494; spalte="a"; showSlide();}
if (strophe >= 5059 && strophe <= 5116) {curSlide=494; spalte="b"; showSlide();}
if (strophe >= 5117 && strophe <= 5171) {curSlide=495; spalte="a"; showSlide();}
if (strophe >= 5172 && strophe <= 5226) {curSlide=495; spalte="b"; showSlide();}
if (strophe >= 5227 && strophe <= 5283) {curSlide=496; spalte="a"; showSlide();}
if (strophe >= 5284 && strophe <= 5338) {curSlide=496; spalte="b"; showSlide();}
if (strophe >= 5339 && strophe <= 5394) {curSlide=497; spalte="a"; showSlide();}
if (strophe >= 5395 && strophe <= 5450) {curSlide=497; spalte="b"; showSlide();}
if (strophe >= 5451 && strophe <= 5505) {curSlide=498; spalte="a"; showSlide();}
if (strophe >= 5506 && strophe <= 5560) {curSlide=498; spalte="b"; showSlide();}
if (strophe >= 5561 && strophe <= 5614) {curSlide=499; spalte="a"; showSlide();}
if (strophe >= 5615 && strophe <= 5668) {curSlide=499; spalte="b"; showSlide();}
if (strophe >= 5669 && strophe <= 5728) {curSlide=500; spalte="a"; showSlide();}
if (strophe >= 5729 && strophe <= 5782) {curSlide=500; spalte="b"; showSlide();}
if (strophe >= 5783 && strophe <= 5836) {curSlide=501; spalte="a"; showSlide();}
if (strophe >= 5837 && strophe <= 5890) {curSlide=501; spalte="b"; showSlide();}
if (strophe >= 5891 && strophe <= 5944) {curSlide=502; spalte="a"; showSlide();}
if (strophe >= 5945 && strophe <= 5998) {curSlide=502; spalte="b"; showSlide();}
if (strophe >= 5999 && strophe <= 6053) {curSlide=503; spalte="a"; showSlide();}
if (strophe >= 6054 && strophe <= 6104) {curSlide=503; spalte="b"; showSlide();}
if (strophe >= 6105 && strophe <= 6157) {curSlide=504; spalte="a"; showSlide();}
if (strophe >= 6158 && strophe <= 6210) {curSlide=504; spalte="b"; showSlide();}
if (strophe >= 6211 && strophe <= 6265) {curSlide=505; spalte="a"; showSlide();}
if (strophe >= 6266 && strophe <= 6320) {curSlide=505; spalte="b"; showSlide();}
if (strophe >= 6321 && strophe <= 6379) {curSlide=506; spalte="a"; showSlide();}
if (strophe >= 6380 && strophe <= 6434) {curSlide=506; spalte="b"; showSlide();}
if (strophe >= 6435 && strophe <= 6491) {curSlide=507; spalte="a"; showSlide();}
if (strophe >= 6492 && strophe <= 6546) {curSlide=507; spalte="b"; showSlide();}
if (strophe >= 6547 && strophe <= 6601) {curSlide=508; spalte="a"; showSlide();}
if (strophe >= 6602 && strophe <= 6653) {curSlide=508; spalte="b"; showSlide();}
if (strophe >= 6654 && strophe <= 6707) {curSlide=509; spalte="a"; showSlide();}
if (strophe >= 6708 && strophe <= 6756) {curSlide=509; spalte="b"; showSlide();}
if (strophe >= 6757 && strophe <= 6805) {curSlide=510; spalte="a"; showSlide();}
if (strophe >= 6806 && strophe <= 6854) {curSlide=510; spalte="b"; showSlide();}
if (strophe >= 6855 && strophe <= 6910) {curSlide=511; spalte="a"; showSlide();}
if (strophe >= 6911 && strophe <= 6986) {curSlide=511; spalte="b"; showSlide();}
if (strophe >= 6987 && strophe <= 7048) {curSlide=512; spalte="a"; showSlide();}
if (strophe >= 7049 && strophe <= 7104) {curSlide=512; spalte="b"; showSlide();}
if (strophe >= 7105 && strophe <= 7173) {curSlide=513; spalte="a"; showSlide();}
if (strophe >= 7174 && strophe <= 7228) {curSlide=513; spalte="b"; showSlide();}
if (strophe >= 7229 && strophe <= 7283) {curSlide=514; spalte="a"; showSlide();}
if (strophe >= 7284 && strophe <= 7338) {curSlide=514; spalte="b"; showSlide();}
if (strophe >= 7339 && strophe <= 7393) {curSlide=515; spalte="a"; showSlide();}
if (strophe >= 7394 && strophe <= 7448) {curSlide=515; spalte="b"; showSlide();}
if (strophe >= 7449 && strophe <= 7503) {curSlide=516; spalte="a"; showSlide();}
if (strophe >= 7504 && strophe <= 7558) {curSlide=516; spalte="b"; showSlide();}
if (strophe >= 7559 && strophe <= 7613) {curSlide=517; spalte="a"; showSlide();}
if (strophe >= 7614 && strophe <= 7670) {curSlide=517; spalte="b"; showSlide();}
if (strophe >= 7671 && strophe <= 7726) {curSlide=518; spalte="a"; showSlide();}
if (strophe >= 7727 && strophe <= 7781) {curSlide=518; spalte="b"; showSlide();}
if (strophe >= 7782 && strophe <= 7833) {curSlide=519; spalte="a"; showSlide();}
if (strophe >= 7834 && strophe <= 7885) {curSlide=519; spalte="b"; showSlide();}
if (strophe >= 7886 && strophe <= 7938) {curSlide=520; spalte="a"; showSlide();}
if (strophe >= 7939 && strophe <= 7990) {curSlide=520; spalte="b"; showSlide();}
if (strophe >= 7991 && strophe <= 8046) {curSlide=521; spalte="a"; showSlide();}
if (strophe >= 8047 && strophe <= 8102) {curSlide=521; spalte="b"; showSlide();}
if (strophe >= 8103 && strophe <= 8158) {curSlide=522; spalte="a"; showSlide();}
if (strophe >= 8159 && strophe <= 8214) {curSlide=522; spalte="b"; showSlide();}
if (strophe >= 8215 && strophe <= 8270) {curSlide=523; spalte="a"; showSlide();}
if (strophe >= 8271 && strophe <= 8326) {curSlide=523; spalte="b"; showSlide();}
if (strophe >= 8327 && strophe <= 8384) {curSlide=524; spalte="a"; showSlide();}
if (strophe >= 8385 && strophe <= 8440) {curSlide=524; spalte="b"; showSlide();}
if (strophe >= 8441 && strophe <= 8495) {curSlide=525; spalte="a"; showSlide();}
if (strophe >= 8496 && strophe <= 8550) {curSlide=525; spalte="b"; showSlide();}
if (strophe >= 8551 && strophe <= 8605) {curSlide=526; spalte="a"; showSlide();}
if (strophe >= 8606 && strophe <= 8660) {curSlide=526; spalte="b"; showSlide();}
if (strophe >= 8661 && strophe <= 8716) {curSlide=527; spalte="a"; showSlide();}
if (strophe >= 8717 && strophe <= 8772) {curSlide=527; spalte="b"; showSlide();}
if (strophe >= 8773 && strophe <= 8828) {curSlide=528; spalte="a"; showSlide();}
if (strophe >= 8829 && strophe <= 8886) {curSlide=528; spalte="b"; showSlide();}
if (strophe >= 8887 && strophe <= 8943) {curSlide=529; spalte="a"; showSlide();}
if (strophe >= 8944 && strophe <= 8998) {curSlide=529; spalte="b"; showSlide();}
if (strophe >= 8999 && strophe <= 9053) {curSlide=530; spalte="a"; showSlide();}
if (strophe >= 9054 && strophe <= 9108) {curSlide=530; spalte="b"; showSlide();}
if (strophe >= 9109 && strophe <= 9165) {curSlide=531; spalte="a"; showSlide();}
if (strophe >= 9166 && strophe <= 9222) {curSlide=531; spalte="b"; showSlide();}
if (strophe >= 9223 && strophe <= 9279) {curSlide=532; spalte="a"; showSlide();}
if (strophe >= 9280 && strophe <= 9336) {curSlide=532; spalte="b"; showSlide();}
if (strophe >= 9337 && strophe <= 9394) {curSlide=533; spalte="a"; showSlide();}
if (strophe >= 9395 && strophe <= 9450) {curSlide=533; spalte="b"; showSlide();}
if (strophe >= 9451 && strophe <= 9506) {curSlide=534; spalte="a"; showSlide();}
if (strophe >= 9507 && strophe <= 9562) {curSlide=534; spalte="b"; showSlide();}
if (strophe >= 9563 && strophe <= 9618) {curSlide=535; spalte="a"; showSlide();}
if (strophe >= 9619 && strophe <= 9674) {curSlide=535; spalte="b"; showSlide();}
if (strophe >= 9675 && strophe <= 9730) {curSlide=536; spalte="a"; showSlide();}
if (strophe >= 9731 && strophe <= 9786) {curSlide=536; spalte="b"; showSlide();}
if (strophe >= 9787 && strophe <= 9840) {curSlide=537; spalte="a"; showSlide();}
if (strophe >= 9841 && strophe <= 9896) {curSlide=537; spalte="b"; showSlide();}
if (strophe >= 9897 && strophe <= 9952) {curSlide=538; spalte="a"; showSlide();}
if (strophe >= 9953 && strophe <= 10008) {curSlide=538; spalte="b"; showSlide();}
if (strophe >= 10009 && strophe <= 10061) {curSlide=539; spalte="a"; showSlide();}
if (strophe >= 10062 && strophe <= 10116) {curSlide=539; spalte="b"; showSlide();}
if (strophe >= 10117 && strophe <= 10171) {curSlide=540; spalte="a"; showSlide();}
if (strophe >= 10172 && strophe <= 10226) {curSlide=540; spalte="b"; showSlide();}
if (strophe >= 10227 && strophe <= 10282) {curSlide=541; spalte="a"; showSlide();}
if (strophe >= 10283 && strophe <= 10338) {curSlide=541; spalte="b"; showSlide();}
if (strophe >= 10339 && strophe <= 10394) {curSlide=542; spalte="a"; showSlide();}
if (strophe >= 10395 && strophe <= 10452) {curSlide=542; spalte="b"; showSlide();}
if (strophe >= 10453 && strophe <= 10508) {curSlide=543; spalte="a"; showSlide();}
if (strophe >= 10509 && strophe <= 10564) {curSlide=543; spalte="b"; showSlide();}
if (strophe >= 10565 && strophe <= 10620) {curSlide=544; spalte="a"; showSlide();}
if (strophe >= 10621 && strophe <= 10676) {curSlide=544; spalte="b"; showSlide();}
if (strophe >= 10677 && strophe <= 10732) {curSlide=545; spalte="a"; showSlide();}
if (strophe >= 10733 && strophe <= 10789) {curSlide=545; spalte="b"; showSlide();}
if (strophe >= 10790 && strophe <= 10844) {curSlide=546; spalte="a"; showSlide();}
if (strophe >= 10845 && strophe <= 10900) {curSlide=546; spalte="b"; showSlide();}
if (strophe >= 10901 && strophe <= 10963) {curSlide=547; spalte="a"; showSlide();}
if (strophe >= 10964 && strophe <= 11014) {curSlide=547; spalte="b"; showSlide();}
if (strophe >= 11015 && strophe <= 11071) {curSlide=548; spalte="a"; showSlide();}
if (strophe >= 11072 && strophe <= 11128) {curSlide=548; spalte="b"; showSlide();}
if (strophe >= 11129 && strophe <= 11184) {curSlide=549; spalte="a"; showSlide();}
if (strophe >= 11185 && strophe <= 11241) {curSlide=549; spalte="b"; showSlide();}
if (strophe >= 11242 && strophe <= 11297) {curSlide=550; spalte="a"; showSlide();}
if (strophe >= 11298 && strophe <= 11353) {curSlide=550; spalte="b"; showSlide();}
if (strophe >= 11354 && strophe <= 11409) {curSlide=551; spalte="a"; showSlide();}
if (strophe >= 11410 && strophe <= 11465) {curSlide=551; spalte="b"; showSlide();}
if (strophe >= 11466 && strophe <= 11521) {curSlide=552; spalte="a"; showSlide();}
if (strophe >= 11522 && strophe <= 11577) {curSlide=552; spalte="b"; showSlide();}
if (strophe >= 11578 && strophe <= 11634) {curSlide=553; spalte="a"; showSlide();}
if (strophe >= 11635 && strophe <= 11690) {curSlide=553; spalte="b"; showSlide();}
if (strophe >= 11691 && strophe <= 11746) {curSlide=554; spalte="a"; showSlide();}
if (strophe >= 11747 && strophe <= 11802) {curSlide=554; spalte="b"; showSlide();}
if (strophe >= 11803 && strophe <= 11856) {curSlide=555; spalte="a"; showSlide();}
if (strophe >= 11857 && strophe <= 11910) {curSlide=555; spalte="b"; showSlide();}
if (strophe >= 11911 && strophe <= 11964) {curSlide=556; spalte="a"; showSlide();}
if (strophe >= 11965 && strophe <= 12018) {curSlide=556; spalte="b"; showSlide();}
if (strophe >= 12019 && strophe <= 12074) {curSlide=557; spalte="a"; showSlide();}
if (strophe >= 12075 && strophe <= 12130) {curSlide=557; spalte="b"; showSlide();}
if (strophe >= 12131 && strophe <= 12186) {curSlide=558; spalte="a"; showSlide();}
if (strophe >= 12187 && strophe <= 12206) {curSlide=558; spalte="b"; showSlide();}
}