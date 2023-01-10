import { InMemoryDatabase } from './in-memory-databse'
import { UsersRepository } from './receiver'

describe('Receiver', () => {
  let database: InMemoryDatabase
  let receiver: UsersRepository

  beforeAll(() => {
    database = new InMemoryDatabase()
    receiver = new UsersRepository(database)
  })

  it('should be able to create an user', () => {
    receiver.create('name-teste')
    const users = database.list()
    expect(users[0]).toEqual({ name: 'name-teste' })
  })

  it('should be able to return a list of users', () => {
    expect(database.list()).toHaveLength(1)
  })

  it('should be able to delete an user', () => {
    receiver.delete('name-teste')
    expect(database.list()).toHaveLength(0)
  })
})
