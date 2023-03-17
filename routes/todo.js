var express = require('express');
var router = express.Router();
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

/* GET users listing. */
router.get('/',async function(req, res, next) {
    if(!('user' in req.session)) return res.send('<div>Bạn chưa nhập mật khẩu. <a href="/login">Đăng nhập</a></div>');
    var todos = req.session.user.todos;
    var todos_completed = [], todos_active = [];
    for(var i=0;i<todos.length;i++){
        if(todos[i].is_done) todos_completed.push(todos[i]);
        else todos_active.push(todos[i]);
    }
    res.render('todoView', {todos: todos, todos_active: todos_active, todos_completed: todos_completed});
});

router.post('/',async function(req, res, next) {
    var todos = req.session.user.todos;
    if('save' in req.body) {
        for(var i=0;i<todos.length;i++){
            if(todos[i].id.toString() in req.body) {
                await prisma.todo.update({
                    where: {id: todos[i].id,},
                    data: {is_done: true,},
                });
            }
                
            else await prisma.todo.update({
                    where: {id: todos[i].id,},
                    data: {is_done: false,},
                });
        }
        req.session.user = await prisma.user.findUnique({where: {email: req.session.user.email,}, include: { todos: true }});
    }
    if('delete' in req.body){
        for(var i=0;i<todos.length;i++){
            if(todos[i].id.toString() in req.body) 
                await prisma.todo.delete({where: {id: todos[i].id,},});
        }
        req.session.user = await prisma.user.findUnique({where: {email: req.session.user.email,}, include: { todos: true }});
    }
    res.redirect('/todo');
});

router.get('/:id',async function(req, res, next) {
    if(!('user' in req.session)) return res.send('<div>Bạn chưa nhập mật khẩu. <a href="/login">Đăng nhập</a></div>');
    var todo = await prisma.todo.findUnique({where: {id: parseInt(req.params.id),},});
    if(todo != null)
        res.render('todoEdit', {title: todo.title, desc: todo.desc, is_done: todo.is_done});
    else 
        res.render('todoEdit', {title: '', desc: '', is_done: false});
  });

router.post('/:id',async function(req, res, next) {
    var t = req.body.title;
    var d = req.body.description;
    var i = ('is_done' in req.body);
    if(t == null || t == 'undefined' || d == null || d == 'undefined')
        return res.redirect('/todo/'+ req.params.id);
    var todo = await prisma.todo.findUnique({where: {id: parseInt(req.params.id),},});
    if('save' in req.body){
        var todo = await prisma.todo.findUnique({where: {id: parseInt(req.params.id),},});
        if(todo == null) 
            await prisma.user.update({
                where: {
                    email: req.session.user.email,
                  },
                data: {
                    todos: {
                        create: {
                            title: t,
                            desc: d,
                            is_done: i,
                        },
                    },
                },
            })
        else
            await prisma.todo.update({
                where: {id: parseInt(req.params.id),},
                data: {
                    title: t,
                    desc: d,
                    is_done: i,
                },
            })
    }
    if('delete' in req.body){
        if(todo != null) await prisma.todo.delete({where: {id: parseInt(req.params.id),},});
    }
    req.session.user = await prisma.user.findUnique({where: {email: e,}, include: { todos: true }});
    return res.redirect('/todo/'+ req.params.id);
});

module.exports = router;