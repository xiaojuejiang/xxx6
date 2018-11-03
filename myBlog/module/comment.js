const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'feedback'
})

let user = {}


user.query = function () {

    let sqlStr = 'select * from comment order by id'

    connection.query(sqlStr, (err, result) => {
        if (err) return console.log('查询失败:' + err.message)
        user.data = result
    })
}

// let comment={
//     user:'xiaoming',
//     comment:'还有一个'
// }

user.insert = function (data) {
    let sqlStr='insert into comment set ?'
    connection.query(sqlStr,data,(err,result)=>{

        if(err)return console.log('添加失败:'+err.message)

    })
}

user.delete = function (data) {
    let sqlStr='delete from comment where id=?'
    connection.query(sqlStr,data,(err,result)=>{

        if(err)return console.log('删除失败:'+err.message)

    })
}

module.exports = user