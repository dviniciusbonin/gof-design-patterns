import { IDeveloper } from '../interfaces/developer-interface'

export class ReactDeveloper implements IDeveloper {
  develop(): void {
    console.log('I develop UI for web with React.js')
  }
}
