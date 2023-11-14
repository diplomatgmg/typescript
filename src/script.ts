class Square {
  a: number
  b: number

  constructor (a: number, b: number) {
    this.a = a
    this.b = b
  }

  getArea (): number {
    return this.a * this.b
  }
}

const square = new Square(5, 10)
console.log(square.getArea())

export default Square
