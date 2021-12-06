var formas = new Array("e-resize", "ne-resize", "n-resize", "se-resize");
var numurs = 0;
var virziens = 1; // vērtības 0 vai 1 
function pagriezt() {
	document.body.style.cursor = formas[numurs];
    numurs++;
    if (numurs==formas.length) {
        numurs=0;
    }
    setTimeout("pagriezt()",100);
}
if (virziens) {
    formas.reverse();
}
window.onload = pagriezt;