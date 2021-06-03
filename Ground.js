class Ground{
    constructor (x,y,width,height){
        var options ={isStatic:true}
        this.width=width
        this.height=height
        this.Body=Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.Body)
        
    }

     display(){
    var pos = this.Body.position
    rectMode(CENTER)
    rect(pos.x,pos.y,this.width,this.height)
     }
}