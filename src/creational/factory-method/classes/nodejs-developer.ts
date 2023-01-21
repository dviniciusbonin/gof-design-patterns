import { IDeveloper } from '../interfaces/developer-interface'
export class NodeJsDeveloper implements IDeveloper {
  develop(): void {
    console.log('I develop apis with nodejs')
  }
}
