var express = require('express');
var router = express.Router();
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('login');
});

router.post('/', async function(req, res, next) {
  if('signup' in req.body) {
    var e = req.body.email;
    var p = req.body.password;
    if(p == '' || p == 'undefined') return res.send('<div>Bạn chưa nhập mật khẩu. <a href="/login">Quay trở lại</a></div>');
    var user = await prisma.user.findUnique({where: {email: e,},});
    if(user != null) return res.send('<div>Tài khoản đã tồn tại. <a href="/login">Quay trở lại</a></div>');
    var user = await prisma.user.create({
      data: {
        email: e,
        password: p,
      },
    });
    if (user != null) {
      req.session.user = user;
      return res.send('<div>Tạo tài khoản thành công. <a href="/todo">Xem danh sách todo</a></div>');}
    else return res.send('<div>Tạo tài khoản thất bại.</div>');
  }
  if('login' in req.body){
    var e = req.body.email;
    var p = req.body.password;
    
    if(p == '' || p == 'undefined') return res.send('<div>Bạn chưa nhập mật khẩu. <a href="/login">Quay trở lại</a></div>');
    var user = await prisma.user.findUnique({where: {email: e,}, include: { todos: true }});
    if(user == null) return res.send('<div>Tài khoản không tồn tại. <a href="/login">Quay trở lại</a></div>');
    if(p != user.password) return res.send('<div>Sai mật khẩu. <a href="/login">Quay trở lại</a></div>');
    req.session.user = user;
    return res.send('<div>Đăng nhập thành công. <a href="/todo">Xem danh sách todo</a></div>');
  }
});

module.exports = router;
