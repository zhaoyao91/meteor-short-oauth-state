# zhaoyao91:short-oauth-state
Make oauth state short in url.

## Installation
`Meteor add zhaoyao91:short-oauth-state`

## Note about Implementation
This package shorten oauth state in url by saving state in server, not blocking the oauth flow in the mean time. We
assume that the saving-state method call is faster enough than the oauth flow, but if it is not the truth, this package
won't work.

If you have better suggestion, please tell us.