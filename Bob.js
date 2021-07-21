class Bob{
    constructor(x,y){
        var options = {
          restitution:1.1,
          density:1.2  
        }
        this.body = Bodies.circle(x,y,25,options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        fill("white");
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, 25);
    }
}