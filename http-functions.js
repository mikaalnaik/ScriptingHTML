module.exports = function getHTML (options, callback) {
    /* Your code here */

    var https = require('https');

      /* Add your code here */
      var fetcher = function(response) {
        response.on('data', function(chunk) {
            var bufferedData = []
              bufferedData.push(chunk.toString())
              callback(bufferedData)
            // }
          });
      };
      // function printHTML (html) {
      //   for(var i = 0; i < html.length; i++)
      //   console.log(html[i]);
      // }
      function getAndPrintHTML (targetHost, targetPath) {
        /* Add your code here */
           targetHost = requestOptions.host
           targetPath = requestOptions.path
      }
    var requestOptions = {
      host: 'sytantris.github.io',
      path: '/http-examples/step4.html'
    };
        https.request(requestOptions, fetcher).end();
  };
