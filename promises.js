const https = require("https");

function getInsult() {
  const url = "https://insult.mattbas.org/api/insult";

  return new Promise(function(resolve, reject) {
    https
      .get(url, function(client) {
        client.on("data", function(data) {
          resolve(data.toString());
        });
      })
      .on("error", function(error) {
        reject(error);
      });
  });
}

getInsult(function(insult) {
  console.log(insult);
});

getInsult()
  .then(function(insult) {
    console.log(insult);
  })
  .catch(function(error) {
    console.log(error);
  });
