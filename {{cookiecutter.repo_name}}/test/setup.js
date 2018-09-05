const chai = require('chai');
global.assert = chai.assert; // Using Assert style 
global.expect = chai.expect; // Using Expect style 
global.should = chai.should(); // Using Should style
global.mocha = require('mocha'); //Test framework
global.supertest = require('supertest'); // to manage the http request
chai.use(require('chai-json-schema')); // to validate the json schema
global.retryCount = 3; //Retry count to pass in api call
global.faker = require('faker'); // to get fake data
global.naughty = require('naughty-string-validator'); //To validate tests with naughty strings
global.testData = require('../src/testData.js'); //Require test data globally

/**
 * passing baseUrl from command line. Use it like: baseUrl=www.test.com npm test
 * The project uses open apis from https://restful-booker.herokuapp.com
 */
global.baseUrl = supertest(process.env.baseUrl === undefined ? 'https://restful-booker.herokuapp.com/' : process.env.baseUrl); // Base api url

/**
 * Using winston as logger
 * Logging levels in winston-
 * { error: 0, warn: 1, info: 2, verbose: 3, debug: 4, silly: 5 }
 * Passing the logLevel from command line. Use it like: logLevel=debug npm test
*/
const winston = require('winston');
global.logger = winston;
const logLevel = process.env.logLevel;
if (logLevel !== undefined) {
    winston.level = logLevel;
} else {
    winston.level = 'error';
}

/**
 * configuring winston to print logs in a file with name timestamp.log and also printing on the console depending on the logLevel-
 * { error: 0, warn: 1, info: 2, verbose: 3, debug: 4, silly: 5 }
 */
winston.add(winston.transports.File,
    {
        filename: './logs/' + Date.now() + '.log',
        level: 'debug',
        prettyPrint: true
    });
winston.addColors(
    {
        silly: 'magenta',
        debug: 'blue',
        verbose: 'cyan',
        info: 'green',
        warn: 'yellow',
        error: 'red'
    });
winston.remove(winston.transports.Console);
winston.add(winston.transports.Console,
    {
        level: logLevel,
        prettyPrint: true,
        colorize: true,
        silent: false,
        timestamp: false
    });