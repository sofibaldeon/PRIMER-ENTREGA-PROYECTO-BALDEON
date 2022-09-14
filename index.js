//MENU TIENDA VETERINARIA GAUDÍ 

let productos =[
    {nombre:"Ken-l perro x15kg", precio: "5840"},
    {nombre: "Kenl perro cachorro x15kg", precio: "6380"},
    {nombre: "ProPlan sterilized cat x3kg", precio: "6200"},
    {nombre: "ProPlan Neurocare x7.5kg", precio: "11050"},
    {nombre: "Royal canin gato renal x1,5kg", precio: "3450"},
]

function mensajeInicio(){
    let mensaje = "Bienvenido a Tienda Veterinaria Gaudí: Cual es el producto que desea comprar?"
    let count = 1

    for(let producto of productos){
    mensaje += `\n${count}. ${producto.nombre} - $ ${producto.precio}`
    count ++ 
    }

    mensaje += `\n${count}. Salir`

    return mensaje 
}

function cantidadProducto(producto){
    return prompt(`Cuantas unidades de ${producto.nombre} desea comprar?`)
}

function subTotal (cantidadProducto, producto){
    alert(`Usted compro ${cantidadProducto} unidades de ${producto.nombre} por $ ${cantidadProducto * producto.precio}`)
    return cantidadProducto * producto.precio
}

function calcularTotal(arr){
    return arr.reduce((acc, el) => acc + el, 0)
}

let opcion = 0
let total = []

do {
    opcion = parseInt(prompt(mensajeInicio()))

    if (opcion === productos.lenght + 1){
        alert (`El total fue de $ ${calcularTotal(total)}. \nGracias por comprar en Tienda Veterinaria Gaudí.`)
        break
    }

    total.push(subTotal(cantidadProducto(productos[opcion -1]), productos[opcion -1]))

}while(true)

