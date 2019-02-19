import { expect } from 'chai'
import { Config } from './../../lib/config'

describe('lib/config', () => {
  describe('Config', () => {
    describe('Create', () => {
      describe('without fileconf', () => {
        const schema = {}
        const env = {
          'config_ms_uri_port': 3000,
          'config_ms_uri_uri': 'thisisauri',
          'config_ms_uri_protocol': 'https',
        }
        const expected = {
          config: {
            ms: {
              uri: {
                port: env.config_ms_uri_port,
                uri: env.config_ms_uri_uri,
                protocol: env.config_ms_uri_protocol,
              }
            }
          }
        }
        const mergedConf = Config.create(schema, env)
        it("Should InternalError to be an Error", () => {
          expect(mergedConf).to.be.an('object')
        })

        it("Should exception message to be equals to expected value", () => {
          expect(mergedConf).to.be.deep.equals(expected)
        })
      })

      describe('with fileconf', () => {
        const schema = {
          config: {
            ms: {
              uri: {
                uri: 'schemaUri'
              }
            }
          }
        }
        const env = {
          'config_ms_uri_port': 3000,
        }

        const fileConf = {
          config: {
            ms: {
              uri: {
                port: 9000,
                protocol: 'https'
              }
            }
          }
        }

        const expected = {
          config: {
            ms: {
              uri: {
                port: env.config_ms_uri_port,
                uri: schema.config.ms.uri.uri,
                protocol: fileConf.config.ms.uri.protocol,
              }
            }
          }
        }

        const mergedConf = Config.create(schema, env, fileConf)
        it("Should InternalError to be an Error", () => {
          expect(mergedConf).to.be.an('object')
        })

        it("Should exception message to be equals to expected value", () => {
          expect(mergedConf).to.be.deep.equals(expected)
        })
      })

    })
  })
})