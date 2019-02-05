const Properties = require('./Properties');
const Point = require('./Point');

class Feature {
  constructor() {
    this.type = "Feature"
    this.id = require('crypto').randomBytes(10).toString('hex');
    this.properties = new Properties();
    this.geometry = new Point();
  }
}

module.exports = Feature;
