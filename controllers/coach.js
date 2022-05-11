const Coach = require("../Models/coachSchema")
exports.coach = async(req,res)=>{
    try{
        const{Name,speciality}=req.body
        const newCoach = new Coach({Name,speciality})
        const post = await newCoach.save();
        res.status(200).json({post})
    }
    catch{
        res.status(500).json({msg:`something went wrong ${error}`})
    }
}