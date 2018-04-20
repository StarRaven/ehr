const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults({
  static: './uploads'
})
const express = require('express')
const path = require('path')


// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)
server.use(express.static(path.join(__dirname,"www")))
server.use(jsonServer.bodyParser)

server.post('/delete-media-file', (req, res) => {
  console.log(req.body);
  console.log(req.body.path);
  fs.unlinkSync('./uploads/' + req.body.path);
  res.jsonp({
    success: true
  });
})

server.post('/delete-patient-file', (req, res) => {
  console.log(req.body);
  console.log(req.body.path);
  fs.unlinkSync('./uploads/' + req.body.path);
  res.jsonp({
    success: true
  });
})

/*
server.post('/delete-patient', (req, res) => {
  console.log(req.body.id);
  router.db.get('patients').removeById(req.body.id).write().then(()=>{
    res.jsonp({
      success: true
    });
  })
})
*/
var fs = require('fs');
// var express = require('express');
var multer = require('multer')

let storage_avatar = multer.diskStorage({
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
let upload_avatar = multer({
  storage: storage_avatar
});

// 单图上传
server.post('/upload-avatar', upload_avatar.single('avatar'), function (req, res, next) {
  var file = req.file;

  console.log('文件类型：%s', file.mimetype);
  console.log('原始文件名：%s', file.originalname);
  console.log('文件大小：%s', file.size);
  console.log('文件保存路径：%s', file.path);

  res.send({
    ret_code: '0',
    path: file.path.slice(8)
  });
});

let storage_audio = multer.diskStorage({
  //设置上传后文件路径，uploads文件夹会自动创建。
  destination: function (req, file, cb) {
    cb(null, './uploads/audios')
  },
  //给上传文件重命名，获取添加后缀名
  filename: function (req, file, cb) {
    let fileFormat = (file.originalname).split(".");
    let filename = file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1]
    cb(null, filename);
  }
});
let upload_audio = multer({
  storage: storage_audio
});

// 单图上传
server.post('/upload-audio', upload_audio.single('audio'), function (req, res, next) {
  var file = req.file;

  console.log('文件类型：%s', file.mimetype);
  console.log('原始文件名：%s', file.originalname);
  console.log('文件大小：%s', file.size);
  console.log('文件保存路径：%s', file.path);

  res.send({
    ret_code: '0',
    path: file.path.slice(8)
  });
});

let storage_image = multer.diskStorage({
  //设置上传后文件路径，uploads文件夹会自动创建。
  destination: function (req, file, cb) {
    cb(null, './uploads/pictures')
  },
  //给上传文件重命名，获取添加后缀名
  filename: function (req, file, cb) {
    let fileFormat = (file.originalname).split(".");
    let filename = file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1]
    cb(null, filename);
  }
});
let upload_image = multer({
  storage: storage_image
});

// 单图上传
server.post('/upload-image', upload_image.single('image'), function (req, res, next) {
  var file = req.file;

  console.log('文件类型：%s', file.mimetype);
  console.log('原始文件名：%s', file.originalname);
  console.log('文件大小：%s', file.size);
  console.log('文件保存路径：%s', file.path);

  res.send({
    ret_code: '0',
    path: file.path.slice(8)
  });
});

let storage_video = multer.diskStorage({
  //设置上传后文件路径，uploads文件夹会自动创建。
  destination: function (req, file, cb) {
    cb(null, './uploads/videos')
  },
  //给上传文件重命名，获取添加后缀名
  filename: function (req, file, cb) {
    let fileFormat = (file.originalname).split(".");
    let filename = file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1]
    cb(null, filename);
  }
});
let upload_video = multer({
  storage: storage_video
});

// 单图上传
server.post('/upload-video-video', upload_video.single('video-video'), function (req, res, next) {
  var file = req.file;

  console.log('文件类型：%s', file.mimetype);
  console.log('原始文件名：%s', file.originalname);
  console.log('文件大小：%s', file.size);
  console.log('文件保存路径：%s', file.path);

  res.send({
    ret_code: '0',
    path: file.path.slice(8)
  });
});

// 单图上传
server.post('/upload-video-thumb', upload_video.single('video-thumb'), function (req, res, next) {
  var file = req.file;

  console.log('文件类型：%s', file.mimetype);
  console.log('原始文件名：%s', file.originalname);
  console.log('文件大小：%s', file.size);
  console.log('文件保存路径：%s', file.path);

  res.send({
    ret_code: '0',
    path: file.path.slice(8)
  });
});

// Use default router
server.use(router)
server.get("/*",(req,res)=>{
  res.sendFile(path.join(__dirname,"www/index.html"))
})
server.listen(3000, () => {
  console.log("JSON Server is running. Listening on port 3000...");
})