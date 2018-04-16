var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};


function printUpperCase (html) {
  for(var i = 0; i < html.length; i++)
  var upperHTML = html[i].toLowerCase();
  console.log(upperHTML)

}

getHTML(requestOptions,printUpperCase)
