OAuth._stateParam = function (loginStyle, credentialToken, redirectUrl) {
  return setStateParam(loginStyle, credentialToken, redirectUrl)
}

OAuth._stateParamAsync = function (loginStyle, credentialToken, redirectUrl, callback) {
  setStateParam(loginStyle, credentialToken, redirectUrl, callback)
}

function setStateParam (loginStyle, credentialToken, redirectUrl, callback) {
  let state = {
    loginStyle,
    credentialToken,
    isCordova: Meteor.isCordova
  }

  if (loginStyle === 'redirect') {
    state.redirectUrl = redirectUrl || ('' + window.location)
  }

  let id = Random.id()

  Meteor.call('zhaoyao91:short-oauth-state.setState', id, state, function (err) {
    if (callback) {
      callback(err, id)
    } else if (err) {
      console.error(err)
    }
  })

  return id
}