
function setup() {
  // put setup code here
  createCanvas( windowWidth, windowHeight);
noStroke();
  colorMode(HSB, 1);
}








function draw() {
	let seconds = millis() / 1000;
	let hue = seconds % 1;//mouseY / windowHeight;
	let sat = 0.35;
	print('millis:', millis(), 'seconds', seconds);
	fill(hue, sat, 1)


	rect( mouseX, mouseY, 100, 100);
  // put drawing code here

}
