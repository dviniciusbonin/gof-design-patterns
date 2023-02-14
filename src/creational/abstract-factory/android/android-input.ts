import { IInput } from '../interfaces/input'

export class AndroidInput implements IInput {
  paint(): void {
    console.log('Android input')
  }
}
