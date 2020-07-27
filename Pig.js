class Pig
{
    constructor(x,y)
    {
        var options = 
        {
            restitution: 0.6
        }
        this.body = Bodies.rectangle(x,y,50,50,options);
        this.width = 50;
        this.height = 50;
        World.add(world,this.body);
    }
    display()
    {
        var pos = this.body.position;
        rectMode();
        fill("green");
        rect(pos.x,pos.y,this.width,this.height);
    }
}