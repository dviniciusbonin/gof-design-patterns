import { Prototype } from './prototype'

export class Person implements Prototype {
  constructor(private _name: string) {}

  public set name(name: string) {
    this._name = name
  }

  public get name(): string {
    return this._name
  }

  clone(): this {
    return Object.create(this)
  }
}
