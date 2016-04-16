var faker = require("faker");
var jsonServer = require('json-server');

function generatePerson(id) {
  return {
    id: id,
    name: {
      given: faker.name.firstName(),
      family: faker.name.lastName()
    },
    email: faker.internet.email(),
    username: faker.internet.userName(),
    avatar: faker.internet.avatar(),
    company: faker.company.companyName(),
    address: {
      street: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      zip: faker.address.zipCode(),
      country: faker.address.country()
    },
    phone: faker.phone.phoneNumber(),
    note: faker.lorem.paragraph()
  }
}

function generateFakeData() {
  var people = [];
  for(var i=1; i<=20; i++) {
    people.push(generatePerson(i));
  }
  return {people: people};
}

var people = generateFakeData();
var server = jsonServer.create();
server.use(jsonServer.defaults());
var router = jsonServer.router(people);
server.use(router);
server.listen(3000);
