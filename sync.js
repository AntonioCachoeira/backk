const {Fabicante, Produto} = require('./model/associacao')
const conn = require('./db/conn')

async function syncDatabase(){
    try{
        // await conn.sync({force: true})
        console.log('FOIII');
    }catch{
        console.error('n foi mesmo');
    }finally{
        conn.close()
        console.log('fechou a conexão');
    }
}

syncDatabase()