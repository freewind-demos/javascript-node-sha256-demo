const crypto = require('crypto')

const text = 'javascript-node-sha256-demo'
const secret = 'abcdefg'

const hash = crypto.createHmac('sha256', secret)
    .update(text)
    .digest('hex')

console.log(hash)