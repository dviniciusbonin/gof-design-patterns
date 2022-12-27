import { UsersDatabase } from './database'
import { Singleton } from './singleton'

describe('Singleton', () => {
  it('should returns the instance defined', () => {
    expect(Singleton.instance).toBeInstanceOf(UsersDatabase)
  })
})
