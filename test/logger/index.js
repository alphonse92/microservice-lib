import { expect } from 'chai'

import * as LOGGER from './../../lib/logger'


describe('lib/logger/', () => {
  describe('Logger', () => {
    describe('LoggerLevels', () => {
      it('Should Logger.LoggerLevels be an array', () => {
        expect(LOGGER.LoggerLevels).to.be.an('array')
      })
      it('Should lenght be six', () => {
        expect(LOGGER.LoggerLevels.length).to.be.equals(6)
      })
    })

    describe('Logger', () => {
      it('Should each attribute be an Logger Level Label', () => {
        expect(LOGGER.Logger).to.have.all.keys(LOGGER.LoggerLevels);
      })
      it('Should each logger attribute be a function', () => {
        for (let key in LOGGER.Logger) {
          const att = LOGGER.Logger[key]
          expect(att).to.be.a('function')
        }
      })
    })
  })
})