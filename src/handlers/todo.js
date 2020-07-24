const { connect, User} = require('../models')
const { OK } = require('../services/responses')
const Todo = require('../models/Todo')

async function get(event) {
    await connect() 

    const todos = await Todo.find()

    return OK(todos)
};

async function create(event) {
    await connect() 

    const bodyParams = JSON.parse(event.body)
    const { message } = bodyParams
    const todo = await Todo.create({ message, done: false })

    return OK(todo)
};

async function update(event){
    await connect() 

    const _id = event.pathParameters

    const bodyParams = JSON.parse(event.body)
    const todo_updated = await Todo.findOneAndUpdate({ _id }, bodyParams, { new: true })

    return OK(todo_updated)
}

async function remove(event){
    await connect() 

    const _id = event.pathParameters
    const todo_deleted = await Todo.deleteOne({ _id })
 
    return OK(todo_deleted)
}

module.exports = {
    get,
    create,
    update,
    remove
}