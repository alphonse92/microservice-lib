import { InternalError } from "../internal_error.exception";
import { SERVICE_UNAVAILABLE } from "../../strings";
import { HttpStatus } from "../../constants";

export class ServiceUnavailable extends InternalError {
  constructor() {
    super()
    this.status = HttpStatus.SERVICE_UNAVAILABLE
    this.message = SERVICE_UNAVAILABLE
  }
}