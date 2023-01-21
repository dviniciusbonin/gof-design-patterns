import { Developer } from './developer-abstract'
import { IDeveloper } from '../interfaces/developer-interface'
import { NodeJsDeveloper } from '../classes/nodejs-developer'

export class BackendDeveloper extends Developer {
  makeDeveloper(): IDeveloper {
    return new NodeJsDeveloper()
  }
}
