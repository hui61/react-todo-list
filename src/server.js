var express = require('express')
var cors = require('cors')
var app = express()
app.use(cors())
app.get('/items', function (req, res, next) {
    res.json({msg: "eeeeee"})
})
app.listen(80, function () {
    console.log('CORS-enabled web server listening on port 80')
})