/*global module*/
module.exports = exports = {
    provider: {
        protocol  : "http",
        host      : "localhost:8600",
        profileUrl: "/api/userinfo"
    },
    providerSlack: {
        protocol  : "https",
        host      : "api.slack.com",
        profileUrl: "/api/userinfo"
    },
    consumer: {
        protocol    : "http",
        host        : "localhost:8700",
        clientId    : 'abc123',
        clientSecret: 'ssh-secret'
    },
    consumerSlack:{
        protocol    : "http",
        host        : "worktile.local:8700",
        clientId    : 'xxxx',
        clientSecret: 'xxxx'
    }
};