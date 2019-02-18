import { PRERENDER_INVALID_PROTOCOL } from "../../strings";
import { InternalError } from "../internal_error.exception";
import { SERVER_ERROR } from "../../constants";

export class ChromiumInvalidProtocol extends InternalError {
  constructor() {
    super(PRERENDER_INVALID_PROTOCOL)
    this.status = SERVER_ERROR
  }

}