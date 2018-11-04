const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'feedback'
})

module.exports = {
    query : (req, res) => {
        let sqlStr = 'select * from comment order by id'

        connection.query(sqlStr, (err, result) => {
            if (err) res.send('404 is not found')
            res.render('index.html', {
                comment: result
            })
        })
    },

    insert : (req, res) => {
        let sqlStr = 'insert into comment set ?'
        connection.query(sqlStr, req.body, (err, result) => {
            if (err) res.send('添加失败:' + err.message)
            res.send('success')
        })
    },

    delete : (req, res) => {
        let sqlStr = 'delete from comment where id=?'
        connection.query(sqlStr, req.body.id, (err, result) => {

            if (err) res.status('500').send('删除失败:' + err.message)
            res.send('success')
        })
    }

}