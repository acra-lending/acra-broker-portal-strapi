module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  // url: 'https://portal.acralending.com',
  url: 'https://1532-70-183-23-147.ngrok.io',
  app: {
    keys: env.array('APP_KEYS'),
  },
});
