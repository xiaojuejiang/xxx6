const express=require('express')

const bodyParser=require('body-parser')

const user=require('./module/comment')

const router=express.Router()

router.use( bodyParser.urlencoded({extended: true}) )

router.use(bodyParser.json());

function render(req,res,data){
    res.render('index.html',{
        comment:data
    })
}

router.get('/',(req,res)=>{

    user.query()

    render(req,res,user.data)
})
router.get('/index.html',(req,res)=>{

    user.query()

    render(req,res,user.data)
})
.get('/post',(req,res)=>{
    res.render('post.html')
})
.post('/post/insert',(req,res)=>{

    console.log(req.body)
    user.insert(req.body)
    res.send('success')
})
.post('/post/delete',(req,res)=>{

    console.log(req.body)
    user.delete(req.body.id)
    res.send('success')
})


module.exports=router