const { Router } = require("express");
const express = require("express");
const router = express.Router();

router.get("/",function(req,res){
    res.send("Get usuario")

});

router.post("/",function(req,res){
    console.log(req.body);
    res.send("POST usuario")
})
router.put("/:id",function (req,res){
    res.send("up dat");
})
router.delete("/:id",function (req,res){
    res.send("usuario");
})
module.exports = router