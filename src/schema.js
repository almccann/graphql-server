const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type FeatureCollection {
    metadata: Metadata
  }
  
  type Metadata {
    generated: ID
    url: String
    title: String
    api: String
    count: Int
    status: Int
  }

  type Query {
    getEarthquakes(title: String): FeatureCollection
  }
`);    

module.exports = schema;
