import { IFactory } from './interfaces/factory'
import { AndroidFactory } from './android/android-factory'
import { AndroidButton } from './android/android-button'
import { AndroidInput } from './android/android-input'
import { IosButton } from './ios/ios-button'
import { IosInput } from './ios/ios-input'
import { IosFactory } from './ios/ios-factory'
import { Ui } from './ui'

describe('Abstract factory', () => {
  let factory: IFactory

  it('should returns the android factory', () => {
    factory = new AndroidFactory()

    const button = factory.createButton()
    const input = factory.createInput()

    expect(button).toBeInstanceOf(AndroidButton)
    expect(input).toBeInstanceOf(AndroidInput)
  })

  it('should returns the ios factory', () => {
    factory = new IosFactory()

    const button = factory.createButton()
    const input = factory.createInput()

    expect(button).toBeInstanceOf(IosButton)
    expect(input).toBeInstanceOf(IosInput)
  })

  it('should returns the correct factory by param', () => {
    factory = Ui.create('ios')

    const button = factory.createButton()
    const input = factory.createInput()

    expect(button).toBeInstanceOf(IosButton)
    expect(input).toBeInstanceOf(IosInput)
  })

  it('should returns the correct factory by param', () => {
    factory = Ui.create('android')

    const button = factory.createButton()
    const input = factory.createInput()

    expect(button).toBeInstanceOf(AndroidButton)
    expect(input).toBeInstanceOf(AndroidInput)
  })

  it('should throw an error when system is not supported', () => {
    expect(() => Ui.create('windows')).toThrow(new Error('System unsupported'))
  })
})
