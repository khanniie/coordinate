var canvas = null;
var bounds = null;
var x = null;
var y = null;
    
document.addEventListener('mousemove', onMouseUpdate, false);
document.addEventListener('mouseenter', onMouseUpdate, false);
    
function onMouseUpdate(e) {
  x = e.clientX;
  y = e.clientY;
}


function setupRect(cnv){
  bounds = cnv.canvas.getBoundingClientRect();

  // thought i would need to account for stretching
  // but i guess not? I'll leave this here for the future just in case
  // width = cnv.canvas.width;
  // clientWidth = cnv.canvas.clientWidth;
  // xStretch = clientWidth / (width + 0.0);
  // height = cnv.canvas.height;
  // clientHeight = cnv.canvas.clientHeight;
  // yStretch = clientHeight / (height + 0.0);
}

function getMouseX(){
  if(canvas == null && bounds == null){
    console.log("canvas is null right now, did you call setupBounds in setup?");
    return;
  }  
  return (x - bounds.left);
}

function getMouseY(){
  if(canvas == null && bounds == null){
    console.log("canvas is null right now, did you call setupBounds in setup?");
    return;
  }  
  return (y - bounds.top);
}
