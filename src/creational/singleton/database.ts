export interface IUser {
  name: string
}

export class UsersDatabase {
  private _users: IUser[] = []

  add(user: IUser): void {
    this._users.push(user)
  }

  get users(): IUser[] {
    return this._users
  }
}
