 
let mic;
let giff;
let image;

/*function preload() {
  gif_imatge = loadImage("IMG/giphy.gif");
  gif_giff = createImg("IMG/giphy.gif");
} */

function setup() {
  createCanvas(windowWidth, windowHeight);
 
  noStroke();
//background('black');
    mic = new p5.AudioIn();
    mic.start();
    
}


function draw() {
  var boca_w = width/1.2;
  micLevel = mic.getLevel();
    mov= map(micLevel, 0, 1, 10, 200);
  // giff.position(0,0);
    //giff.size(700,700);

  noStroke();
  push();
  translate(width/2, height/2);
  rectMode(CENTER);
    
    
    

//braç squerre
    fill('#cc0052');
    ellipse(width/3,height/1.9, width/4, height/1.2,70)
//cos
  fill('#b30047');
    ellipse(0,height/2.5, width/1.2, height/1.2+mov,0);
    
    //braç dret
    fill(' #cc0052');
    ellipse(width/-3,height/1.9, width/4, height/1.2,70+mov)

//cap
    
  
   fill('#ffcccc');
    ellipse(0,0, width/2.5, height/2+mov,10);
       
        fill('#ff9999');
ellipse(width/-8, height/200, width/15+mov, height/25+mov);
ellipse(width/8, height/200, width/15+mov, height/25+mov);
    fill('white');
    rect(50,height/2,width/10,height/2);
    
    fill('whitesmoke');
  ellipse(0, height/5,width/3+mov, height/2.5+mov);


    
   fill('white');
    ellipse(width/10,height/-10,width/12+mov,height/8+mov);
    ellipse(width/-10,height/-10,width/12+mov,height/8+mov);
    fill('black');
    ellipse(width/-11,height/-9,width/40+mov,height/20+mov);
    ellipse(width/11,height/-9,width/40+mov,height/20+mov);
    fill('white');
    ellipse(width/10,height/-8.5,width/200+mov,height/200+mov);
    ellipse(width/-12,height/-8.5,width/200+mov,height/200+mov);
    
    //barret
    fill('#b30047');
    triangle(width/-2.5, height/-8.5, width/200, height/-2.5, width/5.5,height/-6);

    fill('  #f2f2f2');
    rect(0,height/-5,width/2.5,height/8,40);
    
   ellipse(width/-2.5, height/-10, width/10, width/10);
    
    fill('white');
    rect(0,height/-4.6, width/2.9, height/16, 40);
    ellipse(width/-2.4, height/-10, width/30, width/30);
    
    
  //orelles
    fill('#ffcccc');
    ellipse(width/4.8,height/-20,width/15,height/10);
     ellipse(width/-4.8,height/-20,width/15,height/10);
    
    
   
      pop();
  
  //nas
  noStroke();
  fill('#ff6666');
  ellipse(width/2,height/2+mov,width/10+mov,height/12+mov, radians(20), radians(15+mov));
    fill('white');
    ellipse(width/2, height/2.02,width/40+mov,height/60+mov);
    fill('black');
    ellipse(width/2, height/1.6,width/70+mov,height/200+mov);
    
}


function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

function touchStarted(){
    getAudioContext().resume();
}