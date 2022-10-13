module.exports = ({ env }) => ({
  host: env('HOST', '127.0.0.1'),
  port: env.int('PORT', 1337),
  url: 'http://138.197.211.43',
  app: {
    keys: env.array('APP_KEYS'),
  },
});
