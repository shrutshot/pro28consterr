class mango{
    constructor(x,y,r){
        var options={
            isStatic:true,
            restitution:0,
            friction:1
        }
        this.body=Bodies.circle(x,y,r,options);
        this.image=loadImage("sprites/mango.png");
        this.x=x;
        this.y=y;
        this.r=r;
        World.add(world, this.body);
    }
    display(){
        circle(this.x,this.y,this.r);
        image(this.image,0,0,this.r);
    }
}