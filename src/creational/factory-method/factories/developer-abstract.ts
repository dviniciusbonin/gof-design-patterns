import { IDeveloper } from '../interfaces/developer-interface'

export abstract class Developer {
  abstract makeDeveloper(): IDeveloper

  developerSoftware(): void {
    const developer = this.makeDeveloper()
    developer.develop()
  }
}
