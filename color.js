//import using reqird
var x = require('./shape.js')

module.exports = class circle extends x{
    constructor (){
        super();
    }
    calculatearea(){
        console.log("Calculate area from circle");
    }
}
