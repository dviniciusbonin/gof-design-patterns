import { CreateUserCommand } from './create-user-command'
import { InMemoryDatabase } from './in-memory-databse'
import { Invoker } from './invoker'
import { User, UsersRepository } from './receiver'

const database = new InMemoryDatabase()
const recevier = new UsersRepository(database)
const command = new CreateUserCommand(
  {
    name: 'Example',
  },
  recevier
)

const invoker = new Invoker()

console.info('Before create user command', { users: database.list() })

invoker.addCommand('create-user', command)
invoker.executeCommand('create-user')

console.info('After create user command execute', { users: database.list() })

invoker.undoCommand('create-user')

console.info('After create user command undo', { users: database.list() })
