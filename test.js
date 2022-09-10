const mongoose = require('mongoose')
const post = require('./models/Post');
mongoose.connect('mongodb+srv://ahmadxon:6W79PL425srxd3WI@cluster0.gr9nf4l.mongodb.net/node-blog-test');

// post.create({
//     title: 'my first blog',
//     describtion: 'My first descr',
//     content: 'lorem ipsum content'
// }, (err, post)=>{console.log(err,post)})
//
