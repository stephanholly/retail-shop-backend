
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {name: 'Wristology Charlotte', price: 15.00, soldout: false, picurl: 'https://i.imgur.com/r9N2is5.png'},
        {name: 'SMKEI Business Casual', price: 15.00, soldout: false, picurl: 'https://i.imgur.com/fhApARf.png'},
        {name: 'Black Night', price: 15.00, soldout: false, picurl: 'https://i.imgur.com/0606WmF.png'},
        {name: 'Digital Sports', price: 15.00, soldout: false, picurl: 'https://i.imgur.com/jJe0R1Q.png'},
        {name: 'Songdu Ultra-thin', price: 15.00, soldout: false, picurl: 'https://i.imgur.com/zitEa13.png'},
        {name: 'Octstin Quarts', price: 15.00, soldout: false, picurl: 'https://i.imgur.com/SXDppxm.png'},
        {name: 'Victoria Hyde', price: 15.00, soldout: false, picurl: 'https://i.imgur.com/zTYxfOs.png'},
        {name: 'Wristology Olivia', price: 15.00, soldout: false, picurl: 'https://i.imgur.com/z7vEaYW.png'},
        {name: 'Victoria Nox', price: 15.00, soldout: false, picurl: 'https://i.imgur.com/cmZS0Qk.png'},
        {name: 'Yunanwa Analog', price: 15.00, soldout: false, picurl: 'https://i.imgur.com/BFsS6Jz.png'},
        {name: 'Perman Leather', price: 15.00, soldout: false, picurl: 'https://i.imgur.com/5D51a5y.png'},
        {name: 'Bioston Bamboo', price: 15.00, soldout: false, picurl: 'https://i.imgur.com/gNvno8x.png'}

      ]);
    });
};
