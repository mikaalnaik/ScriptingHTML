var https = require('https');

// function getHTML (options, callback) {

  /* Add your code here */
  var fetcher = function(response) {

    response.on('data', function(chunk) {
        var bufferedData = []
          bufferedData.push(chunk.toString())

        // for(var i = 0; i < bufferedData.length; i++) {
          // console.log(bufferedData[i]);
        // }
        printHTML(bufferedData)
      });
  };

  function getAndPrintHTML (targetHost, targetPath) {
    /* Add your code here */
       targetHost = requestOptions.host
       targetPath = requestOptions.path
  }

// }

function printHTML (html) {
  for(var i = 0; i < html.length; i++)
  console.log(html[i]);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};




// getHTML(requestOptions, printHTML)
https.request(requestOptions, fetcher).end();
