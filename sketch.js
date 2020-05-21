function setup(){
    createCanvas(500,500);
}

function draw(){
    
    background(104, 123, 196 );

    var sparkle = {
        locationX: random(width),
        locationY: random(height),
        size: random(1, 6)
    }

    fill (300);
    noStroke();
    ellipse(mouseX, mouseY, sparkle.size, sparkle.size);
    ellipse(sparkle.locationX, sparkle.locationY, sparkle.size, sparkle.size);
  
  	beginShape();
	vertex(200,350);
	bezierVertex(200,250,350,200,350,150);
	bezierVertex(350,100,250,50,200,140);
	bezierVertex(150,50,50,100,50,150);
	bezierVertex(50,200,200,250,200,350);
	
	endShape();
	
textSize(20);
textAlign(RIGHT);
text('PEACE', 70, 30);
  
textAlign(CENTER);
text('LOVE', 50, 50);
textAlign(LEFT);
text('HAPPINESS', 50, 70);




  

  
  
  
  
  
}