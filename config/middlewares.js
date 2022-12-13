module.exports = [
  'strapi::errors',
  'strapi::security',
   {
      name: "strapi::security",
      config: {
        contentSecurityPolicy: {
          directives: {
            "script-src": ["'self'", "editor.unlayer.com"],
            "frame-src": ["'self'", "editor.unlayer.com"],
            "img-src": [
              "'self'",
              "data:",
              "cdn.jsdelivr.net",
              "strapi.io",
              "s3.amazonaws.com",
            ],
          },
        },
      },
    },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  // 'strapi::body',
  {
    name:"strapi::body",
    config: {
      jsonLimit: "20mb",
      formLimit: "20mb",
      textLimit: "20mb",
      formidable: {
        maxFileSize: 20 * 1024 * 1024,
      },
    },
  },
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
