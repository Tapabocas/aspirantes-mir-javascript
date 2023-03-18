let receta={}
receta.nombre="Sandwich"
receta.ingredientes=[]

receta.ingredientes.push({"pan":2})
receta.ingredientes.push({"Queso":1})
//console.log(receta)
let objeto=Object.keys(Object.values(receta)[1][0])
console.log(objeto)

let longitud=receta.ingredientes.length
let resultado=0
for (let i=0 ; i<longitud; i++){
    asno=parseInt(Object.values(Object.values(receta)[1][i]))
    resultado+=asno
}  
console.log("RESULTADO ES "+resultado)