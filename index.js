var winston = require('winston');

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'trace.log' })
  ]
});

const logEvent = function(className, methodName, params) {
  logger.log({
      level: "info",
      message: "Class: " + className + ", Method: " + methodName + ", method params: " + JSON.stringify(params)
  });
}

module.exports = {
  logEvent : logEvent
}