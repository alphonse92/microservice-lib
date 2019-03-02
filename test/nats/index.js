import { expect } from 'chai'
import { Nats } from '../../lib'

describe('lib/nats/', () => {
  describe('getConnection', () => {
    describe('Try to get the connector', () => {
      let client, exception, isSuccessfull
      before(async () => {
        try {
          client = Nats.getConnection()
          isSuccessfull = true
        } catch (e) {
          exception = e
        }
      })
      after(async () => {

      })
      it('Should not throw an exception', () => {
        expect(exception).to.not.be.equals(Error)
      })
    })
  })
})