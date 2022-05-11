const mongoose= require('mongoose')

const coachsSchema = new mongoose.Schema({
    Name : {type : String, required : true},
    speciality : {type : String, required : true}
})

module.exports = mongoose.model('Coach', coachsSchema)