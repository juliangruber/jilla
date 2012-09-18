var fs = require('fs');

function Db(path) {
  this.path = path;
  if (!fs.existsSync(path)) fs.writeFileSync(path, JSON.stringify({}));
  this.db = require(path);
}

Db.prototype.get = function(key) {
  if (!key) return clone(this.db);
  if (!this.db[key]) return;
  return clone(this.db[key]);
}

Db.prototype.set = function(key, value) {
  this.db[key] = value;
  this.save();
}

Db.prototype.del = function(key) {
  delete this.db[key];
  this.save();
}

Db.prototype.save = function() {
  fs.writeFileSync(this.path, JSON.stringify(this.db));
}

function clone(data) {
  return JSON.parse(JSON.stringify(data));
}

module.exports = function(path) {
  return new Db(path);
}