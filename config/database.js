module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        uri:  env('DATABASE_URI', 'mongodb://localhost:27017/lighthouse-cms'),
      },
      options: {
        ssl: env('DATABASE_SSL', false),
      },
    },
  },
});
