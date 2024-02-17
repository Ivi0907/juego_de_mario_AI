img = "";
noseX = 0;
noseY = 0;
marioX = 325;
marioY = 325;


function preload() {
	world_start = loadSound("world_start.wav");
	mario_coin = loadSound("coin.wav");
	mario_jump = loadSound("jump.wav");
	mario_kick = loadSound("kick.wav");
	mario_die = loadSound("mariodie.wav");
	mario_gameover = loadSound("gameover.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas");
	instializeInSetup(mario);

	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent('game_console');
	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function modelLoaded() {
	console.log('Modelo cargado :3');
  }

  function gotPoses(results)
{
  if(results.length > 0)
  {
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    //console.log("noseX = " + noseX +", noseY = " + noseY);
  }
}

function draw() {
	if(noseX < 300)
	{
	  document.getElementById("posx").innerHTML = "Posisión: Izquierda";
	}
	if(noseX > 300)
	{
		document.getElementById("posx").innerHTML = "Posisión: Derecha";
	}
	if(noseY < 168)
	{
		document.getElementById("posy").innerHTML = "Posisión: Arriba";
	}
	if(noseY > 168)
	{
		document.getElementById("posy").innerHTML = "Posisión: Abajo";
	}
	game()

	//Image(img,marioX, marioY, 40,70);
}






