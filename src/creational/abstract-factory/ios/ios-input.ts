import { IInput } from '../interfaces/input'

export class IosInput implements IInput {
  paint(): void {
    console.log('Ios input')
  }
}
