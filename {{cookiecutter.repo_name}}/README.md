# {{cookiecutter.repo_name}}
{{cookiecutter.description}}

Project Details
====================

Project to create automation tests  with [Mocha](https://mochajs.org/) in JavaScript.

## Requirements

- [Node.js](https://nodejs.org/en/) 
```sh
$ brew install node
```

## Quick start
Install dependencies
```sh
$ npm install
```

# How to write a test

Tests are written in [Mocha BDD syntax](https://mochajs.org/)


__myFirstTest.js__
```mocha
describe('My First test', () => {
    let title = 'My first test';
    it('should pass', () => {
      expect(title).to.equal('My first test')
    });
});

```

# How to run the test

Traverse to the project directory

```sh
$ cd mocha-template
```
Then run tests using
```sh
$ npm test
```

# Configurations

To configure your tests, checkout the [`setup.js`] file in your test directory.

## Environment-specific configurations

You can setup multiple configs for specific environments. Let's say you want to have a different `baseUrl` for
your local and pre-deploy tests. Use the `setup` to set all general configs (in mochaOpts) that don't change.
They act as default values. For each different environment you can create a new setup with the following name
scheme:

```txt
setup.<ENVIRONMENT>.js
```
and then accordingly require it in your mocha.opts file using
```txt
--require ./test/setup.js
```

# Running single test
Sometimes its useful to only execute a single test file, to do so use the following command:

```sh
$ npm test --grep nameOfSuite (nameOfSuite is the name of describe or it block)
```
```javascript
//use only() with the test
describe.only();
it.only();
```

# Skip test

If you have failing or unimplemented tests you can mark them as "skip" so they will get skipped.

```javascript
//use skip with test test block
describe.skip();
it.skip();
```

# Assertions

To assert values this project comes with a [Chai](http://chaijs.com/) integration.

# Logger

[Winston](https://github.com/winstonjs/winston) is used as logger in the project. Use the below command to get logs on console while running tests- 
```sh 
logLevel='debug' npm test
```
Supported log levels are-
```
{ error: 0, warn: 1, info: 2, verbose: 3, debug: 4, silly: 5 }
```
To use logger, use any of the below format with respective logLevels-

```javascript
// Default logger
winston.log('info', "127.0.0.1 - there's no place like home");
winston.info("127.0.0.1 - there's no place like home");
```

# Reporter

The project uses two reporters-
1. [mocha-allure-reporter](https://github.com/allure-framework/allure-mocha) - It generates report and runs a server to display all the reports.
To see the allure report-
```sh
npm run report
```

2. [spec reporter](https://mochajs.org/#reporters)- It is the default mocha reporter to display report on the terminal.

Use of more than one reporter has been made possible by using [mocha-multi](https://github.com/glenjamin/mocha-multi)

# Code-Coverage
[Istanbul.js nyc](https://istanbul.js.org/docs/tutorials/mocha/) is used as code coverage tool.

# Api Documentation
The project uses [apiDoc](http://apidocjs.com/) to document the Apis. To generate and see the api documentation use-
```sh
npm run generateDocument
```
