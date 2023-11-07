interface User {
  firstName: string
  age: number
}

function getArrayUser ({ firstName, age }: User): [string, number] {
  return [firstName, age]
}

const user: User = {
  firstName: 'Kirill',
  age: 19
}

console.log(getArrayUser(user))
