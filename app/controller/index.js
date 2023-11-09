const users = require('./api/v1/users');
const usersV2 = require('./api/v2/users');
const transactionV2 = require('./api/v2/transaction');
const auth = require('./api/v2/auth');
const media = require('./api/v2/media');

module.exports = {
    users,
    usersV2,
    transactionV2,
    auth,
    media
}