import { NodeJsDeveloper } from '../classes/nodejs-developer'
import { BackendDeveloper } from './backend-developer'

describe('Backend developer', () => {
  it('should be able to returns instance of NodeJsDeveloper', () => {
    const backendDeveloper = new BackendDeveloper()
    expect(backendDeveloper.makeDeveloper()).toBeInstanceOf(NodeJsDeveloper)
  })
})
