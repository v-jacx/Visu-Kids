const fs = require('fs');
const logError = (error, res) => {
  switch (error.name) {
    case "ValidationError":
    case "SequelizeValidationError":
      statusCode = 400;
      break;
    default:
      statusCode = 500
  }

  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] ${error.message} - ${error.url}:${error.lineNumber}\n`;

  fs.appendFile('error.log', logMessage, (err) => {
      if (err) {
        console.error('Error writing to log file:', err);
        res.status(500).send('Error logging failed');
      } else {
        res.status(statusCode).send(error.message);
      }
    });
}

module.exports = logError;