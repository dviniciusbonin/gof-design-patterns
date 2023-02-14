import { IButton } from './button'
import { IInput } from './input'

export interface IFactory {
  createButton(): IButton
  createInput(): IInput
}
