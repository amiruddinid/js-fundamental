const users = require('./api/v1/users');
const usersV2 = require('./api/v2/users');
const transactionV2 = require('./api/v2/transaction');
const auth = require('./api/v2/auth');

module.exports = {
    users,
    usersV2,
    transactionV2,
    auth
}