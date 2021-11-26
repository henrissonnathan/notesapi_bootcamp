const e = require("express");
const { Router } = require("express");
const { Usuario } = require("../bd")
const router = Router();

router.get("/:id?", async(req, res) => {
  let usuarios;
  if(req.params.id){
      //[resutado] = await Usuario.findAll({
        //where:{
       //   id: req.params.id,
       // }
      //})
  //}else{
      
  resutado = await Usuario.findOne({
        where:{
          id: req.params.id,
        }
      })
  }else{
    resutado = await Usuario.findAll();;
  }
  
  res.send(resutado);
});

router.post("/", async (req, res) => {
  const {nome,email,senha } = req.body;
  const {usuario, novoRegistro} = await Usuario.findOrCreate({
    defaults:{
      nome,
      email,
      senha,
    },
  });
  
    res.send(usuario);
});

router.put("/:id", async (req, res) => {
  const {nome,email,senha } = req.body;
  const { id } = req.params;

const usuario = await Usuario.update({
  nome,
  email,
  senha
},
{
   where:{
     id,
   },
 }
);

const usuario = await Usuario.findByPk(id);

  res.send({});
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params 
  const usuario = await Usuario.destroy({
    
    where: {
      id,
    }
  })

  
  res.send(usuario);
});

module.exports = router;