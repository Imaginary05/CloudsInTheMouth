var express = require("express");
var bodyParser = require("body-parser");
var products = require("./data-files/products.js");
var fillings = require("./data-files/fillings.js");
var cupcakes = require("./data-files/cupcakes.js");
var cakes = require("./data-files/cakes.js");
var cakepops = require("./data-files/cakepops.js");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function (req, res) {
  res.sendfile('index.html');
});
app.get('/data-files/products', function (req, res) {
  res.send(JSON.stringify(products));
});
app.delete('/data-files/products/:name', function (req, res) {
  products.forEach(function (product, index, list) {
    if (product.name === req.params.name) {
      list.splice(index, 1);
    }
  });
  res.sendStatus(200);
});
app.put('/data-files/products/:name', function (req, res) {
  products.forEach(function (product, index, list) {
    if (product.name === req.params.name) {
      list[index] = req.body;
    }
  });
  setTimeout(function () {
    res.sendStatus(200);
  }, 1000);
});
app.post('/data-files/products', function (req, res) {
  products.push(req.body);
  res.sendStatus(200);
});

/*fillings part*/
app.get('/data-files/fillings', function (req, res) {
  res.send(JSON.stringify(fillings));
});
app.delete('/data-files/fillings/:name', function (req, res) {
  fillings.forEach(function (filling, index, list) {
    if (filling.name === req.params.name) {
      list.splice(index, 1);
    }
  });
  res.sendStatus(200);
});
app.put('/data-files/fillings/:name', function (req, res) {
  fillings.forEach(function (filling, index, list) {
    if (filling.name === req.params.name) {
      list[index] = req.body;
      console.log(req.body);
    }
  });
  setTimeout(function () {
    res.sendStatus(200);
  }, 1000);
});
app.post('/data-files/fillings', function (req, res) {
  fillings.push(req.body);
  res.sendStatus(200);
});

/*cupcakes part*/
app.get('/data-files/cupcakes', function (req, res) {
  res.send(JSON.stringify(cupcakes));
});
app.delete('/data-files/cupcakes/:name', function (req, res) {
  cupcakes.forEach(function (cupcake, index, list) {
    if (cupcake.name === req.params.name) {
      list.splice(index, 1);
    }
  });
  res.sendStatus(200);
});
app.put('/data-files/cupcakes/:name', function (req, res) {
  cupcakes.forEach(function (cupcake, index, list) {
    if (cupcake.name === req.params.name) {
      list[index] = req.body;
      console.log(req.body);
    }
  });
  setTimeout(function () {
    res.sendStatus(200);
  }, 1000);
});
app.post('/data-files/cupcakes', function (req, res) {
  cupcakes.push(req.body);
  res.sendStatus(200);
});

/*cakes part*/
app.get('/data-files/cakes', function (req, res) {
  res.send(JSON.stringify(cakes));
});
app.delete('/data-files/cakes/:name', function (req, res) {
  cakes.forEach(function (cake, index, list) {
    if (cake.name === req.params.name) {
      list.splice(index, 1);
    }
  });
  res.sendStatus(200);
});
app.put('/data-files/cakes/:name', function (req, res) {
  cakes.forEach(function (cake, index, list) {
    if (cake.name === req.params.name) {
      list[index] = req.body;
      console.log(req.body);
    }
  });
  setTimeout(function () {
    res.sendStatus(200);
  }, 1000);
});
app.post('/data-files/cakes', function (req, res) {
  cakes.push(req.body);
  res.sendStatus(200);
});

/*cakepops part*/
app.get('/data-files/cakepops', function (req, res) {
  res.send(JSON.stringify(cakepops));
});
app.delete('/data-files/cakepops/:name', function (req, res) {
  cakepops.forEach(function (cakepop, index, list) {
    if (cakepop.name === req.params.name) {
      list.splice(index, 1);
    }
  });
  res.sendStatus(200);
});
app.put('/data-files/cakepops/:name', function (req, res) {
  cakepops.forEach(function (cakepop, index, list) {
    if (cakepop.name === req.params.name) {
      list[index] = req.body;
      console.log(req.body);
    }
  });
  setTimeout(function () {
    res.sendStatus(200);
  }, 1000);
});
app.post('/data-files/cakepops', function (req, res) {
  cakepops.push(req.body);
  res.sendStatus(200);
});

/*checkout for admin*/
app.put('/login', function (req, res) {
  if (req.body.name == 'Marta'&& req.body.password == 'Sa12') {
    res.sendStatus(200); 
  } else {
    res.sendStatus(404);
  }

});


app.use('/css', express.static('css'));
app.use('/images', express.static('images'));
app.use('/js', express.static('js'));
app.use('/views', express.static('views'));


app.listen(8080, function () {
  console.log('Listening on 8080');
});