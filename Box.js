class Box{
    constructor (x,y,width,height){
        var options ={restitution:0.2,friction:2}
        this.width=width
        this.height=height
        this.Body=Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.Body)
        
    }

     display(){
    var pos = this.Body.position
    push();
    translate(pos.x,pos.y)
    rotate(this.Body.angle)
    fill("red")
    stroke("white")
    rectMode(CENTER)
    rect(0,0,this.width,this.height)
    pop();
     }
}