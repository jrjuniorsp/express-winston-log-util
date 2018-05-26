# Express Winston Log Util

This is a simple utility for logging the output into an **trace.log** and **error.log**.

Simply import the library and call a logEvent method.

## Install
```
npm install express-winston-log-util --save
```

## Usage

```javascript
let  logUtil  =  require('express-winston-log-util');

logUtil.logEvent("MyClass","MyMethod",JSONObject);
```

A **trace.log** file will be generated into the root directory of the project
