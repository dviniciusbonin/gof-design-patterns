import { IButton } from '../interfaces/button'
import { IFactory } from '../interfaces/factory'
import { IInput } from '../interfaces/input'
import { IosButton } from './ios-button'
import { IosInput } from './ios-input'

export class IosFactory implements IFactory {
  createButton(): IButton {
    return new IosButton()
  }
  createInput(): IInput {
    return new IosInput()
  }
}
