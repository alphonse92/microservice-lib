


import { InternalError } from "../internal_error.exception";
import { MS_404 } from "../../strings";
import { HttpStatus } from "../../constants";

export class MicroserviceDoesNotExist extends InternalError {
  constructor(name) {
    super()
    this.status = HttpStatus.NOT_FOUND
    this.message = MS_404
    this.data = { name }
  }
}