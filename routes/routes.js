var jsonfile = require('jsonfile');
var fs = require('fs');
jsonfile.spaces = 4

var appRouter = function(app) {
    var file = __dirname + "/../" + "categories.json";
    app.get('/Categories', function (req, res) {
        jsonfile.readFile(file, function (err, data) {
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(data));
        });
    })

    app.post('/Categories', function (req, res) {

        var newCategory = {
            "name" : req.body.name,
            "description" : req.body.description,
            "icon": req.body.icon,
            "id" : req.body.id
        }
        fs.readFile( file, 'utf-8',  function (err, data) {
            data = JSON.parse( data );
            data.push(newCategory);
            jsonfile.writeFile(__dirname + "/../" + "categories.json", data, function (err) {
                console.error(err)
            })
        });
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({ 'result': {'id':req.body.id} }));
    })
}

module.exports = appRouter;

