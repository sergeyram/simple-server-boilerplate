module.exports = {
  scripts: {
    default: 'nps server.run',
    server: {
      run: {
        script: 'nodemon --watch src',
        description: 'run a simple server',
      },
    },
    test: {
      e2e: {
        script: 'cross-env NODE_ENV=test jest --testPathPattern=e2e -i --detectOpenHandles',
        description: 'run e2e tests',
      },
      unit: {
        script: 'cross-env NODE_ENV=test jest --testPathPattern=unit',
        description: 'run unit tests',
      },
    },
  },
};
