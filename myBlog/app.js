const express=require('express')
const fs=require('fs')
const path=require('path')
const router=require('./router.js')

const app=express()

app.engine('html',require('express-art-template'))

// app.set('view engine','html')

// app.set('views','./art_page')

// app.set('view engine','ejs')

// app.set('views','./ejs_pages')

app.use('/public/',express.static('./public/'))

// const comment=[
//     {
//         id:1,
//         name:'ls',
//         comment:'测试1'
//     },
//     {
//         id:2,
//         name:'ww',
//         comment:'测试2'
//     },
//     {
//         id:3,
//         name:'zl',
//         comment:'测试3'
//     },
//     {
//         id:4,
//         name:'zs',
//         comment:'测试4'
//     },
//     {
//         id:5,
//         name:'qe',
//         comment:'测试5'
//     },
//     {
//         id:6,
//         name:'s3',
//         comment:'测试6'
//     }
// ]

app.use(router)

.listen('5000',()=>{
    console.log('server is runing at http://127.0.0.1:5000')
})
