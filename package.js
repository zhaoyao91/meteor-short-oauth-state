Package.describe({
  name: 'zhaoyao91:short-oauth-state',
  version: '0.0.2',
  summary: 'make oauth state short in url',
  git: 'https://github.com/zhaoyao91/meteor-short-oauth-state',
  documentation: 'README.md'
})

Package.onUse(function (api) {
  api.versionsFrom('1.2.1')
  api.use('ecmascript')
  api.use('mongo', 'server')
  api.use('oauth')
  api.use('random')

  api.addFiles('server.js', 'server')
  api.addFiles('client.js', 'client')
})