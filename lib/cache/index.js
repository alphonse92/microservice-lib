
import * as systems from './systems/'
import { CacheSystemDoesNotExist } from './errors/'

const Types = Object.keys(systems)
const Factory = {
  get(type, config) {
    if (!systems[type]) throw new CacheSystemDoesNotExist()
    return systems[type](config)
  }
}

export const Errors = { Types, Factory }
