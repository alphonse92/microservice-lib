import { CACHE_SYSTEM_NOT_FOUND } from "../strings";

export class CacheSystemDoesNotExist extends Error {
  constructor() {
    super(STR_CACHE_SYSTEM_NOT_FOUND)
    this.status = 500
  }

}