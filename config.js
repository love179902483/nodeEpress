const path = require('path')

const config = {
    "userPath": path.join('./inventory','/user.txt'),
    "privateKey": path.join('./rsa_private_key.pem'),
    "publicKey": path.join('./rsa_public_key.pem')
}

module.exports = config