

let app = require('connect')();
let cors = require('cors')
let http = require('http');
let swaggerTools = require('swagger-tools');
let jsyaml = require('js-yaml');
let fs = require('fs');
let serverPort = require('./config').port;
let serveStatic = require('serve-static')

// swaggerRouter configuration
let options = {
  swaggerUi: '/swagger.json',
  controllers: './controllers',
  useStubs: process.env.NODE_ENV === 'development' // Conditionally turn on stubs (mock mode)
};

// The Swagger document (require it, build it programmatically, fetch it from a URL, ...)
let spec = fs.readFileSync('./api/swagger.yaml', 'utf8');
let swaggerDoc = jsyaml.safeLoad(spec);

// Initialize the Swagger middleware
swaggerTools.initializeMiddleware(swaggerDoc, (middleware) => {
  // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
  app.use(middleware.swaggerMetadata());

  app.use("/assets", serveStatic('assets'))

  // Validate Swagger requests
  app.use(middleware.swaggerValidator());

  app.use(cors());
  // Route validated requests to appropriate controller
  app.use(middleware.swaggerRouter(options));

  // Serve the Swagger documents and Swagger UI
  app.use(middleware.swaggerUi());

  // Start the server
  http.createServer(app).listen(serverPort, () => {
    console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
    console.log('Swagger-ui is available on http://localhost:%d/docs', serverPort);
  });
});
