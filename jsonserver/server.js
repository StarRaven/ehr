const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

var fs = require('fs');
// var express = require('express');
var multer  = require('multer')

// var app = express();
var upload = multer({ dest: 'uploads/' });

// 单图上传
server.post('/upload-single', upload.single('logo'), function(req, res, next){
  var file = req.file;

    console.log('文件类型：%s', file.mimetype);
    console.log('原始文件名：%s', file.originalname);
    console.log('文件大小：%s', file.size);
    console.log('文件保存路径：%s', file.path);
    // console.log(req);
    // console.log(res);
    res.send({ret_code: '0'});
});

server.get('/form', function(req, res, next){
    var form = fs.readFileSync('./form.html', {encoding: 'utf8'});
    res.send(form);
});

// Use default router
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})