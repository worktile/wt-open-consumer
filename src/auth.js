/*global require*/
const passport = require('passport');
const OAuth2Strategy = require('passport-oauth2');
const WTOAuth2Strategy = require('./wt.oauth2.strategy');
const SlackOAuth2Strategy = require('./slack.oauth2.strategy');
const config = require('./config');

passport.serializeUser(function (user, done) {
    console.log("serializeUser");
    console.log(user);
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    // User.findById(id, function (err, user) {
    //     done(err, user);
    // });
    console.log("deserializeUser");
    console.log(user);
    done(null, user);
});

// OAuth2Strategy.prototype.userProfile = function (accessToken, done) {
//     return done(null, {id: '111', name: "getProfile"});
// };
passport.use(new WTOAuth2Strategy({
        authorizationURL: `${config.provider.protocol}://${config.provider.host}/oauth2/authorize`,
        tokenURL        : `${config.provider.protocol}://${config.provider.host}/oauth2/token`,
        clientID        : config.consumer.clientId,
        clientSecret    : config.consumer.clientSecret,
        callbackURL     : `${config.consumer.protocol}://${config.consumer.host}/auth/wt-pro/callback`
    },
    function (accessToken, refreshToken, profile, cb) {
        // User.findOrCreate({ exampleId: profile.id }, function (err, user) {
        //     return cb(err, user);
        // });
        console.log(`accessToken:${accessToken},refreshToken:${refreshToken},profile:${JSON.stringify(profile)}`)
        return cb(null, profile);
    }
));

passport.use(new SlackOAuth2Strategy({
        authorizationURL: `${config.providerSlack.protocol}://${config.providerSlack.host}/oauth/authorize`,
        tokenURL        : `${config.providerSlack.protocol}://${config.providerSlack.host}/api/oauth.access`,
        clientID        : config.consumerSlack.clientId,
        clientSecret    : config.consumerSlack.clientSecret,
        callbackURL     : `${config.consumerSlack.protocol}://${config.consumerSlack.host}/auth/slack/callback`
    },
    function (accessToken, refreshToken, profile, cb) {
        // User.findOrCreate({ exampleId: profile.id }, function (err, user) {
        //     return cb(err, user);
        // });
        console.log(`accessToken:${accessToken},refreshToken:${refreshToken},profile:${JSON.stringify(profile)}`)
        return cb(null, profile);
    }
));