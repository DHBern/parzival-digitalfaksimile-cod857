function checkWerkwechsel() {

	
	
	if (werk=="Parzival") {
	
			if (curSlide > 289 && curSlide < 417){
			window.location.href="nibelungen.html?" + curSlide + "&" + zoom;
			}
			
			if (curSlide > 416 && curSlide < 452){
			window.location.href="klage.html?" + curSlide + "&" + zoom;
			}
			
			if (curSlide > 451 && curSlide < 561){
			window.location.href="karl.html?" + curSlide + "&" + zoom;
			}
			
			if (curSlide >= 561 && curSlide <= 692){
			window.location.href="willehalm.html?" + curSlide + "&" + zoom;
			}
			
			if (curSlide == 693){
			window.location.href="FvS.html?" + curSlide + "&" + zoom;
			}
			
			if (curSlide > 693 && curSlide < 704){
			window.location.href="KJ.html?" + curSlide + "&" + zoom;
			}
			
			if (curSlide >= 704 && curSlide <= 707){
			window.location.href="Hinvart.html?" + curSlide + "&" + zoom;
			}
			
			if (curSlide > 707){
			window.location.href="Hinvart.html?707" + "&" + zoom;
			}
				
		}
		
		
		if (werk=="Nibelungenlied") {
	
			if (curSlide < 290){
			window.location.href="parzival.html?" + curSlide + "&" + zoom;
			}
			
			if (curSlide > 417 && curSlide < 452 && direktEingabe==false){
			window.location.href="klage.html?" + curSlide + "&" + zoom;
			}
			
			if (curSlide > 416 && curSlide < 452 && direktEingabe==true){
			window.location.href="klage.html?" + curSlide + "&" + zoom;
			}
			
			if (curSlide > 451 && curSlide < 561){
			window.location.href="karl.html?" + curSlide + "&" + zoom;
			}
			
			if (curSlide >= 561 && curSlide <= 692){
			window.location.href="willehalm.html?" + curSlide + "&" + zoom;
			}
			
			if (curSlide == 693){
			window.location.href="FvS.html?" + curSlide + "&" + zoom;
			}
			
			if (curSlide > 693 && curSlide < 704){
			window.location.href="KJ.html?" + curSlide + "&" + zoom;
			}
			
			if (curSlide >= 704 && curSlide <= 707){
			window.location.href="Hinvart.html?" + curSlide + "&" + zoom;
			}
			
			if (curSlide > 707){
			window.location.href="Hinvart.html?707" + "&" + zoom;
			}
				
		}
		
		
		if (werk=="Klage") {
	
			if (curSlide < 290){
			window.location.href="parzival.html?" + curSlide + "&" + zoom;
			}
			
			if (curSlide >=290 && curSlide < 416 && curSlide!=415 && direktEingabe==false && zoom!=50){
			window.location.href="nibelungen.html?" + curSlide + "&" + zoom;
			}
			
			if (curSlide >=290 && curSlide < 416 && direktEingabe==true && zoom!=50){
			window.location.href="nibelungen.html?" + curSlide + "&" + zoom;
			}
						
			if (curSlide >=290 && curSlide < 415 && zoom==50){
			window.location.href="nibelungen.html?" + curSlide + "&" + zoom;
			}
			
			if ((curSlide > 451 && curSlide < 561) && zoom!=50){
			window.location.href="karl.html?" + curSlide + "&" + zoom;
			}
			
			if (curSlide >= 561 && curSlide <= 692){
			window.location.href="willehalm.html?" + curSlide + "&" + zoom;
			}
			
			if (curSlide == 693){
			window.location.href="FvS.html?" + curSlide + "&" + zoom;
			}
			
			if (curSlide > 693 && curSlide < 704){
			window.location.href="KJ.html?" + curSlide + "&" + zoom;
			}
			
			if (curSlide >= 704 && curSlide <= 707){
			window.location.href="Hinvart.html?" + curSlide + "&" + zoom;
			}
			
			if (curSlide > 707){
			window.location.href="Hinvart.html?707" + "&" + zoom;
			}
				
		}
		
		
		if (werk=="Karl") {
	
				
			if (curSlide < 290){
			window.location.href="parzival.html?" + curSlide + "&" + zoom;
			}
			
			if (curSlide >=290 && curSlide < 416){
			window.location.href="nibelungen.html?" + curSlide + "&" + zoom;
			}
			
			if (curSlide >= 416 && curSlide < 452 && zoom!=50){
			window.location.href="klage.html?" + curSlide + "&" + zoom;
			}
			
			if (curSlide >= 416 && curSlide < 451 && zoom==50){
			window.location.href="klage.html?" + curSlide + "&" + zoom;
			}
			
			if (curSlide >= 561 && curSlide <= 692){
			window.location.href="willehalm.html?" + curSlide + "&" + zoom;
			}
			
			if (curSlide == 693){
			window.location.href="FvS.html?" + curSlide + "&" + zoom;
			}
			
			if (curSlide > 693 && curSlide < 704){
			window.location.href="KJ.html?" + curSlide + "&" + zoom;
			}
			
			if (curSlide >= 704 && curSlide <= 707){
			window.location.href="Hinvart.html?" + curSlide + "&" + zoom;
			}
			
			if (curSlide > 707 && curSlide!=1456 && curSlide!=1457){
			window.location.href="Hinvart.html?707" + "&" + zoom;
			}
				
		}
		
		
		if (werk=="Willehalm") {
	
			if (curSlide < 290){
			window.location.href="parzival.html?" + curSlide + "&" + zoom;
			}
			
			if (curSlide >=290 && curSlide <= 415){
			window.location.href="nibelungen.html?" + curSlide + "&" + zoom;
			}
			
			if (curSlide >= 416 && curSlide <= 451){
			window.location.href="klage.html?" + curSlide + "&" + zoom;
			}
			
			if (curSlide >= 452 && curSlide <= 560){
			window.location.href="karl.html?" + curSlide + "&" + zoom;
			}
			
			if (curSlide == 693){
			window.location.href="FvS.html?" + curSlide + "&" + zoom;
			}
			
			if (curSlide > 693 && curSlide < 704){
			window.location.href="KJ.html?" + curSlide + "&" + zoom;
			}
			
			if (curSlide >= 704 && curSlide <= 707){
			window.location.href="Hinvart.html?" + curSlide + "&" + zoom;
			}
			
			if (curSlide > 707){
			window.location.href="Hinvart.html?707" + "&" + zoom;
			}
				
		}
		
		
		if (werk=="Friedrich v. Sonnenburg") {
	
			if (curSlide < 290){
			window.location.href="parzival.html?" + curSlide + "&" + zoom;
			}
			
			if (curSlide >=290 && curSlide <= 415){
			window.location.href="nibelungen.html?" + curSlide + "&" + zoom;
			}
			
			if (curSlide >= 416 && curSlide <= 451){
			window.location.href="klage.html?" + curSlide + "&" + zoom;
			}
			
			if (curSlide >= 452 && curSlide <= 560){
			window.location.href="karl.html?" + curSlide + "&" + zoom;
			}
			
			if (curSlide >=561 && curSlide <= 692){
			window.location.href="willehalm.html?" + curSlide + "&" + zoom;
			}
			
			if (curSlide > 693 && curSlide < 704){
			window.location.href="KJ.html?" + curSlide + "&" + zoom;
			}
			
			if (curSlide >= 704 && curSlide <= 707){
			window.location.href="Hinvart.html?" + curSlide + "&" + zoom;
			}
			
			if (curSlide > 707){
			window.location.href="Hinvart.html?707" + "&" + zoom;
			}
				
		}
		
		
		if (werk=="Kindheit Jesu") {
	
			if (curSlide < 290){
			window.location.href="parzival.html?" + curSlide + "&" + zoom;
			}
			
			if (curSlide >=290 && curSlide <= 415){
			window.location.href="nibelungen.html?" + curSlide + "&" + zoom;
			}
			
			if (curSlide >= 416 && curSlide <= 451){
			window.location.href="klage.html?" + curSlide + "&" + zoom;
			}
			
			if (curSlide >= 452 && curSlide <= 560){
			window.location.href="karl.html?" + curSlide + "&" + zoom;
			}
			
			if (curSlide >=561 && curSlide <= 692){
			window.location.href="willehalm.html?" + curSlide + "&" + zoom;
			}
			
			if (curSlide == 693 && zoom!=50){
			window.location.href="FvS.html?693" + "&" + zoom;
			}
			
			if (curSlide < 693 && curSlide > 691 && zoom==50){
			window.location.href="FvS.html?693" + "&" + zoom;
			}
			
			if (curSlide >= 704 && curSlide <= 707){
			window.location.href="Hinvart.html?" + curSlide + "&" + zoom;
			}
			
			if (curSlide > 707){
			window.location.href="Hinvart.html?707" + "&" + zoom;
			}
				
		}
		
		
		if (werk=="Unser vrouwen hinvart") {
			
			if (curSlide < 290){
			window.location.href="parzival.html?" + curSlide + "&" + zoom;
			}
			
			if (curSlide >=290 && curSlide <= 415){
			window.location.href="nibelungen.html?" + curSlide + "&" + zoom;
			}
			
			if (curSlide >= 416 && curSlide <= 451){
			window.location.href="klage.html?" + curSlide + "&" + zoom;
			}
			
			if (curSlide >= 452 && curSlide <= 560){
			window.location.href="karl.html?" + curSlide + "&" + zoom;
			}
			
			if (curSlide >=561 && curSlide <= 692){
			window.location.href="willehalm.html?" + curSlide + "&" + zoom;
			}
			
			if (curSlide == 693){
			window.location.href="FvS.html?" + curSlide + "&" + zoom;
			}
			
			if (curSlide <= 703 && curSlide >= 694 && zoom !=50){
			window.location.href="KJ.html?" + curSlide + "&" + zoom;
			}
			
			if (curSlide < 703 && curSlide >=694 && zoom==50){
			window.location.href="KJ.html?" + curSlide + "&" + zoom;
			}			
						
			if (curSlide > 707){
			curSlide=707;
			}
				
		}
	




else {return;}

}
		