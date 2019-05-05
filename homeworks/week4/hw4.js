const request = require('request');

const options = {
  url: 'https://api.twitch.tv/helix/games/top',
  method: 'GET',
  headers: {
    'Client-ID': 'z97jvca5asox81v22jbb24eziykct5',
  },
};

request(options, (error, response, body) => {
  const obj = JSON.parse(body);
  obj.data.forEach((value) => {
    console.log(`${value.id} ${value.name}`);
  });
});
