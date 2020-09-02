module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: 'https://strapi-enterprise-starter.herokuapp.com/',
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'random-secret-token'),
    },
  },
});
