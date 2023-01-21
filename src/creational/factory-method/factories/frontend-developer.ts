import { Developer } from './developer-abstract'
import { IDeveloper } from '../interfaces/developer-interface'
import { ReactDeveloper } from '../classes/react-developer'

export class FrontendDeveloper extends Developer {
  makeDeveloper(): IDeveloper {
    return new ReactDeveloper()
  }
}
