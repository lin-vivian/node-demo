var login = require('./login')
var user = require('./user')

exports.auth = {
    ...login,
    ...user
}
