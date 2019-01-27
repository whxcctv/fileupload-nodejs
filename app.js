const app = require('express')();
const config = require('./config/config');
const logger = require('./config/logger.config');

// Express conf !
require('./config/express.config')(app);
app.use("/exit",function(req,res,next){res.end("Bye");server.close();console.log("the server is stopped!");})
// Mongoose Conf !
require('./config/mongoose.config')(config, logger);
var server=http.createServer(app).listen(config.port);
