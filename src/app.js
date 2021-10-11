const express = require("express");
const path = require('path');
require("./db/conn");
const User = require('./models/usermessage')
const hbs = require("hbs");
const Product = require('./models/products');
const bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT || 3000;

const staticpath = path.join(__dirname, "../public");
const templatepath = path.join(__dirname, "../templates/views");
const partialpath = path.join(__dirname, "../templates/partials");
app.use('/css', express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css" )))
app.use('/js', express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js" )))
app.use('/jq', express.static(path.join(__dirname,"../node_modules/jquery/dist" )))
app.use(express.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use(express.static(staticpath))
app.set("view engine", "hbs");
app.set("views", templatepath);
hbs.registerPartials(partialpath);

//routing

app.get("/index",(req,res)=>{
    res.render("index");
})
app.get("/contact",(req,res)=>{
    res.render("contact");
})
app.get("/product", async (req,res)=>{
    const products = await Product.find({});
    res.render("product", { products: products });
})
app.get("/about",(req,res)=>{
    res.render("about");
})

app.get('/products', async (req, res) => {
    const products = await Product.find({});
    res.json(products);
});

app.post('/products', async (req, res) => {
    console.log(req.body);
   const product = await Product.create(req.body);
   res.json(product);
});
app.post("/contact",async (req,res) =>{
    try{
        // res.send(req.body)
        const userData = new User(req.body);
      await userData.save();
      res.status(201).render("index");
    }catch (error) {
        res.status(500).send(error);
    }
})
//server create
app.listen(port,()=>{
    console.log(`server is running at port no ${port}`);
})