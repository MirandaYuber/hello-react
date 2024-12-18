// const arreglo = new Array()
const arreglo = [1,2,3,4]
// arreglo.push(1)
// arreglo.push(2)
// arreglo.push(3)
// arreglo.push(4)

let arreglo2 = [...arreglo,5]

// recibe un callback: funcion que se ejecuta dentro del metodo
const arreglo3 = arreglo2.map(function (numero) {
    return numero * 2
})

console.log(arreglo)
console.log(arreglo2)
console.log(arreglo3)
