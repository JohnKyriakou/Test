function createCircle(radius){
    return{
        radiusf,
        draw:function(){
            console.log('draw');

        }
    }
};

const circle=createCircle(1);


function Circle(radius){
    this.radius=radius;
    this.draw=function(){
        console.log('draw');

    }
}


const another=new Circle(1);

