const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');

const app = express();



// var massiveServer = massive.connectSync({
//   connectionString: "postgres://@localhost/massive-demo-01"
// });


app.use(bodyParser.json());

app.set('db', massiveServer);

var db = app.get('db');
//console.log(db);
var port = 3000;
