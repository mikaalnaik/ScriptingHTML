var https = require('https');


function getAndPrintHTML (targetHost, targetPath) {

  /* Add your code here */
     targetHost = requestOptions.host
     targetPath = requestOptions.path 
}

var requestOptions = {
  host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
};

var callback = function(response) {


  response.on('data', function(chunk) {
      var bufferedData = []
        bufferedData.push(chunk.toString())

      for(var i = 0; i < bufferedData.length; i++){
        console.log(bufferedData[i]);
    };
  });
};


getAndPrintHTML(requestOptions)
https.request(requestOptions, callback).end();
