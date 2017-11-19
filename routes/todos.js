const express = require('express')
const router = express.Router()
const db = require('../models')

router.get('/', function(req, res){
    db.Todo.find()
    .then(function(todo){
        res.json(todos)
    })
    .catch(function(err){
        res.send(err)
    })
})

router.post('/', function(req, res){
    db.Todo.create(req.body)
    .then(function(newTodo){
        res.status(201).json(newTodo)
    })
    .catch(function(err){
        res.send(err)
    })
})

router.get('/:todoId', function(){
    db.Todo.findById(req.params.todoId)
    .then(function(foundTodo){
        res.json(foundTodo)
    })
    .catch(function(err){
        res.send(err)
    })
})

module.exports = router