//declare class
class Shape{
    constructor(color){
        this.color = 'color';
    }
    drawShape() {
        console.log('Shape');
    }
    calculateArea(){
        console.log('Area');
    }
}

//export class using module.exposrt 
module.exports = Shape;
