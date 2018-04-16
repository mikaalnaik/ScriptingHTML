
var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function reverse (html) {
  for(var i = 0; i < html.length; i++){
   var reverseHTML = html[i].split('').reverse().join('');
  console.log(reverseHTML);
}
}

getHTML(requestOptions,reverse)
