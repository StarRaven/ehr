const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults({
  static: './uploads'
})

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

var fs = require('fs');
// var express = require('express');
var multer = require('multer')

let storage = multer.diskStorage({
  //设置上传后文件路径，uploads文件夹会自动创建。
  destination: function (req, file, cb) {
    cb(null, './uploads/avatars')
  },
  //给上传文件重命名，获取添加后缀名
  filename: function (req, file, cb) {
    let fileFormat = (file.originalname).split(".");
    let filename = file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1]
    cb(null, filename);
  }
});
let upload = multer({
  storage: storage
});

// 单图上传
server.post('/upload-avatar', upload.single('avatar'), function (req, res, next) {
  var file = req.file;

  console.log('文件类型：%s', file.mimetype);
  console.log('原始文件名：%s', file.originalname);
  console.log('文件大小：%s', file.size);
  console.log('文件保存路径：%s', file.path);
  // console.log(req);
  // console.log(res);
  res.send({
    ret_code: '0',
    path: file.path.slice(8)
  });
});
/*
server.get('/form', function (req, res, next) {
  var form = fs.readFileSync('./form.html', {
    encoding: 'utf8'
  });
  res.send(form);
});
*/

// Use default router
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})