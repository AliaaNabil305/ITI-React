class Polygon {
    constructor(name) {
      this.name = name;
    }
  
    toString() {
      return `${this.name} - Area: ${this.area()}`;
    }
  }
  
  class Rectangle extends Polygon {
    constructor(width, height) {
      super("Rectangle");
      this.width = width;
      this.height = height;
    }
  
    area() {
      return this.width * this.height;
    }
  }
  
  class Square extends Polygon {
    constructor(side) {
      super("Square");
      this.side = side;
    }
  
    area() {
      return this.side * this.side;
    }
  }
  
  class Circle extends Polygon {
    constructor(radius) {
      super("Circle");
      this.radius = radius;
    }
  
    area() {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  class Triangle extends Polygon {
    constructor(base, height) {
      super("Triangle");
      this.base = base;
      this.height = height;
    }
  
    area() {
      return 0.5 * this.base * this.height;
    }
  }
  
  const shapes = [
    new Rectangle(4, 5),
    new Square(4),
    new Circle(3),
    new Triangle(4, 6)
  ];
  
  shapes.forEach(shape => {
    console.log(shape.toString());
    console.log("Parameters:", shape);
  });
  
  