import Square from '../../src/script'

it('should calculate area correctly', () => {
  const square = new Square(5, 10)
  expect(square.getArea()).toEqual(50)
})
