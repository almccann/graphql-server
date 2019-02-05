const cors = require('cors');
const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'development'
}

class FeatureCollection {
  constructor(title) {
    this.type = "FeatureCollection";
    this.metadata =  new MetaData(title);
    this.bbox = [1.0,1.0,1.0,1.0,1.0,1.0]
    this.features = [new Feature()]
  }
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

class Feature {
  constructor() {
    this.type = "Feature"
    this.id = require('crypto').randomBytes(10).toString('hex');
    this.properties = new Properties();
    this.geometry = new Point();
  }
}

class Properties {
  constructor() {
    this.mag = 1.0;
    this.place = 'place';
    this.time = 1;
    this.updated = 1;
    this.tz = 1;
    this.url = 'url';
    this.detail = 'detail';
    this.felt = 1;
    this.cdi = 1.0;
    this.mmi = 1.0;
    this.alert = 'alert';
    this.status = 'status';
    this.tsunami = 1;
    this.sig = 1;
    this.net = 'net';
    this.code = 'code';
    this.ids = 'ids';
    this.sources = 'sources';
    this.types = 'types';
    this.nst = 1;
    this.dmin = 1.0;
    this.rms = 1.0;
    this.gap = 1.0;
    this.magType = 'magType';
    this.type = 'type';
  }
}

class Point {
  constructor() {
    this.type = "Point"
    this.coordinates = [1.0,1.0,1.0];
  }
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
