const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
    name: {type: String},
    price: {type: Number},
    path: {type: String},
});

module.exports = mongoose.model('products', postSchema, 'Product');
