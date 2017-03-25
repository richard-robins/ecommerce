const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');

const app = express();



// var massiveServer = massive.connectSync({
//   connectionString: "postgres://@localhost/massive-demo-01"
// });


app.use(bodyParser.json());

//app.set('db', massiveServer);

var db = app.get('db');
//console.log(db);
var port = process.env.port || 3000;


app.get('/api/product', (request, response) => {
    response.send({
      product_id: 1,
      product_name: 'Test Shirt',
      product_description: 'This is a t-shirt to wear',
      product_price: 12.45,
      brand_name: Nike,
    })
});



app.listen(port, function() {
  console.log("Started server on port", port);
});
