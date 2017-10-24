
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('orders').del()
    .then(function () {
      // Inserts seed entries
      return knex('orders').insert([
        {product_id: 1, price: 15.00, quantity: 2, order_id: 1},
        {product_id: 1, price: 15.00, quantity: 1, order_id: 1},
        {product_id: 2, price: 15.00, quantity: 2, order_id: 1},
        {product_id: 2, price: 15.00, quantity: 1, order_id: 1},
        {product_id: 2, price: 15.00, quantity: 1, order_id: 1},
        {product_id: 3, price: 15.00, quantity: 1, order_id: 2},
        {product_id: 6, price: 15.00, quantity: 3, order_id: 2},
        {product_id: 5, price: 15.00, quantity: 5, order_id: 3},
        {product_id: 4, price: 15.00, quantity: 2, order_id: 3},
        {product_id: 6, price: 15.00, quantity: 1, order_id: 4},
        {product_id: 8, price: 15.00, quantity: 1, order_id: 4},
        {product_id: 8, price: 15.00, quantity: 5, order_id: 4},
        {product_id: 9, price: 15.00, quantity: 1, order_id: 5},
        {product_id: 1, price: 15.00, quantity: 2, order_id: 5}
      ]);
    });
};
