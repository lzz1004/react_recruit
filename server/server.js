const express = require('express')
const mongoose = require('mongoose')

// 链接mongo
const DB_URL = 'mongodb://127.0.0.1:27017/imooc'
mongoose.connect(DB_URL)
mongoose.connection.on('connected',function(){
  console.log('mongo is connect success')
})
// 类似于mysql的表 mongo里有文档、字段的概念
const User = mongoose.model('user', new mongoose.Schema({
  user: {type:String,require:true},
  age: {type:Number,require:true}
}))
// // 新增数据
// User.create({
//   user:'xiaoming',
//   age:21
// },function(err,doc){
//   if(!err){
//     console.log(doc)
//   }else{
//     console.log(err)
//   }
// })

// 更新数据
// User.update({'user':'xiaoming'},{'$set':{age:26}},function(err,doc){
//   console.log(doc)
// })

// // 删除数据
// User.remove({age:18},function(err,doc){
//   console.log(doc)
// })
// 新建app
const app = express()

app.get('/',function(req, res){
  res.send('<h1>hello word</h1>')
})

app.get('/data',function(req, res){
  // 查找数据User.findOne(查找一条),User.find(查到列表)
  User.findOne({user:'xiaoming'},function(err,doc){
    return res.json(doc)
  })
})

app.listen(9093,function(){
  console.log('Node app start at port 9093')
})