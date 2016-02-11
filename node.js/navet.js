var fs = require('fs');
var https = require('https');

var options = {
   passphrase  : fs.readFileSync('client.key'),
   pfx : fs.readFileSync('client.p12'),
   hostname  : 'ppx4.skatteverket.se',
   path  :  '/na/na_epersondata_demo/V2/personpostXML?wsdl',
   rejectUnauthorized: false,
};

var req = https.get(options, function (res) {
  res.on('data', function(d) {
      process.stdout.write(d);
   });
});

req.on('error', function(e) {
  process.stderr.write(e +' ');
});
