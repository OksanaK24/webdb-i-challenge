const server = require('./server.js');


const host = process.env.HOST || "localhost"
const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(`Listening on http://${host}:${PORT}`);
});
