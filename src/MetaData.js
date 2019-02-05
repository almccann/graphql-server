
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

module.exports = MetaData;
