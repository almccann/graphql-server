const cors = require('cors');
const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');
const FeatureCollection = require('./FeatureCollection');

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'development'
}

const root = {
  getEarthquakes: ({title}) => {
    return new FeatureCollection(title)
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
