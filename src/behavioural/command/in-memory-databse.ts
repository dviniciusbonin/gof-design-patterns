import { User } from './receiver'

export class InMemoryDatabase {
  public users: User[] = []

  create(name: string): void {
    this.users.push({
      name,
    })
  }

  list(): User[] {
    return this.users
  }

  delete(name: string): void {
    const index = this.users.findIndex((user) => user.name === name)
    this.users.splice(index, 1)
  }
}
