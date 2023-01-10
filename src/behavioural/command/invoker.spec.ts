import { CreateUserCommand } from './create-user-command'
import { InMemoryDatabase } from './in-memory-databse'
import { Invoker } from './invoker'
import { UsersRepository } from './receiver'

describe('Invoker', () => {
  let database: InMemoryDatabase
  let recevier: UsersRepository
  let command: CreateUserCommand
  let invoker: Invoker

  beforeAll(() => {
    database = new InMemoryDatabase()
    recevier = new UsersRepository(database)
    command = new CreateUserCommand(
      {
        name: 'Example',
      },
      recevier
    )
    invoker = new Invoker()
  })

  it('should be able to execute command and create an user', () => {
    invoker.addCommand('create-user-test', command)
    invoker.executeCommand('create-user-test')

    expect(database.list()).toHaveLength(1)
  })

  it('should be able to undo command create user', () => {
    invoker.undoCommand('create-user-test')

    expect(database.list()).toHaveLength(0)
  })
})
