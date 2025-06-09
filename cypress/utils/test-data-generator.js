const { faker } = require("@faker-js/faker");

const testData = {
  randomFirstName: faker.person.firstName(),
  randomLastName: faker.person.lastName(),
  randomEmail: faker.internet.email(),
  randomPassportNumber: faker.string.numeric(8),
};

module.exports = testData;
