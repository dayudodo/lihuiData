var path = require('path')
var fs = require('fs')
var md5 = require('blueimp-md5')

var content= fs.readFileSync('chenben.xls')
console.log(md5(content))