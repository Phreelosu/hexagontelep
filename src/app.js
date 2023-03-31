function calculate() {
	var a = parseFloat(document.getElementById("a").value);
	var b = parseFloat(document.getElementById("b").value);
	var area = a * b / 2;

	var totalArea = a * a * 3 * Math.sqrt(3) / 2 + b * b * 3 * Math.sqrt(3) / 2 - area;
	var tiles = Math.ceil(totalArea / 0.25);

	document.getElementById("result").innerHTML = "A gyepesítéshez szükséges gyeptégla mennyisége: " + tiles + " m^2";
}
