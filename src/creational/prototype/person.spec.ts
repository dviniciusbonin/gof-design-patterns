import { Person } from './person'

describe('Person prototype', () => {
  it('should be able to clone person object', () => {
    const person1 = new Person('Teste')
    const person2 = person1.clone()

    expect(person2).toBeInstanceOf(Person)
  })
})
