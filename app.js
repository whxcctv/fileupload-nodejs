const app = require('express')();
const config = require('./config/config');
const logger = require('./config/logger.config');

// Express conf !
require('./config/express.config')(app);

// Mongoose Conf !
require('./config/mongoose.config')(config, logger);
var server=http.createServer(app).listen(config.port);
