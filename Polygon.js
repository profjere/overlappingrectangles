function Polygon(x,y){
// 
   this.xP=x;
   this.yP=y;
   this.aFillColor=color(random(255),random(255),random(255),random(255));
  
//place first coordinates into array
   this.sideArrayX=[this.xP];
   this.sideArrayY=[this.yP];
 //
   append(this.sideArrayX,this.xP+random(30,200));
   append(this.sideArrayY,this.yP+random(-30,30));
      
   append(this.sideArrayX,this.xP+random(30,200));
   append(this.sideArrayY,this.yP+random(50,200));
      
      
   append(this.sideArrayX,this.xP+random(-30,30)); 
   append(this.sideArrayY,this.yP+random(50,200)); 
  
   
//   
this.drawPolygon=function(){
 //
 noStroke();
   fill(this.aFillColor);
//   
   beginShape();
   for (var i=0;i<4;i++)
      vertex(this.sideArrayX[i],this.sideArrayY[i]);
      //only one command in for loop
      vertex(this.sideArrayX[0],this.sideArrayY[0]);
   endShape();
   }
}


