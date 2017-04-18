OAuth._stateParam = function (loginStyle, credentialToken, redirectUrl) {
  let state = {
    loginStyle,
    credentialToken,
    isCordova: Meteor.isCordova
  }

  if (loginStyle === 'redirect')
    state.redirectUrl = redirectUrl || ('' + window.location)

  const id = Random.id()

  Meteor.call('zhaoyao91:short-oauth-state.setState', id, state, function (err) {
    if (err) console.error(err)
  })

  return id
}