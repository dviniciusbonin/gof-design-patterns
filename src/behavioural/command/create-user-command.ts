import { ICommand } from './command'
import { User, UsersRepository } from './receiver'

export class CreateUserCommand implements ICommand {
  constructor(
    private readonly user: User,
    private readonly repository: UsersRepository
  ) {}

  execute(): void {
    this.repository.create(this.user.name)
  }

  undo(): void {
    this.repository.delete(this.user.name)
  }
}
