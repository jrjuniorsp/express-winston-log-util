var winston = require('winston');

const logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)(),
    new (winston.transports.File)({ filename: 'trace.log' })
  ]
});

const logEvent = function(className, methodName, params) {
  logger.info("Class: " + className + ", Method: " + methodName + ", method params: " + JSON.stringify(params));
}

module.exports = {
  logEvent : logEvent
}