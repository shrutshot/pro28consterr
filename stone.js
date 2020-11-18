class stone{
    constructor(x,y,w,h){
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.body= Bodies.rectangle(x,y,w,h,options);
        
        
        this.w=w;
        this.h=h;
        this.image=loadImage("sprites/stone.png");
        World.add(world, this.body);
    }
    display(){
        
        image(this.image, this.body.position.x, this.body.position.y, this.w, this.h);
    }
    
}