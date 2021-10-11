import { SignupController } from './Signup'
import { MissingParamsError } from '../errors/MissingParamsError'

describe('signup controller', () => {
  test('should be return 400 if no name is provider', () => {
    const sut = new SignupController()
    const httpRequest = {
      body: {
        email: 'any_email@gmail.com',
        password: 'any_password',
        passConfirmation: 'any_password'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamsError('name'))
  })

  test('should be return 400 if no email is provider', () => {
    const sut = new SignupController()
    const httpRequest = {
      body: {
        name: 'any_name',
        password: 'any_password',
        passConfirmation: 'any_password'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamsError('email'))
  })
})
