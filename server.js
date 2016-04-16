var faker = require("faker");
var jsonServer = require('json-server');

function generatePerson(id) {
  return {
    id: id,
    name: {
      first: faker.name.firstName(),
      last: faker.name.lastName()
    },
    email: faker.internet.email(),
    username: faker.internet.userName(),
    avatar: faker.internet.avatar(),
    company: faker.company.companyName(),
    address: {
      streetAddress: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
    },
    phone: faker.phone.phoneNumber(),
    bio: faker.lorem.paragraph()
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
