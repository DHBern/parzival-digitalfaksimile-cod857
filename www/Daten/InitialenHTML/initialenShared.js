window.addEventListener('load', function() {
  	setCommonVars();
	checkURLParam();
});

function setCommonVars() {
	infoButton = document.getElementById('infoButton');
	infoButton.addEventListener("click", function() {
  		initialenInfoFenster('../info/infoInitialen.html')
	});

	werkSelect = document.getElementById("werkSelect");
	werkSelect.addEventListener("change", MM_jumpMenuDocs);

	buchSelect = document.getElementById("buchSelect");
	buchSelect.addEventListener("change", MM_jumpMenuParts);

	prevButton = document.getElementById('prevButton');
	prevButton.addEventListener('click', goPrev);

	nextButton = document.getElementById('nextButton');
	nextButton.addEventListener('click', goNext);

	screenSizeButton = document.getElementById('screenSizeButton');
	screenSizeButton.addEventListener('click', bildschirmGroesse );

	propSizeButton = document.getElementById('propSizeButton');
	propSizeButton.addEventListener('click', proportionaleGroesse );

	initiale = document.getElementById('Initiale');
	initiale.addEventListener('click', codexLaden );

	prevButton2 = document.getElementById('prevButton2');
	prevButton2.addEventListener('click', goPrev);

	nextButton2 = document.getElementById('nextButton2');
	nextButton2.addEventListener('click', goNext);

}