import redis from 'redis'
import util from 'util'

function createClient(conf) {
  const redisClient = redis.createClient(conf.port, conf.url, conf.opt);
  const schema = {
    get: null,
    set: null,
  }
  const createSchema = (client, key) => Object.assign(client, { [key]: util.promisify(redisClient[key].bind(redisClient)) })
  return Object.keys(schema).reduce(createSchema, schema)
}

function getOrClientClient(conf) {
  return createClient(conf)
}

export const REDIS = getOrClientClient