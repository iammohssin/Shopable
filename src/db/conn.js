const mongoose = require('mongoose');
const uri = "mongodb+srv://root:root@cluster0.qgxlv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
//creating a database
mongoose.connect(uri,{
        //useCreateIndex:true,
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=>{
        console.log("Connection successful");
}).catch((error)=>{
    console.log(error);
})
