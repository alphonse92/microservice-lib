import { PRERENDER_NOT_ALLOWED } from "../../strings";
import { InternalError } from "../internal_error.exception";
import { UNAUTHORIZED } from "../../constants";

export class NotAllowedToRender extends InternalError {
  constructor() {
    super(PRERENDER_NOT_ALLOWED)
    this.status = UNAUTHORIZED
  }

}