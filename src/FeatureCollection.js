const MetaData = require('./MetaData');
const Feature = require('./Feature');

class FeatureCollection {
  constructor(title) {
    this.type = "FeatureCollection";
    this.metadata =  new MetaData(title);
    this.bbox = [1.0,1.0,1.0,1.0,1.0,1.0]
    this.features = [new Feature()]
  }
}

module.exports = FeatureCollection;
