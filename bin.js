class Box {
  constructor(x,y,w,h){
var option={
    isStattic:false
}


this.body = Bodies.rectangle(x,y,w,h,option);
this.width = w;
this.height = h;
World.add(world,this.body);
//Matter.Body.setStatic(this.body,false)
    }

display(){
var pos = this.body.position;



rectMode(CENTER);
fill("red");
rect(pos.x,pos.y,this.width,this.height);




}


}