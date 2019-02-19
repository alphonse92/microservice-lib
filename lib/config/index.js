import { merge, set } from 'lodash'
const _ = { merge, set }
export const Config = {
  create(confSchema, env, fileConfig = {}) {
    const confFromEnv = Object
      .keys(env)
      .reduce((out, key) => _.set(out, key.replace(new RegExp('_', 'g'), '.'), env[key]), {})
    const mergedConf = _.merge(_.merge(confSchema, fileConfig), confFromEnv)
    return mergedConf
  }
}