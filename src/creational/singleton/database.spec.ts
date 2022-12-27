import { UsersDatabase } from './database'

describe('Users database', () => {
  let database: UsersDatabase

  beforeAll(() => {
    database = new UsersDatabase()
  })

  it('Should be able to return the empty list of users', () => {
    expect(database.users).toHaveLength(0)
  })

  it('Should be able to return the list of users', () => {
    database.add({ name: 'example-1' })
    database.add({ name: 'example-2' })
    database.add({ name: 'example-3' })

    expect(database.users).toHaveLength(3)
    expect(database.users).toEqual(expect.arrayContaining([expect.any(Object)]))
  })
})
