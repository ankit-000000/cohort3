// Introduction to how to create and use class
// some js related classes(Map, Data)

class Rectangle {
  constructor(height, width, color) {
    this.height = height;
    this.width = width;
    this.color = color;
  }

  area() {
    return this.width * this.height;
  }

  paint() {
    console.log(`Printing the area with color ${this.color}`);
  }
}

const rect = new Rectangle(2, 3, "red");
console.log(rect.area());
rect.paint();
