
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var img1 , img2 , img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15,img16,img17,
img18,img19,img20,img21,img22,img23,img24,img25,img26,img27,img28,img29,img30
var blankspace  
function preload()
{
img1=loadImage("images/picture 1.PNG")
img2=loadImage("images/picture 2.PNG")
img3=loadImage("images/picture 3.PNG")
img4=loadImage("images/picture 4.PNG")
img5=loadImage("images/picture 5.PNG")
img6=loadImage("images/pic 6.PNG")
img7=loadImage("images/pic 7.PNG")
img8=loadImage("images/pic 8.PNG")
img9=loadImage("images/pic 9.PNG")
img10=loadImage("images/pic 10.PNG")
img11=loadImage("images/pic 11.png")
img12=loadImage("images/pic 12.png")
img13=loadImage("images/pic 13.png")
img14=loadImage("images/pic 14.png")
img15=loadImage("images/pic 15.png")
img16=loadImage("images/pic 16.png")
img17=loadImage("images/pic 17.png")
img18=loadImage("images/pic 18.png")	
img19=loadImage("images/pic 19.png")
img20=loadImage("images/pic 20.png")
img21=loadImage("images/pic 21.png")
img22=loadImage("images/pic 22.png")
img23=loadImage("images/pic 23.png")
img24=loadImage("images/pic 24.png")
img25=loadImage("images/pic 25.png")
img26=loadImage("images/pic 26.png")
img27=loadImage("images/pic 27.png")
img28=loadImage("images/pic 28.png")
img29=loadImage("images/pic 29.png")
img30=loadImage("images/pic 30.png")

}

function setup() {

	createCanvas(3000, 3050);

	blankspace = createSprite(500,550,50,50)	
	pic1 = createSprite(100,150,50,50)
	pic1.addImage(img28)
	pic1.scale = 0.3
	pic2 = createSprite(300,150,50,50)
	pic2.addImage(img18)
	pic2.scale = 0.3
	pic3 = createSprite(500,150,50,50)
	pic3.addImage(img8)
	pic3.scale = 0.3
	pic4 = createSprite(700,150,50,50)
    pic4.addImage(img30)
	pic4.scale = 0.3
	pic5 = createSprite(900,150,50,50)
	pic5.addImage(img20)
	pic5.scale = 0.3
	pic6 = createSprite(1100,150,50,50)
	pic6.addImage(img10)
	pic6.scale = 0.3
	pic7 = createSprite(100,350,50,50)
	pic7.addImage(img27)
	pic7.scale = 0.3
	pic8 = createSprite(300,350,50,50)
	pic8.addImage(img17)
	pic8.scale = 0.3
	pic9 = createSprite(500,350,50,50)
	pic9.addImage(img7)
	pic9.scale = 0.3
	pic10 = createSprite(700,350,50,50)
	pic10.addImage(img16)
	pic10.scale = 0.3
	pic11 = createSprite(900,350,50,50)
	pic11.addImage(img26)
	pic11.scale = 0.3
	pic12 = createSprite(1100,350,50,50)
	pic12.addImage(img6)
	pic12.scale = 0.3
	pic13= createSprite(100,550,50,50)
	pic13.addImage(img25)
	pic13.scale = 0.3
	pic14= createSprite(300,550,50,50)
	pic14.addImage(img15)
	pic14.scale = 0.3
	pic16= createSprite(700,550,50,50)
	pic16.addImage(img4)
	pic16.scale = 0.4
	pic17= createSprite(900,550,50,50)
	pic17.addImage(img14)
	pic17.scale = 0.3
	pic18= createSprite(1100,550,50,50)
	pic18.addImage(img24)
	pic18.scale = 0.3
	pic19= createSprite(100,750,50,50)
	pic19.addImage(img23)
	pic19.scale = 0.3
	pic20= createSprite(300,750,50,50)
	pic20.addImage(img13)
	pic20.scale = 0.3
	pic21 = createSprite(500,750,50,50)
	pic21.addImage(img3)
	pic21.scale = 0.3
	pic22 = createSprite(700,750,50,50)
	pic22.addImage(img22)
	pic22.scale = 0.3
	pic23= createSprite(900,750,50,50)
	pic23.addImage(img12)
	pic23.scale = 0.3                                            
	pic24= createSprite(1100,750,50,50)
	pic24.addImage(img2)
	pic24.scale = 0.3
	pic25= createSprite(100,950,50,50)
	pic25.addImage(img21)
	pic25.scale = 0.3
	pic26= createSprite(300,950,50,50)
	pic26.addImage(img11)
	pic26.scale = 0.3
	pic27= createSprite(500,950,50,50)
	pic27.addImage(img1)
	pic27.scale = 0.3
	pic28= createSprite(700,950,50,50)
	pic28.addImage(img9)
	pic28.scale = 0.3
	pic29= createSprite(900,950,50,50)
	pic29.addImage(img29)
	pic29.scale = 0.3
	pic30= createSprite(1100,950,50,50)
	pic30.addImage(img19)
	pic30.scale = 0.3



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(268);



  
  drawSprites();
 
}
function mouseDragged(){
pic1.x = mouseX
pic1.y= mouseY
pic2.x=mouseX
pic2.y=mouseY
}
	function mouseReleased(){
		
	}
  


