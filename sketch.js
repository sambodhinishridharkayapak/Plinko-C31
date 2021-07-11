const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Events = Matter.Events;

var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var  music ; 

function setup() {
  createCanvas(800, 800);
  
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=80; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
for (var l =0; l <=180; l = l+80)
{
  divisions.push(new Divisions(l, height - divisionHeight/2, 10, divisionHeight));
}
for (var o = 0; o <=280; o = o + 80)
{
  divisions.push(new Divisions(o, height - divisionHeight/2, 10, divisionHeight));
}
for (var p = 0; p <=380; p = p+ 80)
{
  divisions.push(new Divisions(p, height - divisionHeight/2, 10, divisionHeight));
}
for (var q = 0; q <=480; q = q + 80)
{
  divisions.push(new Divisions(q, height - divisionHeight/2, 10, divisionHeight));
}
for (var t = 0; t <=580; t = t + 80)
{
  divisions.push(new Divisions(t, height - divisionHeight/2, 10, divisionHeight));
}
for (var u = 0; u <=680; u = u + 80)
{
  divisions.push(new Divisions(u, height - divisionHeight/2, 10, divisionHeight));
}
for (var v = 0; v <=770; v = v + 80)
{
  divisions.push(new Divisions(v, height - divisionHeight/2, 10, divisionHeight));
}
  //create 1st row of plinko objects
  for (var i = 75; i <=width; i=i+50) { 
    plinkos.push(new Plinko(i,75));
  }

  //create 2nd row of plinko objects
  for (var h = 50; h <=width-10; h=h+50) 
  {
    plinkos.push(new Plinko(h,175));
  }

  //create 3rd row of plinko objects
for (var n = 75; n<=width; n=n+50)
{
  plinkos.push(new Plinko(n,275));
  plinkos.x = plinkos.x+30;
}
//create 4rth row of plinko objects
for(var w = 50; w<=width-10; w=w+50)
{
  plinkos.push(new Plinko(w,375));
  plinkos.x = plinkos.x +30;
} 
}
 


function draw() {
  background(0);
  textSize(20)
  Engine.update(engine);
  ground.display();
  
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
  for (var h = 0;h  < plinkos.length; h++) {
    plinkos[h].display();
  }
   for(var n = 0; n>plinkos.length; n++)
   {
     plinkos[n].display();
   }

  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
  for (var l = 0; l < divisions.length; l++)
  {
    divisions[l].display();
  }
 for (var o = 0; o < divisions.length; o++)
 {
   divisions[o].display();
 }
 for (var p = 0; p < divisions.length; p++)
 {
   divisions[p].display();
 }
 for (var q = 0; q < divisions.length; q++)
 {
   divisions[q].display();
 }
 for (var t = 0; t < divisions.length; t++)
 {
   divisions[t].display();
 }
 for (var u = 0; u < divisions.length; u++)
 {
   divisions[u].display();
 }
 for (var v = 0; v < divisions.length; v++)
 {
   divisions[v].display();
 }
  

 if(frameCount%100===0)
{
 particles.push(new Particle(random(width/2-10, width/2+10), 10,10));
 
}
for (var x=0; x<particles.length; x++)
{
  particles[x].display();
}
   
}