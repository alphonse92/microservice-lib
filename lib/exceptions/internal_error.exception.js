import { INTERNAL_ERROR } from "../strings";
export class InternalError extends Error {
  constructor() {
    super(INTERNAL_ERROR)
    this.status = 500
  }
}