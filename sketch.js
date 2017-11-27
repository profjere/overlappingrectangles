//
polygonInst=[];
//
count = 0;


function setup() {
  createCanvas(500,500);
  
}

function draw() {
   background(255);
 //   
    for (var i=0;i<count;i++){
       polygonInst[i].drawPolygon();
    }
//    
    fill(0);
    text("Keep clicking",20,20);
    text("Right Arrow to cut in half",20,height-50);
}

function mousePressed(){
 //  
   polygonInst[count]=new Polygon(mouseX,mouseY);
   count++;
}

function keyPressed(){
//   
   if (keyCode==RIGHT_ARROW){
   polygonInst=subset(polygonInst,0,polygonInst.length/2);
//
   count=int(count/2);
   }
   
}
