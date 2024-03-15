module.exports = ({ env }) => ({
  // ...
  test: {
    enabled: true,
    resolve: "./src/plugins/test",
    config: {
      test: env("TEST", "blah"),
    },
  },
  // ...
});
