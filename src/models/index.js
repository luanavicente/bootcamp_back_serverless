const mongoose = require('mongoose')
const config = require('../config')
const Todo = require('./Todo')

async function connect(){
    if(mongoose.connection.readyState !== 1){
        await mongoose.connect(config.mongodb.connectionString, config.mongodb.options)
        console.log('conectado...')
    }
}

async function disconnect(){
    if(mongoose.connection.readyState === 1){
        await mongoose.connection.close()
    }
}

module.exports = {
    connect,
    disconnect,
    Todo
}