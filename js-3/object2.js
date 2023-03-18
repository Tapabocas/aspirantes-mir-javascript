let persona={
nombre:"David",
edad:"27",
ciudad:"Bogotá",
profesion:"Ing."
}

console.log(persona);


function presentacion(objeto){
    objeto=persona
    console.log(objeto.nombre +"  " + objeto.edad + "  " + objeto.ciudad)
    
}
let mensaje=presentacion(persona)
console.log(mensaje);
persona.hobbies=["tenis","leer","jugar","dibujar"]
//console.log(persona);
console.log(persona.hobbies);
size=Object.keys(persona).length
for (let i=0;i<size-1;i++){
    console.log(persona.hobbies[i]);
}
