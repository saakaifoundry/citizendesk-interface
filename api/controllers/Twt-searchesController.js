var request = require('request');
/**
 * Twt-searchesController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

function askCore(req, res) {
  var id = req.param('id'),
  terms = req.param('terms'),
  url = 'http://localhost:9060/feeds/twt/search/',
  sent = {
    user_id: '1',
    request_id: id,
    search_spec: {
      query: {
	contains: [terms]
      }
    }
  };
  console.log('got id', id, 'and terms', terms);
  request({
    url: url,
    method: 'POST',
    json: sent
  }, function(err, response, body) {
    console.log('request', JSON.stringify(sent));
    console.log('sent to', url);
    console.log('response status is', response.statusCode);
    console.log('response body is', body);
    if(err) return res.send(500);
    res.send();
  });
}

module.exports = {

  start: function(req, res) {
    askCore(req, res);
  },
  

  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to Twt-searchesController)
   */
  _config: {}

  
};
