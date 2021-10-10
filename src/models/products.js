const mongoose = require('mongoose');

//Attributes of the Course object
var productSchema = new mongoose.Schema({
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
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Product', productSchema);