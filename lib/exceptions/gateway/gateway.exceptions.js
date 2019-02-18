
import { GATEWAY_ERROR } from '../../strings';
import { InternalError } from '../internal_error.exception';
import { HttpStatus } from '../../constants';

export class GatewayError extends InternalError {
  constructor(data) {
    super(GATEWAY_ERROR)
    this.status = HttpStatus.GATEWAY_ERROR
    this.data = data
  }
}
