var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function printHTML (html) {
  for(var i = 0; i < html.length; i++)
  console.log(html[i]);
}

getHTML(requestOptions,printHTML)
