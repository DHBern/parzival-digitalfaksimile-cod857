var impressumArea;

window.addEventListener('load', function() {
  setListeners();
});


function setListeners() {
	impressumArea = document.getElementById('impressumArea');
	impressumArea.addEventListener("click", function() {
  		infoFenster('info/impressum.html');
	});

	anleitungsArea = document.getElementById('Bedienungsanleitung');
	anleitungsArea.addEventListener("click", function() {
  		infoFenster('info/anleitung.html');
	});
}

