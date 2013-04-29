
/**
 * Module dependencies.
 */

var fs = require('fs');
var size = require('./');

// 473 x 315
var buf = fs.readFileSync('droplet.jpg');
console.log(size(buf));
