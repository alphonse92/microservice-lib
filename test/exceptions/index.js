import { expect } from 'chai'
import * as CONSTANTS from './../../lib/constants'
import * as STRINGS from './../../lib/strings'
import * as LOGGER from './../../lib/logger'

import { InternalError, GatewayError, MicroserviceNotAllowed, MicroserviceDoesNotExist, ChromiumInvalidProtocol, NotAllowedToRender }
  from './../../lib/exceptions';


describe('lib/exceptions', () => {
  describe('InternalError', () => {
    const exception = new InternalError()
    const message = STRINGS.INTERNAL_ERROR
    it("Should InternalError to be an Error", () => {
      expect(exception).to.be.an.instanceOf(Error)
    })
    it("Should exception message to be equals to " + message, () => {
      expect(exception.message).to.be.equals(message)
    })
  })
  describe('GatewayError', () => {
    const exception = new GatewayError()
    const message = STRINGS.GATEWAY_ERROR
    const status = CONSTANTS.HttpStatus.GATEWAY_ERROR
    it("Should InternalError to be an Error", () => {
      expect(exception).to.be.an.instanceOf(Error)
    })
    it("Should exception message to be equals to " + message, () => {
      expect(exception.message).to.be.equals(message)
    })
    it("Should exception status to be equals to " + status, () => {
      expect(exception.status).to.be.equals(status)
    })

  })


  describe('MicroserviceNotAllowed', () => {
    const exception = new MicroserviceNotAllowed()
    const message = STRINGS.MS_401
    const status = CONSTANTS.HttpStatus.UNAUTHORIZED
    it("Should InternalError to be an Error", () => {
      expect(exception).to.be.an.instanceOf(Error)
    })
    it("Should exception message to be equals to " + message, () => {
      expect(exception.message).to.be.equals(message)
    })
    it("Should exception status to be equals to " + status, () => {
      expect(exception.status).to.be.equals(status)
    })
  })
  describe('MicroserviceDoesNotExist', () => {
    const exception = new MicroserviceDoesNotExist()
    const message = STRINGS.MS_404
    const status = CONSTANTS.HttpStatus.NOT_FOUND
    it("Should InternalError to be an Error", () => {
      expect(exception).to.be.an.instanceOf(Error)
    })
    it("Should exception message to be equals to " + message, () => {
      expect(exception.message).to.be.equals(message)
    })
    it("Should exception status to be equals to " + status, () => {
      expect(exception.status).to.be.equals(status)
    })
  })
  describe('ChromiumInvalidProtocol', () => {
    const exception = new ChromiumInvalidProtocol()
    const message = STRINGS.PRERENDER_INVALID_PROTOCOL
    const status = CONSTANTS.HttpStatus.SERVER_ERROR
    it("Should InternalError to be an Error", () => {
      expect(exception).to.be.an.instanceOf(Error)
    })
    it("Should exception message to be equals to " + message, () => {
      expect(exception.message).to.be.equals(message)
    })
    it("Should exception status to be equals to " + status, () => {
      expect(exception.status).to.be.equals(status)
    })
  })
  describe('NotAllowedToRender', () => {
    const exception = new NotAllowedToRender()
    const message = STRINGS.PRERENDER_NOT_ALLOWED
    const status = CONSTANTS.HttpStatus.UNAUTHORIZED
    it("Should InternalError to be an Error", () => {
      expect(exception).to.be.an.instanceOf(Error)
    })
    it("Should exception message to be equals to " + message, () => {
      expect(exception.message).to.be.equals(message)
    })
    it("Should exception status to be equals to " + status, () => {
      expect(exception.status).to.be.equals(status)
    })
  })

})