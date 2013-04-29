
/**
 * Module dependencies.
 */

var fs = require('fs');
var size = require('./');

// [path]
var path = process.argv[3] || 'droplet.jpg';

// 473 x 315
var buf = fs.readFileSync(path);
console.log(size(buf));
