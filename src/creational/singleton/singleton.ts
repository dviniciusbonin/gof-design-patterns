import { UsersDatabase } from './database'

export class Singleton {
  private static _instance?: UsersDatabase

  private constructor() {}

  static get instance(): UsersDatabase {
    if (!this._instance) this._instance = new UsersDatabase()

    return this._instance
  }
}
