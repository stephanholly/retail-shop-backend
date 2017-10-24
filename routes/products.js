var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var bcrypt = require('bcrypt');
var cors = require('cors')

/* GET users listing. */
router.get('/', function(req, res, next) {
  knex.raw(`SELECT * FROM products order by id`)
  .then(data => {
    res.json(data.rows)
  });
});

router.get('/:id', function(req, res, next) {
  knex.raw(`SELECT * FROM products where id=${req.params.id}`)
  .then(data => {
    res.json(data.rows)
  });
});

router.post('/', function(req, res, next) {
  let {picurl, name, price} = req.body;
  picurl? picurl = picurl : picurl = "http://www.i2symbol.com/images/symbols/check/ballot_box_with_x_u2612_icon_256x256.png";
  knex.raw(`insert into products values (default, '${name}', ${price}, false, '${picurl}') returning *`)
  .then(data => {
    res.json(data.rows)
  })
});

router.patch('/:id/edit', function(req, res, next) {
  knex.raw(`UPDATE products SET name = '${req.body.name}', price = '${req.body.price}', soldout = '${req.body.soldout}',  picurl = '${req.body.picurl}' where products.id = ${req.params.id}`)
  .then(data => {
  knex.raw(`select * from products order by id`)
  .then(data1 => {
    console.log(data1.rows)
    res.json(data1.rows)
  })
  })
});

router.delete('/:id/delete', function(req, res, next) {
  knex('products').where('id', req.params.id).del()
  .then(data => {
    res.json(req.params.id)
  })
});

module.exports = router;
