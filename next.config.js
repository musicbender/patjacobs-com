const runtimeCaching = require('next-pwa/cache');

module.exports = require('next-pwa')({
  dest: 'public',
  disable: false,
  runtimeCaching,
});
