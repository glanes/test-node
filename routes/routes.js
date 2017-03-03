var fs = require("fs");

var appRouter = function(app) {

    app.get('/Categories', function (req, res) {
        console.log(__dirname);
        fs.readFile( __dirname + "/../" + "categories.json", 'utf8', function (err, data) {
            console.log( data );
            res.end( data );
        });
    })
}

module.exports = appRouter;

