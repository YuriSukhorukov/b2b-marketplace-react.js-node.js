// TODO добавить валидацию cookies

const {appConfig}       = require('./src/config.json');
const app               = require('./src/app');

const port 				      = process.env.PORT || appConfig.port;

app.listen(port, () => {
  console.log(`Market server listening on port ${port}`);
});