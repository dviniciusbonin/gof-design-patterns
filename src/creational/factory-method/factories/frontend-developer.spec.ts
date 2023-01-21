import { ReactDeveloper } from '../classes/react-developer'
import { FrontendDeveloper } from './frontend-developer'

describe('Frontend developer', () => {
  it('should be able to returns instance of NodeJsDeveloper', () => {
    const frontendDeveloper = new FrontendDeveloper()
    expect(frontendDeveloper.makeDeveloper()).toBeInstanceOf(ReactDeveloper)
  })
})
