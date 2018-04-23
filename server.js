const State = new Mongo.Collection('oauth_state')

State._ensureIndex({expiredAt: 1}, {expireAfterSeconds: 0})

function getExpiredAt () {
  const now = new Date().getTime()
  const duration = 10 * 60 * 1000 // 10 minutes are enough for a try of oauth2 login
  return new Date(now + duration)
}

// The state parameter is normally generated on the client using
// `btoa`, but for tests we need a version that runs on the server.
//
OAuth._generateState = function (loginStyle, credentialToken, redirectUrl) {
  const state = {loginStyle, credentialToken, redirectUrl}
  const expiredAt = getExpiredAt()
  return State.insert({state, expiredAt})
}

OAuth._stateFromQuery = function (query) {
  const doc = State.findOne({_id: query.state})
  return doc && doc.state || {}
}

Meteor.methods({
  'zhaoyao91:short-oauth-state.setState'(id, state) {
    check(id, String);
    check(state, Match.Any);
    const expiredAt = getExpiredAt()
    State.upsert({_id: id}, {$set: {state, expiredAt}})
    return id
  }
})
