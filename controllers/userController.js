
class UserController {
  constructor(){
    this.names = []
    }

 showUsers(req, res) {
 
 res.send(this.names)
 }

 postUsers(req,res){
   const{body,headers} = req;
   

   if(body.name && headers.token ==="r2d2"){
     this.names.push(body.name)
     res.status(200).send("exito")
   }else if(body.name){
    res.status(401).send("Token inválido")
   }else{
    res.status(400).send("Valores mal ingresado")
   }
 }

 changeUsers(req,res){
  const{body} = req;

  if(body.name && body.index || body.index === 0){

    this.names.splice(body.index,1,body.name)
    res.status(200).send("exito")
  }else{
   res.status(400).send("Falta un valor")
  }
}

byeUsers(req,res){
  const{body} = req;
  console.log(body)
  console.log(body.index)
  if(body.index || body.index === 0){

    this.names.splice(body.index,1)
    res.status(200).send("Se ha borrado el nombre indicado")
  }else{
   res.status(400).send("Ups")
  }
}
}
module.exports = UserController;