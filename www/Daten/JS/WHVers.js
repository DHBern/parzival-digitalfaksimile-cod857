function checkVers() {

eingabe = document.form1.Vers.value;
vers = parseFloat(eingabe);

if (vers > 467.23) {alert("Der letzte Vers des 'Willehalm' ist 467.22"); document.form1.Vers.value=""; return;}

if (vers >=172.29 && vers <= 172.30) {alert("Die Verse 172.29 - 172.30 fehlen.\nEin Verzeichnis der fehlenden Verse befindet sich in der Info-Datei.")}
if (vers >=209.11 && vers <= 209.12) {alert("Die Verse 209.11 - 209.12 fehlen.\nEin Verzeichnis der fehlenden Verse befindet sich in der Info-Datei.")}
if (vers >=213.11 && vers <= 213.12) {alert("Die Verse 213.11 - 213.12 fehlen.\nEin Verzeichnis der fehlenden Verse befindet sich in der Info-Datei.")}
if (vers >=277.03 && vers <= 277.04) {alert("Die Verse 277.3 - 277.4 fehlen.\nEin Verzeichnis der fehlenden Verse befindet sich in der Info-Datei.")}
if (vers >=295.15 && vers <= 295.16) {alert("Die Verse 295.15 - 295.16 fehlen.\nEin Verzeichnis der fehlenden Verse befindet sich in der Info-Datei.")}
if (vers >=302.29 && vers <= 302.30) {alert("Die Verse 302.29 - 302.30 fehlen.\nEin Verzeichnis der fehlenden Verse befindet sich in der Info-Datei.")}
if (vers >=322.25 && vers <= 322.26) {alert("Die Verse 322.25 - 322.26 fehlen.\nEin Verzeichnis der fehlenden Verse befindet sich in der Info-Datei.")}
if (vers >=328.25 && vers <= 328.30) {alert("Die Verse 328.25 - 328.30 fehlen.\nEin Verzeichnis der fehlenden Verse befindet sich in der Info-Datei.")}
if (vers >=369.07 && vers <= 369.08) {alert("Die Verse 369.7 - 369.8 fehlen.\nEin Verzeichnis der fehlenden Verse befindet sich in der Info-Datei.")}
if (vers ==467.13) {alert("Der Vers 467.13 fehlt.\nEin Verzeichnis der fehlenden Verse befindet sich in der Info-Datei.")}
if (vers ==467.23) {alert("Der Vers 467.23 fehlt.\nEin Verzeichnis der fehlenden Verse befindet sich in der Info-Datei.")}




if (vers =="" || isNaN(vers) == true || vers == "null" || vers == 0) {
		document.form1.Vers.value="";
		}

if (vers >= 1 && vers <= 1.30) {curSlide = 561; spalte = "a"; showSlide();}
if (vers >= 1.31 && vers <= 3.24) {curSlide = 561; spalte = "b"; showSlide();}
if (vers >= 3.25 && vers <= 5.18) {curSlide = 562; spalte = "a"; showSlide();}
if (vers >= 5.19 && vers <= 7.12) {curSlide = 562; spalte = "b"; showSlide();}
if (vers >= 7.13 && vers <= 9.06) {curSlide = 563; spalte = "a"; showSlide();}
if (vers >= 9.07 && vers <= 10.30) {curSlide = 563; spalte = "b"; showSlide();}
if (vers >= 10.31 && vers <= 12.24) {curSlide = 564; spalte = "a"; showSlide();}
if (vers >= 12.25 && vers <= 14.18) {curSlide = 564; spalte = "b"; showSlide();}
if (vers >= 14.19 && vers <= 16.12) {curSlide = 565; spalte = "a"; showSlide();}
if (vers >= 16.13 && vers <= 18.06) {curSlide = 565; spalte = "b"; showSlide();}
if (vers >= 18.07 && vers <= 19.30) {curSlide = 566; spalte = "a"; showSlide();}
if (vers >= 19.31 && vers <= 21.24) {curSlide = 566; spalte = "b"; showSlide();}
if (vers >= 21.25 && vers <= 23.18) {curSlide = 567; spalte = "a"; showSlide();}
if (vers >= 23.19 && vers <= 25.12) {curSlide = 567; spalte = "b"; showSlide();}
if (vers >= 25.13 && vers <= 27.06) {curSlide = 568; spalte = "a"; showSlide();}
if (vers >= 27.07 && vers <= 28.30) {curSlide = 568; spalte = "b"; showSlide();}
if (vers >= 28.31 && vers <= 30.24) {curSlide = 569; spalte = "a"; showSlide();}
if (vers >= 30.25 && vers <= 32.18) {curSlide = 569; spalte = "b"; showSlide();}
if (vers >= 32.19 && vers <= 34.12) {curSlide = 570; spalte = "a"; showSlide();}
if (vers >= 34.13 && vers <= 36.06) {curSlide = 570; spalte = "b"; showSlide();}
if (vers >= 36.07 && vers <= 37.30) {curSlide = 567; spalte = "a"; showSlide();}
if (vers >= 37.31 && vers <= 39.24) {curSlide = 571; spalte = "b"; showSlide();}
if (vers >= 39.25 && vers <= 41.18) {curSlide = 572; spalte = "a"; showSlide();}
if (vers >= 41.19 && vers <= 43.12) {curSlide = 572; spalte = "b"; showSlide();}
if (vers >= 43.13 && vers <= 45.06) {curSlide = 573; spalte = "a"; showSlide();}
if (vers >= 45.07 && vers <= 46.30) {curSlide = 573; spalte = "b"; showSlide();}
if (vers >= 46.31 && vers <= 48.24) {curSlide = 574; spalte = "a"; showSlide();}
if (vers >= 48.25 && vers <= 50.18) {curSlide = 574; spalte = "b"; showSlide();}
if (vers >= 50.19 && vers <= 52.12) {curSlide = 575; spalte = "a"; showSlide();}
if (vers >= 52.13 && vers <= 54.06) {curSlide = 575; spalte = "b"; showSlide();}
if (vers >= 54.07 && vers <= 55.30) {curSlide = 576; spalte = "a"; showSlide();}
if (vers >= 55.31 && vers <= 57.24) {curSlide = 576; spalte = "b"; showSlide();}
if (vers >= 57.25 && vers <= 59.05) {curSlide = 577; spalte = "a"; showSlide();}
if (vers >= 59.06 && vers <= 60.29) {curSlide = 577; spalte = "b"; showSlide();}
if (vers >= 60.30 && vers <= 62.23) {curSlide = 578; spalte = "a"; showSlide();}
if (vers >= 62.24 && vers <= 64.17) {curSlide = 578; spalte = "b"; showSlide();}
if (vers >= 64.18 && vers <= 66.11) {curSlide = 579; spalte = "a"; showSlide();}
if (vers >= 66.12 && vers <= 68.05) {curSlide = 579; spalte = "b"; showSlide();}
if (vers >= 68.06 && vers <= 69.29) {curSlide = 580; spalte = "a"; showSlide();}
if (vers >= 69.30 && vers <= 71.08) {curSlide = 580; spalte = "b"; showSlide();}
if (vers >= 71.09 && vers <= 73.02) {curSlide = 581; spalte = "a"; showSlide();}
if (vers >= 73.03 && vers <= 74.26) {curSlide = 581; spalte = "b"; showSlide();}
if (vers >= 74.27 && vers <= 76.20) {curSlide = 582; spalte = "a"; showSlide();}
if (vers >= 76.21 && vers <= 78.14) {curSlide = 582; spalte = "b"; showSlide();}
if (vers >= 78.15 && vers <= 80.08) {curSlide = 583; spalte = "a"; showSlide();}
if (vers >= 80.09 && vers <= 82.02) {curSlide = 583; spalte = "b"; showSlide();}
if (vers >= 82.03 && vers <= 83.26) {curSlide = 584; spalte = "a"; showSlide();}
if (vers >= 83.27 && vers <= 85.20) {curSlide = 584; spalte = "b"; showSlide();}
if (vers >= 85.21 && vers <= 87.14) {curSlide = 585; spalte = "a"; showSlide();}
if (vers >= 87.15 && vers <= 89.08) {curSlide = 585; spalte = "b"; showSlide();}
if (vers >= 89.09 && vers <= 91.02) {curSlide = 586; spalte = "a"; showSlide();}
if (vers >= 91.03 && vers <= 92.26) {curSlide = 586; spalte = "b"; showSlide();}
if (vers >= 92.27 && vers <= 94.20) {curSlide = 587; spalte = "a"; showSlide();}
if (vers >= 94.21 && vers <= 96.14) {curSlide = 587; spalte = "b"; showSlide();}
if (vers >= 96.15 && vers <= 98.08) {curSlide = 588; spalte = "a"; showSlide();}
if (vers >= 98.09 && vers <= 100.02) {curSlide = 588; spalte = "b"; showSlide();}
if (vers >= 100.03 && vers <= 101.26) {curSlide = 589; spalte = "a"; showSlide();}
if (vers >= 101.27 && vers <= 103.20) {curSlide = 589; spalte = "b"; showSlide();}
if (vers >= 103.21 && vers <= 105.14) {curSlide = 590; spalte = "a"; showSlide();}
if (vers >= 105.15 && vers <= 106.23) {curSlide = 590; spalte = "b"; showSlide();}
if (vers >= 106.24 && vers <= 108.17) {curSlide = 591; spalte = "a"; showSlide();}
if (vers >= 108.18 && vers <= 110.11) {curSlide = 591; spalte = "b"; showSlide();}
if (vers >= 110.12 && vers <= 112.05) {curSlide = 592; spalte = "a"; showSlide();}
if (vers >= 112.06 && vers <= 113.29) {curSlide = 592; spalte = "b"; showSlide();}
if (vers >= 113.30 && vers <= 115.23) {curSlide = 593; spalte = "a"; showSlide();}
if (vers >= 115.24 && vers <= 117.17) {curSlide = 593; spalte = "b"; showSlide();}
if (vers >= 117.18 && vers <= 119.11) {curSlide = 594; spalte = "a"; showSlide();}
if (vers >= 119.12 && vers <= 121.05) {curSlide = 594; spalte = "b"; showSlide();}
if (vers >= 121.06 && vers <= 122.29) {curSlide = 595; spalte = "a"; showSlide();}
if (vers >= 122.30 && vers <= 124.23) {curSlide = 595; spalte = "b"; showSlide();}
if (vers >= 124.24 && vers <= 126.02) {curSlide = 596; spalte = "a"; showSlide();}
if (vers >= 126.03 && vers <= 127.26) {curSlide = 596; spalte = "b"; showSlide();}
if (vers >= 127.27 && vers <= 129.20) {curSlide = 597; spalte = "a"; showSlide();}
if (vers >= 129.21 && vers <= 131.14) {curSlide = 597; spalte = "b"; showSlide();}
if (vers >= 131.15 && vers <= 133.08) {curSlide = 598; spalte = "a"; showSlide();}
if (vers >= 133.09 && vers <= 135.02) {curSlide = 598; spalte = "b"; showSlide();}
if (vers >= 135.03 && vers <= 136.26) {curSlide = 599; spalte = "a"; showSlide();}
if (vers >= 136.27 && vers <= 138.20) {curSlide = 599; spalte = "b"; showSlide();}
if (vers >= 138.21 && vers <= 140.14) {curSlide = 600; spalte = "a"; showSlide();}
if (vers >= 140.15 && vers <= 142.08) {curSlide = 600; spalte = "b"; showSlide();}
if (vers >= 142.09 && vers <= 144.02) {curSlide = 601; spalte = "a"; showSlide();}
if (vers >= 144.03 && vers <= 145.26) {curSlide = 601; spalte = "b"; showSlide();}
if (vers >= 145.27 && vers <= 147.20) {curSlide = 602; spalte = "a"; showSlide();}
if (vers >= 147.21 && vers <= 149.14) {curSlide = 602; spalte = "b"; showSlide();}
if (vers >= 149.15 && vers <= 151.08) {curSlide = 603; spalte = "a"; showSlide();}
if (vers >= 151.09 && vers <= 153.02) {curSlide = 603; spalte = "b"; showSlide();}
if (vers >= 153.03 && vers <= 154.26) {curSlide = 604; spalte = "a"; showSlide();}
if (vers >= 154.27 && vers <= 156.20) {curSlide = 604; spalte = "b"; showSlide();}
if (vers >= 156.21 && vers <= 158.14) {curSlide = 605; spalte = "a"; showSlide();}
if (vers >= 158.15 && vers <= 160.08) {curSlide = 605; spalte = "b"; showSlide();}
if (vers >= 160.09 && vers <= 161.30) {curSlide = 606; spalte = "a"; showSlide();}
if (vers >= 161.31 && vers <= 163.09) {curSlide = 606; spalte = "b"; showSlide();}
if (vers >= 163.10 && vers <= 165.03) {curSlide = 607; spalte = "a"; showSlide();}
if (vers >= 165.04 && vers <= 166.27) {curSlide = 607; spalte = "b"; showSlide();}
if (vers >= 166.28 && vers <= 168.21) {curSlide = 608; spalte = "a"; showSlide();}
if (vers >= 168.22 && vers <= 170.15) {curSlide = 608; spalte = "b"; showSlide();}
if (vers >= 170.16 && vers <= 172.09) {curSlide = 609; spalte = "a"; showSlide();}
if (vers >= 172.10 && vers <= 174.05) {curSlide = 609; spalte = "b"; showSlide();}
if (vers >= 174.06 && vers <= 175.29) {curSlide = 610; spalte = "a"; showSlide();}
if (vers >= 175.30 && vers <= 177.23) {curSlide = 610; spalte = "b"; showSlide();}
if (vers >= 177.24 && vers <= 179.17) {curSlide = 611; spalte = "a"; showSlide();}
if (vers >= 179.18 && vers <= 181.11) {curSlide = 611; spalte = "b"; showSlide();}
if (vers >= 181.12 && vers <= 183.05) {curSlide = 612; spalte = "a"; showSlide();}
if (vers >= 183.06 && vers <= 184.29) {curSlide = 612; spalte = "b"; showSlide();}
if (vers >= 184.30 && vers <= 186.09) {curSlide = 613; spalte = "a"; showSlide();}
if (vers >= 186.10 && vers <= 188.03) {curSlide = 613; spalte = "b"; showSlide();}
if (vers >= 188.04 && vers <= 189.27) {curSlide = 614; spalte = "a"; showSlide();}
if (vers >= 189.28 && vers <= 191.21) {curSlide = 614; spalte = "b"; showSlide();}
if (vers >= 191.22 && vers <= 193.15) {curSlide = 615; spalte = "a"; showSlide();}
if (vers >= 193.16 && vers <= 195.09) {curSlide = 615; spalte = "b"; showSlide();}
if (vers >= 195.10 && vers <= 197.03) {curSlide = 616; spalte = "a"; showSlide();}
if (vers >= 197.04 && vers <= 198.27) {curSlide = 616; spalte = "b"; showSlide();}
if (vers >= 198.28 && vers <= 200.21) {curSlide = 617; spalte = "a"; showSlide();}
if (vers >= 200.22 && vers <= 202.15) {curSlide = 617; spalte = "b"; showSlide();}
if (vers >= 202.16 && vers <= 204.09) {curSlide = 618; spalte = "a"; showSlide();}
if (vers >= 204.10 && vers <= 206.03) {curSlide = 618; spalte = "b"; showSlide();}
if (vers >= 206.04 && vers <= 207.27) {curSlide = 619; spalte = "a"; showSlide();}
if (vers >= 207.28 && vers <= 209.23) {curSlide = 619; spalte = "b"; showSlide();}
if (vers >= 209.24 && vers <= 211.17) {curSlide = 620; spalte = "a"; showSlide();}
if (vers >= 211.18 && vers <= 213.13) {curSlide = 620; spalte = "b"; showSlide();}
if (vers >= 213.14 && vers <= 214.30) {curSlide = 621; spalte = "a"; showSlide();}
if (vers >= 214.31 && vers <= 216.15) {curSlide = 621; spalte = "b"; showSlide();}
if (vers >= 216.16 && vers <= 218.09) {curSlide = 622; spalte = "a"; showSlide();}
if (vers >= 218.10 && vers <= 220.03) {curSlide = 622; spalte = "b"; showSlide();}
if (vers >= 220.04 && vers <= 221.27) {curSlide = 623; spalte = "a"; showSlide();}
if (vers >= 221.28 && vers <= 223.21) {curSlide = 623; spalte = "b"; showSlide();}
if (vers >= 223.22 && vers <= 225.15) {curSlide = 624; spalte = "a"; showSlide();}
if (vers >= 225.16 && vers <= 227.09) {curSlide = 624; spalte = "b"; showSlide();}
if (vers >= 227.10 && vers <= 229.03) {curSlide = 625; spalte = "a"; showSlide();}
if (vers >= 229.04 && vers <= 230.27) {curSlide = 625; spalte = "b"; showSlide();}
if (vers >= 230.28 && vers <= 232.21) {curSlide = 626; spalte = "a"; showSlide();}
if (vers >= 232.22 && vers <= 234.15) {curSlide = 626; spalte = "b"; showSlide();}
if (vers >= 234.16 && vers <= 236.10) {curSlide = 627; spalte = "a"; showSlide();}
if (vers >= 236.11 && vers <= 238.04) {curSlide = 627; spalte = "b"; showSlide();}
if (vers >= 238.05 && vers <= 239.28) {curSlide = 628; spalte = "a"; showSlide();}
if (vers >= 239.29 && vers <= 241.22) {curSlide = 628; spalte = "b"; showSlide();}
if (vers >= 241.23 && vers <= 243.16) {curSlide = 629; spalte = "a"; showSlide();}
if (vers >= 243.17 && vers <= 245.10) {curSlide = 629; spalte = "b"; showSlide();}
if (vers >= 245.11 && vers <= 246.22) {curSlide = 630; spalte = "a"; showSlide();}
if (vers >= 246.23 && vers <= 248.16) {curSlide = 630; spalte = "b"; showSlide();}
if (vers >= 248.17 && vers <= 250.10) {curSlide = 631; spalte = "a"; showSlide();}
if (vers >= 250.11 && vers <= 252.04) {curSlide = 631; spalte = "b"; showSlide();}
if (vers >= 252.05 && vers <= 253.28) {curSlide = 632; spalte = "a"; showSlide();}
if (vers >= 253.29 && vers <= 255.22) {curSlide = 632; spalte = "b"; showSlide();}
if (vers >= 255.23 && vers <= 257.16) {curSlide = 633; spalte = "a"; showSlide();}
if (vers >= 257.17 && vers <= 259.10) {curSlide = 633; spalte = "b"; showSlide();}
if (vers >= 259.11 && vers <= 261.04) {curSlide = 634; spalte = "a"; showSlide();}
if (vers >= 261.05 && vers <= 262.28) {curSlide = 634; spalte = "b"; showSlide();}
if (vers >= 262.29 && vers <= 264.22) {curSlide = 635; spalte = "a"; showSlide();}
if (vers >= 264.23 && vers <= 266.16) {curSlide = 635; spalte = "b"; showSlide();}
if (vers >= 266.17 && vers <= 268.10) {curSlide = 636; spalte = "a"; showSlide();}
if (vers >= 268.11 && vers <= 270.04) {curSlide = 636; spalte = "b"; showSlide();}
if (vers >= 270.05 && vers <= 271.28) {curSlide = 637; spalte = "a"; showSlide();}
if (vers >= 271.29 && vers <= 273.22) {curSlide = 637; spalte = "b"; showSlide();}
if (vers >= 273.23 && vers <= 275.16) {curSlide = 638; spalte = "a"; showSlide();}
if (vers >= 275.17 && vers <= 277.12) {curSlide = 638; spalte = "b"; showSlide();}
if (vers >= 277.13 && vers <= 278.24) {curSlide = 639; spalte = "a"; showSlide();}
if (vers >= 278.25 && vers <= 280.18) {curSlide = 639; spalte = "b"; showSlide();}
if (vers >= 280.19 && vers <= 282.12) {curSlide = 640; spalte = "a"; showSlide();}
if (vers >= 282.13 && vers <= 284.06) {curSlide = 640; spalte = "b"; showSlide();}
if (vers >= 284.07 && vers <= 285.30) {curSlide = 641; spalte = "a"; showSlide();}
if (vers >= 285.31 && vers <= 287.24) {curSlide = 641; spalte = "b"; showSlide();}
if (vers >= 287.25 && vers <= 289.18) {curSlide = 642; spalte = "a"; showSlide();}
if (vers >= 289.19 && vers <= 291.12) {curSlide = 642; spalte = "b"; showSlide();}
if (vers >= 291.13 && vers <= 293.06) {curSlide = 643; spalte = "a"; showSlide();}
if (vers >= 293.07 && vers <= 294.30) {curSlide = 643; spalte = "b"; showSlide();}
if (vers >= 294.31 && vers <= 296.26) {curSlide = 644; spalte = "a"; showSlide();}
if (vers >= 296.27 && vers <= 298.20) {curSlide = 644; spalte = "b"; showSlide();}
if (vers >= 298.21 && vers <= 300.14) {curSlide = 645; spalte = "a"; showSlide();}
if (vers >= 300.15 && vers <= 302.08) {curSlide = 645; spalte = "b"; showSlide();}
if (vers >= 302.09 && vers <= 304.04) {curSlide = 646; spalte = "a"; showSlide();}
if (vers >= 304.05 && vers <= 305.28) {curSlide = 646; spalte = "b"; showSlide();}
if (vers >= 305.29 && vers <= 307.22) {curSlide = 647; spalte = "a"; showSlide();}
if (vers >= 307.23 && vers <= 309.16) {curSlide = 647; spalte = "b"; showSlide();}
if (vers >= 309.17 && vers <= 311.10) {curSlide = 648; spalte = "a"; showSlide();}
if (vers >= 311.11 && vers <= 313.04) {curSlide = 648; spalte = "b"; showSlide();}
if (vers >= 313.05 && vers <= 314.16) {curSlide = 649; spalte = "a"; showSlide();}
if (vers >= 314.17 && vers <= 316.10) {curSlide = 649; spalte = "b"; showSlide();}
if (vers >= 316.11 && vers <= 318.04) {curSlide = 650; spalte = "a"; showSlide();}
if (vers >= 318.05 && vers <= 319.28) {curSlide = 650; spalte = "b"; showSlide();}
if (vers >= 319.29 && vers <= 321.22) {curSlide = 651; spalte = "a"; showSlide();}
if (vers >= 321.23 && vers <= 323.18) {curSlide = 651; spalte = "b"; showSlide();}
if (vers >= 323.19 && vers <= 325.12) {curSlide = 652; spalte = "a"; showSlide();}
if (vers >= 325.13 && vers <= 327.07) {curSlide = 652; spalte = "b"; showSlide();}
if (vers >= 327.08 && vers <= 329.07) {curSlide = 653; spalte = "a"; showSlide();}
if (vers >= 329.08 && vers <= 330.29) {curSlide = 653; spalte = "b"; showSlide();}
if (vers >= 330.30 && vers <= 332.23) {curSlide = 654; spalte = "a"; showSlide();}
if (vers >= 332.24 && vers <= 334.17) {curSlide = 654; spalte = "b"; showSlide();}
if (vers >= 334.18 && vers <= 336.11) {curSlide = 655; spalte = "a"; showSlide();}
if (vers >= 336.12 && vers <= 338.05) {curSlide = 655; spalte = "b"; showSlide();}
if (vers >= 338.06 && vers <= 339.29) {curSlide = 656; spalte = "a"; showSlide();}
if (vers >= 339.30 && vers <= 341.23) {curSlide = 656; spalte = "b"; showSlide();}
if (vers >= 341.24 && vers <= 343.17) {curSlide = 657; spalte = "a"; showSlide();}
if (vers >= 343.18 && vers <= 345.11) {curSlide = 657; spalte = "b"; showSlide();}
if (vers >= 345.12 && vers <= 347.05) {curSlide = 658; spalte = "a"; showSlide();}
if (vers >= 347.06 && vers <= 348.29) {curSlide = 658; spalte = "b"; showSlide();}
if (vers >= 348.30 && vers <= 350.23) {curSlide = 59; spalte = "a"; showSlide();}
if (vers >= 350.24 && vers <= 352.17) {curSlide = 659; spalte = "b"; showSlide();}
if (vers >= 352.18 && vers <= 354.11) {curSlide = 660; spalte = "a"; showSlide();}
if (vers >= 354.12 && vers <= 356.05) {curSlide = 660; spalte = "b"; showSlide();}
if (vers >= 356.06 && vers <= 357.29) {curSlide = 661; spalte = "a"; showSlide();}
if (vers >= 357.30 && vers <= 359.23) {curSlide = 661; spalte = "b"; showSlide();}
if (vers >= 359.24 && vers <= 361.17) {curSlide = 662; spalte = "a"; showSlide();}
if (vers >= 361.18 && vers <= 362.29) {curSlide = 662; spalte = "b"; showSlide();}
if (vers >= 362.30 && vers <= 364.23) {curSlide = 663; spalte = "a"; showSlide();}
if (vers >= 364.24 && vers <= 366.17) {curSlide = 663; spalte = "b"; showSlide();}
if (vers >= 366.18 && vers <= 368.11) {curSlide = 664; spalte = "a"; showSlide();}
if (vers >= 368.12 && vers <= 370.07) {curSlide = 664; spalte = "b"; showSlide();}
if (vers >= 370.08 && vers <= 372) {curSlide = 665; spalte = "a"; showSlide();}
if (vers >= 372.02 && vers <= 373.25) {curSlide = 665; spalte = "b"; showSlide();}
if (vers >= 373.26 && vers <= 375.19) {curSlide = 666; spalte = "a"; showSlide();}
if (vers >= 375.20 && vers <= 377.13) {curSlide = 666; spalte = "b"; showSlide();}
if (vers >= 377.14 && vers <= 379.07) {curSlide = 667; spalte = "a"; showSlide();}
if (vers >= 379.08 && vers <= 381) {curSlide = 667; spalte = "b"; showSlide();}
if (vers >= 381.02 && vers <= 382.25) {curSlide = 68; spalte = "a"; showSlide();}
if (vers >= 382.26 && vers <= 384.19) {curSlide = 668; spalte = "b"; showSlide();}
if (vers >= 384.20 && vers <= 386.13) {curSlide = 669; spalte = "a"; showSlide();}
if (vers >= 386.14 && vers <= 388.07) {curSlide = 669; spalte = "b"; showSlide();}
if (vers >= 388.08 && vers <= 390) {curSlide = 670; spalte = "a"; showSlide();}
if (vers >= 390.02 && vers <= 391.25) {curSlide = 670; spalte = "b"; showSlide();}
if (vers >= 391.26 && vers <= 393.19) {curSlide = 671; spalte = "a"; showSlide();}
if (vers >= 393.20 && vers <= 395.13) {curSlide = 671; spalte = "b"; showSlide();}
if (vers >= 395.14 && vers <= 397.07) {curSlide = 672; spalte = "a"; showSlide();}
if (vers >= 397.08 && vers <= 399) {curSlide = 672; spalte = "b"; showSlide();}
if (vers >= 399.02 && vers <= 400.25) {curSlide = 673; spalte = "a"; showSlide();}
if (vers >= 400.26 && vers <= 402.19) {curSlide = 673; spalte = "b"; showSlide();}
if (vers >= 402.20 && vers <= 404) {curSlide = 674; spalte = "a"; showSlide();}
if (vers >= 404.02 && vers <= 405.25) {curSlide = 674; spalte = "b"; showSlide();}
if (vers >= 405.26 && vers <= 407.19) {curSlide = 675; spalte = "a"; showSlide();}
if (vers >= 407.20 && vers <= 409.13) {curSlide = 675; spalte = "b"; showSlide();}
if (vers >= 409.14 && vers <= 411.07) {curSlide = 676; spalte = "a"; showSlide();}
if (vers >= 411.08 && vers <= 413) {curSlide = 676; spalte = "b"; showSlide();}
if (vers >= 413.02 && vers <= 414.25) {curSlide = 677; spalte = "a"; showSlide();}
if (vers >= 414.26 && vers <= 416.19) {curSlide = 677; spalte = "b"; showSlide();}
if (vers >= 416.20 && vers <= 418.13) {curSlide = 678; spalte = "a"; showSlide();}
if (vers >= 418.14 && vers <= 420.07) {curSlide = 678; spalte = "b"; showSlide();}
if (vers >= 420.08 && vers <= 422) {curSlide = 679; spalte = "a"; showSlide();}
if (vers >= 422.02 && vers <= 423.25) {curSlide = 679; spalte = "b"; showSlide();}
if (vers >= 423.26 && vers <= 425.19) {curSlide = 680; spalte = "a"; showSlide();}
if (vers >= 425.20 && vers <= 427.13) {curSlide = 680; spalte = "b"; showSlide();}
if (vers >= 427.14 && vers <= 429.07) {curSlide = 681; spalte = "a"; showSlide();}
if (vers >= 429.08 && vers <= 431) {curSlide = 681; spalte = "b"; showSlide();}
if (vers >= 431.02 && vers <= 432.25) {curSlide = 682; spalte = "a"; showSlide();}
if (vers >= 432.26 && vers <= 434.19) {curSlide = 682; spalte = "b"; showSlide();}
if (vers >= 434.20 && vers <= 436.13) {curSlide = 683; spalte = "a"; showSlide();}
if (vers >= 436.14 && vers <= 438.07) {curSlide = 683; spalte = "b"; showSlide();}
if (vers >= 438.08 && vers <= 440) {curSlide = 684; spalte = "a"; showSlide();}
if (vers >= 440.02 && vers <= 441.25) {curSlide = 684; spalte = "b"; showSlide();}
if (vers >= 441.26 && vers <= 443.21) {curSlide = 685; spalte = "a"; showSlide();}
if (vers >= 443.22 && vers <= 445.15) {curSlide = 685; spalte = "b"; showSlide();}
if (vers >= 445.16 && vers <= 447.10) {curSlide = 686; spalte = "a"; showSlide();}
if (vers >= 447.11 && vers <= 449.04) {curSlide = 686; spalte = "b"; showSlide();}
if (vers >= 449.05 && vers <= 450.28) {curSlide = 687; spalte = "a"; showSlide();}
if (vers >= 450.29 && vers <= 452.22) {curSlide = 687; spalte = "b"; showSlide();}
if (vers >= 452.23 && vers <= 454.16) {curSlide = 688; spalte = "a"; showSlide();}
if (vers >= 454.17 && vers <= 456.10) {curSlide = 688; spalte = "b"; showSlide();}
if (vers >= 456.11 && vers <= 458.04) {curSlide = 689; spalte = "a"; showSlide();}
if (vers >= 458.05 && vers <= 459.28) {curSlide = 689; spalte = "b"; showSlide();}
if (vers >= 459.29 && vers <= 461.22) {curSlide = 690; spalte = "a"; showSlide();}
if (vers >= 461.23 && vers <= 463.16) {curSlide = 690; spalte = "b"; showSlide();}
if (vers >= 463.17 && vers <= 465.10) {curSlide = 691; spalte = "a"; showSlide();}
if (vers >= 465.11 && vers <= 467.04) {curSlide = 691; spalte = "b"; showSlide();}
if (vers >= 467.05 && vers <= 467.12) {curSlide = 691; spalte = "a (unten)"; showSlide();}
if (vers >= 467.14 && vers <= 467.22) {curSlide = 691; spalte = "b (unten)"; showSlide();}

}