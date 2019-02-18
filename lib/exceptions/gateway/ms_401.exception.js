

import { InternalError } from "../internal_error.exception";
import { MS_401 } from "../../strings";
import { HttpStatus } from "../../constants";

export class MicroserviceNotAllowed extends InternalError {
  constructor(name) {
    super()
    this.status = HttpStatus.UNAUTHORIZED
    this.message = MS_401
    this.data = { name }
  }
}