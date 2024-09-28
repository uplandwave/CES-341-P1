const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'User Api',
        description: 'User Api'
    },
    host: 'localhost:3001',
    schemes: ['https', 'http']
  };

  const outputFile = './swagger.json';
  const endpointsFiles = ['./routes/index.js'];

  // this will generate swagger.json
  swaggerAutogen(outputFile, endpointsFiles, doc);