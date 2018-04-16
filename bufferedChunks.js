var https = require('https');


var options = {
  host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
};

// called by https when the request is made.
var callback = function(response) {


  response.on('data', function(chunk) {
      var bufferedData = []
        bufferedData.push(chunk.toString())

      for(var i = 0; i < bufferedData.length; i++){
        console.log(bufferedData[i]);
    }
  });
}



https.request(options, callback).end();
