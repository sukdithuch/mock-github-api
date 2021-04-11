var express = require('express');
var morgan = require('morgan');
var mockGithubApisRouter = require('./routers/mock-github-apis-router');

var app = express();
var port = process.env.PORT || 3005;

console.log("process", process.env);

app.use(morgan('dev'));

// Enable CORS on ExpressJS to avoid cross-origin errors when calling this server using AJAX
// We are authorizing all domains to be able to manage information via AJAX (this is just for development)
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,recording-session");
    next();
});

express.json();
express.urlencoded();

app.use('/mock-github-api/', mockGithubApisRouter);

app.listen(port);
console.log("Running app on port port. Visit: http://localhost:" + port + "/");

