const Shape = require('./Shape');
function Circle(x, y, radius){
    Shape.call(this, x, y);
    this.radius = radius;
}
Circle.prototype = Object.create(Shape.prototype);

const circle = new Circle(2,4,1);
const newposition = circle.move(1,1);
console.log(circle.position);