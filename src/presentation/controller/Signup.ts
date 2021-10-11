import { MissingParamsError } from '../errors/MissingParamsError'
import { HttpRequest, HttpResponse } from '../protocol/http'
import { badRequest } from '../helpers/http-helper'
export class SignupController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return badRequest(new MissingParamsError('name'))
    }

    if (!httpRequest.body.email) {
      return badRequest(new MissingParamsError('email'))
    }
  }
}
