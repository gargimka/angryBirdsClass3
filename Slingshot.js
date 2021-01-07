class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }


    fly(){
        //null is empty, its like false
     this.sling.bodyA=null

    }


    display(){
        //if it is bird body, that means it is a physical body that means, its value is true
      if(this.sling.bodyA){

        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
      }
    }   
    
}