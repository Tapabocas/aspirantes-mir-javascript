function maxIndex(arreglo)  {
    var mayor = 0
    var indice=0
    if (arreglo.length<1){
        indice=-1;
    }
    else {


    for(var i=0; i<arreglo.length; i++){
        if (mayor<arreglo[i]){
            mayor = arreglo[i];
            indice = i;
        }
        }
        
    }
    return indice
}







console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8 , 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1