import { createLogger, format, transports } from 'winston'

const consoleTransport = new transports.Console()
const customFormat = format.printf(info => `[${info.level}]${info.timestamp}:${info.message}`)
export const LoggerOptions = {
  format: format.combine(
    format.timestamp(),
    format.simple(),
    format.colorize(),
    format.json(),
    customFormat),
  transports: [consoleTransport]
}
export const WinstonLogger = createLogger(LoggerOptions)
export const LoggerLevels = ['error', 'warn', 'info', 'verbose', 'debug', 'silly']
export const Logger = LoggerLevels.reduce((out, level) => Object.assign(out, { [level]: (message) => WinstonLogger.log({ level, message }) }), {})
