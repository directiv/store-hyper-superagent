/**
 * Module dependencies
 */

var superagent = require('superagent');

createClient.requires = [];

module.exports = createClient;

function createClient() {
  var Client = {
    root: function(fn) {
      // TODO configure the API_URL
      Client.get('/api', fn);
    },
    get: function(href, fn) {
      superagent
        .get(href)
        .end(function(err, res) {
          if (err) return fn(err);
          fn(res.error, res.body, res.links);
        });
    }
  };

  return Client;
};
