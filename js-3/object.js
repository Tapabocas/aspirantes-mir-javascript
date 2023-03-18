let pedro={
    nombre:'Pedro Perez',
    edad:30,
    activo:true,
    hobbies:["programar", "squash", "piano"],
    saluda: function saluda(){
        console.log("Hola, me llamo "+this.nombre)
    }
}
//console.log(pedro)
//console.log(pedro.edad)
pedro.estatura=1.8
//console.log(pedro)
delete pedro.activo
//console.log(pedro)
let valores = Object.values(pedro)
//console.log("Valores : " + valores)
let llaves =Object.keys(pedro)
//console.log("Llaves: " + llaves)
//console.log("Resultado :")

for (i=0;i<valores.length;i++){
    console.log(llaves[i] + " : " + valores[i])
}

pedro.saluda()

/*

Agrégale al objeto una función llamada saluda que retorne la frase “Hola, me llamo ” seguido del nombre de la persona.
Llama la función saluda y verifica el resultado, debería decir “Hola, me llamo Pedro Perez”.

*/



function saluda(name){
    for (i=0;i<pedro.length;i++)
    console.log("Hola me llamo "+pedro.nombre)
}
