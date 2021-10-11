import { MissingParamsError } from '../errors/MissingParamsError'
import { HttpRequest, HttpResponse } from '../protocol/http'
import { badRequest } from '../helpers/http-helper'
export class SignupController {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email']
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamsError(field))
      }
    }
  }
}
