import { IButton } from '../interfaces/button'

export class AndroidButton implements IButton {
  paint(): void {
    console.log('Android button')
  }
}
