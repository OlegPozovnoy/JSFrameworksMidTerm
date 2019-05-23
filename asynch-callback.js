const https = require("https");

function getInsult(callback) {
  const url = "https://insult.mattbas.org/api/insult";

  https.get(url, function(client) {
    client.on("data", function(data) {
      callback(data.toString());
    });
  });
}

getInsult(function(insult) {
  console.log(insult);
});
