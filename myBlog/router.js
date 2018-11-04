const express=require('express')

const bodyParser=require('body-parser')

const user=require('./module/comment')

const router=express.Router()

router.use( bodyParser.urlencoded({extended: true}) )

router.use(bodyParser.json());


router.get('/', user.query)
router.get('/index.html',user.query)
.get('/post',(req,res)=>{
    res.render('post.html')
})
.post('/post/insert',user.insert)
.post('/post/delete',user.delete)


module.exports=router