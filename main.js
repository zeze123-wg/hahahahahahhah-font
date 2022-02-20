var subtarara;
nostrilx = 0;
nostrily = 0;
right_thing = 0;
left_thing = 0;
img ="";

function preload(){
    img = loadImage("https://th.bing.com/th/id/OIP.q2R6hsdm0g8fRIFvFnSUhwHaHY?w=217&h=216&c=7&r=0&o=5&pid=1.7");
}

function setup() {
    vidio = createCapture(VIDEO);
    vidio.size(500, 423);
    vidio.position(100, 100)
    canvas = createCanvas(400, 400);
    canvas.position(1000, 100);

    posenet = ml5.poseNet(vidio, model_model);
    posenet.on('pose', model_gotkid);
}

function model_model() {
    console.log("idk what to write, model is indagdad");
}


function model_gotkid(kid) {
    if (kid.length > 0) {
        console.log(kid);
        nostrilx = kid[0].pose.nose.x;
        nostrily = kid[0].pose.nose.y;

        console.log("your nostril's x coord is" + nostrilx + "your nostril's y coord is " + nostrily);

        right_thing = kid[0].pose.rightWrist.x;
        left_thing = kid[0].pose.leftWrist.x;
        subtarara = Math.floor(left_thing - right_thing);
        console.log("your right_thingy is at" + right_thing + "your left_thingy is at" + left_thing + "oyoyoyoyo" + subtarara);

    }
}

function draw() {
    console.log("ooyoyoyooyoyyooyoyoyoyooyooyoyoyoyyo");
    document.getElementById("status").innerHTML = "side of a square = " + subtarara + " px";
    background("white");
    fill("red");
    textSize(subtarara);
    text("KID",nostrilx,nostrily);

}