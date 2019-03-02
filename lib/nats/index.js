import Nats from 'nats'
let connector = null
const getConnection = (config) => {
  if (connector) return connector
  connector = Nats.connect(config);
  return connector
}

export { getConnection }
