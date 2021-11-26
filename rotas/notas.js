const { Router } = require("express");
const { Nota }= require("../bd");
const router = express.Router();

router.get("/:id?", async(req,res)=> {
    const { id } = req,params;
    let resutado
    if(id){
    resutado = await Nota.findOne({
        where: {
            id,
        },
        include:[
            {
                model: Usuario,
                as: "usuario",
            }
        ]
    })
    }else{
        resutado = await Nota.finAll({
            include:[
                {
                    model:usuario,
                    as: "usuario",
                },
            ],
        });
    }
    res.send(resutado);
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