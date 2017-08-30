import * as http from 'http'
import Api from './api/api'

const config = require('./config/env/config')()
const server = http.createServer(Api)

server.listen(config.serverPort)
server.on('lintening', ()=> console.log(`O servidor está rodando na porta ${config.serverPort}`) )
server.on('error', (error: NodeJS.ErrnoException)=> console.log(`Ocorreu um erro: ${error}`))