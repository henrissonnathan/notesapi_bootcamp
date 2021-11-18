const { Router } = require("express");
const express = require("express");
const router = express.Router();

router.get("/:id?",function(req,res){
    if(req.params.id){
    res.send("Nota ID "+ req.params.id)
    }else{
        res.send("todas as notas")
    }
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