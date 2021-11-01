'use strict';
const AES = require('crypto-js/aes');
const ENC = require('crypto-js/enc-utf8');

const KEY = 'yunyu';

const EncryptFunc = (payload, key = KEY) => {
  return AES.encrypt(JSON.stringify(payload), key).toString();
};

const DecryptFunc = (payload, key = KEY) => {
  const bytes = AES.decrypt(payload, key);
  const result = JSON.parse(bytes.toString(ENC));
  return result;
};

module.exports = {
  EncryptFunc,
  DecryptFunc,
};
