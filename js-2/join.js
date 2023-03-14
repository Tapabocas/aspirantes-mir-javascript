function join(arreglo) {
    let espacio = ""
    for (let i = 0; i <= arreglo.length-1; i++){
        espacio = espacio + arreglo[i] + " "
    }
    return espacio
}

console.log(join([1,"se","esta","escuchando","doble",2,"*"]))