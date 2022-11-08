module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  // url: 'https://portal.acralending.com',
  url: 'https://b6fe-107-194-134-60.ngrok.io',
  app: {
    keys: env.array('APP_KEYS'),
  },
});
