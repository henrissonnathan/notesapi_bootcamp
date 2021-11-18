const { Router } = require("express");
const express = require("express");
const router = express.Router();

router.get("/",function(req,res){
    res.send("Get nota")

});

router.post("/",function(req,res){
    console.log(req.body);
    res.send("POST nota")
})
router.put("/:id",function (req,res){
    res.send('nota');
})
router.delete("/:id",function (req,res){
    res.send('nota');
})
module.exports = router