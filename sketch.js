var sumoleft,sumoright,sumotop,sumobottom,sumoring;
var sumoleftImg,sumorightImg,sumotopImg,sumobottomImg,sumoringImg;




function preload(){
    sumoleftImg = loadImage('images/Sumo Left.png');
    sumorightImg = loadImage('images/Sumo Right.png');
    sumotopImg = loadImage('images/Sumo Top.png');
    sumoringImg= loadImage('images/SumoRing.png');
    sumobottomImg = loadImage('images/Sumo Bottom.png');
  
}

function setup(){
 createCanvas(1200,600);



 sumobottom=createSprite(650,460);
 sumobottom.addImage(sumobottomImg);
 sumobottom.scale=0.3;

 sumoleft=createSprite(480,280);
 sumoleft.addImage(sumoleftImg);
 sumoleft.scale=0.3;

 sumoright=createSprite(830,280);
 sumoright.addImage(sumorightImg);
 sumoright.scale=0.3;

 sumotop=createSprite(650,110);
 sumotop.addImage(sumotopImg);
 sumotop.scale=0.3;

 sumoring=createSprite(650,340);
 sumoring.addImage(sumoringImg);
 sumoring.scale=3.5;


}


function draw(){
    background(255);

 




 sumotop.depth=sumoring.depth;
 sumotop.depth=sumotop.depth+1;

 sumoright.depth=sumoring.depth;
 sumoright.depth=sumoright.depth+1;

 sumoleft.depth=sumoring.depth;
 sumoleft.depth=sumoleft.depth+1;

 sumobottom.depth=sumoring.depth;
 sumobottom.depth=sumobottom.depth+1;



    drawSprites();
}





function keyPressed(){
	if(keyCode === UP_ARROW){
	 sumotop.x=sumotop.x+0;
     sumotop.y=sumotop.y-10;
	 } 

     if(keyCode === DOWN_ARROW){
         sumotop.x=sumotop.x+0;
         sumotop.y=sumotop.y+10;
     }

     if(keyCode === LEFT_ARROW){
         sumotop.x=sumotop.x-10;
         sumotop.y=sumotop.y+0;
     }

     if(keyCode === RIGHT_ARROW){
         sumotop.x=sumotop.x+10;
         sumotop.y=sumotop.y+0
     }

     if(keyCode === 119){
        sumoright.x=sumoright.x+0;
        sumoright.y=sumoright.y-10
        } 
   
        if(keyDown('s')){
            sumoright.x=sumoright.x+0;
            sumoright.y=sumoright.y+10;
        }
   
        if(keyDown('a')){
            sumoright.x=sumoright.x-10;
            sumoright.y=sumoright.y+0;
        }
   
        if(keyDown('d')){
            sumoright.x=sumoright.x+10;
            sumoright.y=sumoright.y+0;
        }

        if(keyDown('g')){
            sumoleft.x=sumoleft.x+0;
            sumoleft.y=sumoleft.y-10
            } 
       
            if(keyDown('b')){
                sumoleft.x=sumoleft.x+0;
                sumoleft.y=sumoleft.y+10;
            }
       
            if(keyDown('v')){
                sumoleft.x=sumoleft.x-10;
                sumoleft.y=sumoleft.y+0;
            }
       
            if(keyDown('n')){
                sumoleft.x=sumoleft.x+10;
                sumoleft.y=sumoleft.y+0;
            }

            if(keyDown('i')){
                sumobottom.x=sumobottom.x+0;
                sumobottom.y=sumobottom.y-10
                } 
           
                if(keyDown('k')){
                    sumobottom.x=sumobottom.x+0;
                    sumobottom.y=sumobottom.y+10;
                }
           
                if(keyDown('j')){
                    sumobottom.x=sumobottom.x-10;
                    sumobottom.y=sumobottom.y+0;
                }
           
                if(keyDown('l')){
                    sumobottom.x=sumobottom.x+10;
                    sumobottom.y=sumobottom.y+0;
                }
 }