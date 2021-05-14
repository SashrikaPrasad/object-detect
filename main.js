img =""
status =""
objects = [];

function preload() {
    img = loadImage("dog_cat.jpg");
}
 function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();

    ObjectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = " Status : Detecting Objects " ;
}

function modelLoaded() { 
    console.log( ' ModelLoaded' ) ; 
    status = true;
    ObjectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if(error) {
        console.log(error);
    }
    console.log(results);
    object = results;
}



function draw() {
    image(img, 0, 0, 640, 420);
    if(status !="")
    {
        for(i=0; i < objects.length; i++) {
        document.getElementById("status").innerHTML = "Status : Object Detected";
        
        fill("#FF0000");
        percent = floor(objects[i].confidence * 100);
        text(object[i].label + " " + percent + "%", object[i].x+ 15, object[i].y+ 15 );
        nofill();
        stroke("#FF0000");
        rect(object[i].x, object[i].y, object[i].width, object[i].height);
        }
        
    }
}

    




