const mongoose = require('mongoose');
const productsSchema = new mongoose.Schema({
    Date_exp : {type : Date, required : true},
    Quantite : {type : Number, required : true},
    Prix : {type : Number, required : true}
})

module.exports = mongoose.model('Product',productsSchema)