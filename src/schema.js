const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type FeatureCollection {
    type: String
    metadata: Metadata
    bbox: [Float]
    features: [Feature]
  }
  
  type Metadata {
    generated: ID
    url: String
    title: String
    api: String
    count: Int
    status: Int
  }

  type Feature {
    type: String
    id: ID
    properties: Properties
    geometry: Point
  }

  type Properties {
    mag: Float,
    place: String,
    time: Int,
    updated: Int,
    tz: Int,
    url: String,
    detail: String,
    felt:Int,
    cdi: Float,
    mmi: Float,
    alert: String,
    status: String,
    tsunami: Int,
    sig:Int,
    net: String,
    code: String,
    ids: String,
    sources: String,
    types: String,
    nst: Int,
    dmin: Float,
    rms: Float,
    gap: Float,
    magType: String,
    type: String
  }

  type Point {
    type: String
    coordinates: [Float]
  }

  type Query {
    getEarthquakes(title: String): FeatureCollection
  }
`);    

module.exports = schema;
