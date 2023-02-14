import { IFactory } from './interfaces/factory'
import { AndroidFactory } from './android/android-factory'
import { IosFactory } from './ios/ios-factory'

const systems = {
  android: new AndroidFactory(),
  ios: new IosFactory(),
}

export class Ui {
  static create(systemName: string): IFactory {
    const factory = systems[systemName]

    if (!factory) throw new Error('System unsupported')

    return factory
  }
}
