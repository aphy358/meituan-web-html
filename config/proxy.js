
const argv = require('yargs').argv

// 测试环境api
const API_SERVER_TEST = 'http://192.168.1.212:8100'

// 本地开发环境api
const API_SERVER_LOCAL = 'http://192.168.101.148:8005'

const API_SERVER = argv.TEST_API ? API_SERVER_TEST : API_SERVER_LOCAL

module.exports = {
  '/login'     : API_SERVER,
  '/getCode'   : API_SERVER,
  '/backend/**': API_SERVER,
  '/pub/**'    : API_SERVER
}
