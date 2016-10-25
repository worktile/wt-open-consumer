/*global require*/
const OAuth2Strategy = require('passport-oauth2');
const util = require('util');

function WTOAuth2Strategy(options, verify) {
    OAuth2Strategy.call(this, options, verify);
    this.name = 'wt-pro';
}

// Inherit from `OAuth2Strategy`.
util.inherits(WTOAuth2Strategy, OAuth2Strategy);


WTOAuth2Strategy.prototype.userProfile = function (accessToken, done) {
    done(null, {id: 1, name: "test name"});
};

module.exports = exports = WTOAuth2Strategy;