var myUnit = 50;

function setup(){
    
    //make cnv, pass it into function
    var cnv = createCanvas(200, 200);
    cnv.id('mycanvas');
    cnv.position(50, 100);
    setupRect(cnv);

    background(0);
}


function draw(){

    background(0);
    ellipse(getMouseX(), getMouseY(), 30, 30);

}