import { InternalError } from "./internal_error.exception";
import { INTERNAL_ERROR } from "../strings";
export class InternalErroraaa extends InternalError {
  constructor(status, message, data) {
    super(message || INTERNAL_ERROR)
    Object.assign(this, { status, message, data })
  }
}