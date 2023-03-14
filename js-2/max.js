function max(arreglo){
    var mayor = 0
    if (arreglo.length<1){
        mayor=undefined
    }
    else {
    for(var i=0; i<arreglo.length; i++){
        if (mayor<arreglo[i]){
         mayor = arreglo[i];
        }
        }
    }
return mayor
}
console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 70, 6, 5, 4,60,90,])) // 10
console.log(max([])) // undefined