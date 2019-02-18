import { PRERENDER_INVALID_PROTOCOL } from "../../strings";
import { InternalError } from "../internal_error.exception";

export class ChromiumInvalidProtocol extends InternalError {
  constructor() {
    super(PRERENDER_INVALID_PROTOCOL)
    this.status = 500
  }

}