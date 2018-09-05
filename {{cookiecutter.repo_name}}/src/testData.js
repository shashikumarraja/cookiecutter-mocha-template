//Use this file to generate and store test data on the fly using faker and naughty-string-validator

exports.fName = faker.name.firstName;
exports.lName = faker.name.lastName;
exports.age = faker.random.number({min:6, max:100});
exports.email = faker.internet.email()
exports.password = faker.internet.password();
exports.url = faker.internet.url();
exports.randomNumber = faker.random.number({ min: 0, max: 99999999999999 });
exports.unicodeCharacters = naughty.getRandomEmoji() // this will give  "😃"
exports.randomNaughty = naughty.getRandomNaughtyString(); // this will give "<a href=\"\\xE2\\x80\\x88javascript…(1)\" id=\"fuzzelement1\">test</a>"

