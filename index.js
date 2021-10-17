console.log( ' we are using the chalk npm')

let chalk = require('chalk');
let validator = require('validator');

// console.log( chalk.white.bgRed.underline.bold.inverse('hello world'));

// console.log( "using another npm validator");

let res = validator.isEmail('city@city.com');

console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));

