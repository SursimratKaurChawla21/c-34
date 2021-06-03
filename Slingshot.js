class Slingshot{
constructor(bodyA,pointB){
  var  options ={bodyA:bodyA,pointB:pointB,stiffness:0.4,length:250}
  this.sling=constraint.create(options)
  World.add(world,this.sling)

}
display(){
    var posA= this.sling.bodyA.position
    var posB= this.sling.pointB
    line(posA.x,posA.y,posB.x,posB.y)

}
}