const mongoose = require('mongoose');

//Attributes of the Course object
const newarivalSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: 'This field is required!'
    },
    price: {
        type: Number
    },
    image: {
        type: String,
        default: 'https://i.picsum.photos/id/1035/200/200.jpg?hmac=IDuYUZQ_7a6h4pQU2k7p2nxT-MjMt4uy-p3ze94KtA4'
    },
    desc: {
        type: String
    }
});
module.exports = mongoose.model('newarival', newarivalSchema);