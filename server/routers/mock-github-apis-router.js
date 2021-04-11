var mockGithubApisRouter = require('express').Router();
var userExample = require('../data/github-user-example');
var userSukdithuch = require('../data/github-user-sukdithuch');
var userDd = require('../data/github-user-dd');
var userGg = require('../data/github-user-gg');

mockGithubApisRouter.get('/example', function (req, res) {
    res.json(userExample);
});

mockGithubApisRouter.get('/sukdithuch', function (req, res) {
    res.json(userSukdithuch);
});

mockGithubApisRouter.get('/dd', function (req, res) {
    res.json(userDd);
});

mockGithubApisRouter.get('/gg', function (req, res) {
    res.json(userGg);
});

// Error handler
mockGithubApisRouter.use(function (err, req, res, next) {

    if (err) {
        res.status(500).send(err);
    }

});

module.exports = mockGithubApisRouter;