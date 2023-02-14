import { IButton } from '../interfaces/button'
import { IFactory } from '../interfaces/factory'
import { IInput } from '../interfaces/input'
import { AndroidButton } from './android-button'
import { AndroidInput } from './android-input'

export class AndroidFactory implements IFactory {
  createButton(): IButton {
    return new AndroidButton()
  }
  createInput(): IInput {
    return new AndroidInput()
  }
}
