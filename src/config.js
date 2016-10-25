/*global module*/
module.exports = exports = {
    provider: {
        protocol  : "http",
        host      : "localhost:8600",
        profileUrl: "/api/userinfo"
    },
    consumer: {
        protocol    : "http",
        host        : "localhost:8700",
        clientId    : 'abc123',
        clientSecret: 'ssh-secret'
    }
};