var zlib = require('zlib');
var http = require('http');
var fs = require('fs');
//var gzipme = require('gzipme');
//import gzipme from 'gzipme'


var wstream = fs.createWriteStream('lionel-messi.jpg.gz');
var rstream = fs.createReadStream('lionel-messi.jpg');
//console.log(rstream);



var gzip = zlib.createGzip({level : 9});

rstream   // reads from myfile.txt
  .pipe(gzip)  // compresses
  .pipe(wstream)  // writes to myfile.txt.gz
  .on('finish', function () {  // finished
    console.log('done compressing');
  });
