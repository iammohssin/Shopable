const mongoose = require('mongoose');

//creating a database
mongoose.connect("mongodb://localhost:27017/Shopable",{
        //useCreateIndex:true,
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=>{
        console.log("Connection successful");
}).catch((error)=>{
    console.log(error);
})
