//shape class
class Shape {
    constructor(color) {
      this.color = color;
    }
  
    render() {
      throw new Error("Not implemented");
    }
  }

//circle class
class Circle extends Shape {
    render() {
      return `<circle cx="150" cy="100" r="50" fill="${this.color}" />`;
    }
  }
 
//triangle class
class Triangle extends Shape {
    render() {
      return `<polygon points="150,50 100,150 200,150" fill="${this.color}" />`;
    }
  }
  
//square class
class Square extends Shape {
    render() {
      return `<rect x="100" y="50" width="100" height="100" fill="${this.color}" />`;
    }
  }
  
module.exports = { Shape, Circle, Triangle, Square };
  