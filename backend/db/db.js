const mongoose = require('mongoose');

const DB = async () => {
    try{
        const conn = await mongoose.connect("mongodb+srv://Lini:" + process.env.dbpass + "@cluster-commerce.vu9tf.mongodb.net/lekkify?retryWrites=true&w=majority",{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        console.log(`mongodb connected: ${conn.connection.host}`)
    }catch(err){
        console.error(err);
        process.exit(1);
    }
}
module.exports = DB;