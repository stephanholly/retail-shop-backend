var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var bcrypt = require('bcrypt');
var cors = require('cors')

/* GET home page. */
router.get('/users', function(req, res, next) {
  knex.raw(`SELECT * FROM users`)
  .then(data => {
    res.json(data.rows)
  });
});


router.post('/users', function(req, res, next) {
  let {first_name, last_name, email, street_address, city, state, zip, cc_type, cc_name_on, cc_number, cc_code, cc_expire, product_id, price, order_id, quant} = req.body;
  knex.raw(`INSERT INTO users(first_name, last_name, email, street_address, city, state, zip, cc_type, cc_name_on, cc_number, cc_code, cc_expire) values ('${first_name}', '${last_name}', '${email}', '${street_address}', '${city}', '${state}', '${zip}', '${cc_type}', '${cc_name_on}', '${cc_number}', '${cc_code}', '${cc_expire}') returning *`)
  .then(data => {
      res.json(data.rows)
      });
});


router.get('/orders', function(req, res, next) {
  knex.raw(`SELECT * FROM orders`)
  .then(data => {
    res.json(data.rows)
  });
});


router.post('/orders', function(req, res, next) {
  knex.raw(`select max(id) from users`)
  .then(orderId => {
    console.log(orderId.rows[0].max);
  for(let i = 0; i < req.body.length; i++) {
  knex.raw(`INSERT INTO orders(product_id, price, order_id, quantity) values ('${req.body[i].id}', '${req.body[i].price}', '${orderId.rows[0].max}', '${req.body[i].quant}') returning *`)
  .then(data1 => {
    res.json(data1.rows)
  })}
  })
});


router.get('/adminpage', function(req, res, next) {
  knex.raw(`SELECT * FROM admin`)
  .then(data => {
    res.json(data.rows)
  });
});

router.post('/adminpage', function(req, res, next) {
  knex.raw(`SELECT * FROM admin WHERE username = '${req.body.username}'`)
    .then(function(admin) {
      if (admin.rows[0]) {
        bcrypt.compare(req.body.password, admin.rows[0].password, function(err, resp) {
          if (resp) {
            res.cookie('user_id', admin.rows[0].id)
            res.redirect(`/adminpage`)
          } else {
            res.redirect('/')
          }
        });
      } else {
        res.redirect('/')
      }
    });
});

module.exports = router;
