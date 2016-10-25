/*global require,module*/
const OAuth2Strategy = require('passport-oauth2');
const util = require('util');

function SlackOAuth2Strategy(options, verify) {
    OAuth2Strategy.call(this, options, verify);
    this.name = 'slack';
}

// Inherit from `OAuth2Strategy`.
util.inherits(SlackOAuth2Strategy, OAuth2Strategy);


SlackOAuth2Strategy.prototype.userProfile = function (accessToken, done) {
    done(null, {id: 1, name: "test name"});
};

module.exports = exports = SlackOAuth2Strategy;