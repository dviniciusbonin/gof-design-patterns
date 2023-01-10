import { ICommand } from './command'

export class Invoker {
  private _commands: { [k: string]: ICommand } = {}

  addCommand(key: string, command: ICommand) {
    this._commands[key] = command
  }

  executeCommand(key: string) {
    this._commands[key].execute()
  }

  undoCommand(key: string) {
    this._commands[key].undo()
  }
}
