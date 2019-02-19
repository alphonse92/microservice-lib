export const Config = {
  create(confSchema) {
    const confFromEnv = Object
      .keys(process.env)
      .reduce((out, key) => _.set(out, key.replace(new RegExp('_', 'g'), '.'), process.env[key]), {})
    const env = confSchema.config.env
    const confFromFileConf = require('./env/' + env.toLowerCase()).default
    const mergedConf = _.merge(_.merge(confSchema, confFromFileConf), confFromEnv)
    return mergedConf
  }
}