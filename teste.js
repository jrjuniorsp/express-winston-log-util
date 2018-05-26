//const teste = require('express-winston-log-util');
let logUtil = require('./index.js');
//teste.printMsg;
let bla = {
  'message': 'any object'
}
logUtil.logEvent("Classe","meuMetodo",bla);
logUtil.logEvent("Classe","meuMetodo2",bla);
logUtil.logEvent("AAA","meuMetodo3",bla);