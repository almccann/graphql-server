const cors = require('cors');
const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'development'
}

class MetaData {
  constructor(title) {
    this.generated = require('crypto').randomBytes(10).toString('hex');
    this.url = 'url';
    this.title = title;
    this.api = 'api';
    this.count = 1;
    this.status = 1;
  }
}
const root = {
  getEarthquakes: ({title}) => {
    return {
      metadata: new MetaData(title)
    }
  },
};

const app = express();

app
  .use(cors())
  .use(express.static(__dirname + '/client'))
  .get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
  })
  .use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  }))
  .listen(8001, () => console.log('Now serving at localhost:8001 and API at /graphql'));
