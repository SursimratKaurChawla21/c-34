  const Engine=Matter.Engine;
  const Bodies=Matter.Bodies;
  const World =Matter.World;
  const constraint=Matter.Constraint;
  var engine,world
  
  function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world
  ground= new Ground(400,380,800,10)
  box1 = new Box(600,300,50,50)
  box2 = new Box(600,300,50,50)
  box3 = new Box(600,300,50,50)
  box4 = new Box(600,300,50,50)
  box5 = new Box(600,300,50,50)
  box6 = new Box(600,300,50,50)

  box7 = new Box(700,300,50,50)
  box8 = new Box(700,300,50,50)
  box9 = new Box(700,300,50,50)
  box10 = new Box(700,300,50,50)
  box11= new Box(700,300,50,50)


  ball = new Ball(300,200,40,40)
  slingshot = new Slingshot(ball.Body,{x:450,y:50})
}

function draw() {
  background("yellow");  

  Engine.update(engine)
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();

  ground.display();
  ball.display();
  slingshot.display();

}

function mouseDragged(){
  Matter.Body.setPosition(ball.Body,{x:mouseX,y:mouseY})
}