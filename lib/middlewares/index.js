export const initMicroserviceServer = (app) => {
  setHealthCheck(app)
}
export const setHealthCheck = (app) => {
  app.get('/health', healthCheckMiddleware)
}
export const healthCheckMiddleware = (req, res, next) => res.send('ok')