import { INTERNAL_ERROR } from "../strings";
export class InternalError extends Error {
  constructor(message) {
    super(message || INTERNAL_ERROR)
    this.status = 500
  }
}