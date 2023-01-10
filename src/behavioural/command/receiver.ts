import { InMemoryDatabase } from './in-memory-databse'

export interface User {
  name: string
}

export class UsersRepository {
  constructor(private readonly database: InMemoryDatabase) {}

  create(name: string): void {
    this.database.create(name)
  }

  list(): User[] {
    return this.database.list()
  }

  delete(name: string): void {
    this.database.delete(name)
  }
}
