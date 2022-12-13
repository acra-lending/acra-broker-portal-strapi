module.exports = ({ env }) => ({
    email: {
        config: {
            provider: 'nodemailer',
            providerOptions: {
              host: env('SMTP_HOST'),
              port: env('SMTP_PORT'),
              auth: {
                user: env('SMTP_USERNAME'),
                pass: env('SMTP_PASSWORD'),
              },
              // ... any custom nodemailer options
            },
            settings: {
              defaultFrom: 'no-reply@strapi.io',
              defaultReplyTo: 'example@strapi.io',
            },
        },
    },
    ezforms:{
      config:{
        captchaProvider: {
          name: 'none',
        },
        enableFormName: false,
        notificationProviders: [
          {
            name: 'email',
            enabled: true,
            config: {
              subject: "PreScreen Request", // Optional
              from: 'noreply@acralending.com' // Required
            }
          },
        ]
      }
    },
    'users-permissions': {
      config: {
        ratelimit: {
          interval: 60000,
          max: 10000
        }
      }
    }
  });