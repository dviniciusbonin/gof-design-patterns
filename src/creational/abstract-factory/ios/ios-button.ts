import { IButton } from '../interfaces/button'

export class IosButton implements IButton {
  paint(): void {
    console.log('Ios button')
  }
}
