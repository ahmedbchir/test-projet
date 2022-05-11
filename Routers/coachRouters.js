const express = require('express');
const router = express.Router();
const Coach = require('../Models/coachSchema')
const {coach}= require('../controllers/coach')
const { authMiddleware } = require('../middlewares/authMiddlewares')

//ADD
router.post("/addCoach",authMiddleware,coach)

//UPDATE
router.put("/:id", authMiddleware, async (req, res) => {
  
    try {
      const updatedCoach = await Coach.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedCoach);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  //DELETE
  router.delete("/:id", authMiddleware, async (req, res) => {
    try {
      await Coach.findByIdAndDelete(req.params.id);
      res.status(200).json("Coach has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  });

    //GET COACH
router.get("/find/:id", authMiddleware, async (req, res) => {
    try {
      const user = await Coach.findById(req.params.id);
      const { password, ...others } = user._doc;
      res.status(200).json(others);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  //GET ALL COACHS
  router.get("/", authMiddleware, async (req, res) => {
    const query = req.query.new;
    try {
      const coachs = query
        ? await Coach.find().sort({ _id: -1 }).limit(5)
        : await Coach.find();
      res.status(200).json(coachs);
    } catch (err) {
      res.status(500).json(err);
    }
  });
module.exports = router