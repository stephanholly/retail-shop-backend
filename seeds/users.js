
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {first_name: 'Albert', last_name: 'Algae', email: 'user1@gmail.com', street_address: '123 Antelope Ave.', city: 'Anarbor', state: 'MI', zip: '12323', cc_type: 'Visa', cc_name_on: 'Albert Algae', cc_number: '1111111111111111', cc_code: '123', cc_expire: '0101'},
        {first_name: 'Bob', last_name: 'Berns', email: 'user2@gmail.com', street_address: '456 Buffalo Blvd.', city: 'Boston', state: 'MA', zip: '45645', cc_type: 'Mastercard', cc_name_on: 'Bob Berns', cc_number: '2222222222222222', cc_code: '456', cc_expire: '0202'},
        {first_name: 'Catherine', last_name: 'Cats', email: 'user3@gmail.com', street_address: '133 Cortland Ct.', city: 'Catalina Island', state: 'CA', zip: '29485', cc_type: 'Visa', cc_name_on: 'Catherine Cats', cc_number: '3333333333333333', cc_code: '789', cc_expire: '0303'},
        {first_name: 'Dilbert', last_name: 'Dupree', email: 'user4@gmail.com', street_address: '24242 Dayton Dr.', city: 'Dodge', state: 'KS', zip: '96837', cc_type: 'Visa', cc_name_on: 'Dilbert Dupree', cc_number: '4444444444444444', cc_code: '012', cc_expire: '0404'},
        {first_name: 'Edgar', last_name: 'Evans', email: 'user5@gmail.com', street_address: '777 Exiter Rd.', city: 'Evanston', state: 'IL', zip: '20090', cc_type: 'Visa', cc_name_on: 'Edgar Evans', cc_number: '5555555555555555', cc_code: '345', cc_expire: '0505'}
      ]);
    });
};
