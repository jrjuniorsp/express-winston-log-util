var winston = require('winston');

var logger = new (winston.Logger)({
  transports: [
    new (winston.transports.File)({
      name: 'trace-log',
      filename: 'trace.log'
    }),
    new (winston.transports.Console)()
  ]
});

const logEvent = function(className, methodName, params) {  
  logger.info("Class: " + className + ", Method: " + methodName + ", method params: " + JSON.stringify(params));
}

const logError = function(errorMessage) {
  logger.error("Error raised with message:  " + errorMessage);
}

module.exports = {
  logEvent : logEvent,
  logError: logError
}