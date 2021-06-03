class Ball{
    constructor (x,y,width,height){
        var options ={restitution:0.4}
        this.width=width
        this.height=height
        this.Body=Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.Body)
        
    }

     display(){
    var pos = this.Body.position
    fill("cyan")
    stroke("white")
    ellipseMode(CENTER)
    ellipse(pos.x,pos.y,this.width,this.height)
     }
}