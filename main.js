function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("div_canvas");
	instializeInSetup(mario);
}

function draw() {
	game()
}






