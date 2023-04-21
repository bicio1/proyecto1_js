class Verduras{
    constructor(numeracion,Fruta,Color,Importada){
        this.numeracion = numeracion;
        this.Fruta = Fruta;
        this.Color = Color;
        this.Importada = Importada;
        this.cantidad = 1
    }
}

const listado = [
    new Verduras("1","bananas","amarillas","de Argentina"),
    new Verduras("2","manzanas","rojas","de Peru"),
    new Verduras("3","peras","verdes","de Chile"),
]


class ControladorVerduras{
    constructor(){
        this.listado = []
    }

    cargarProducto(){
        this.listado = [
            new Verduras("1","bananas","amarillas","de Argentina"),
            new Verduras("2","manzanas","rojas","de Peru"),
            new Verduras("3","peras","verdes","de Chile"),
        ]
    }

    mostrarProducto(){
        let acumulador = ""
        this.listado.forEach(element => {
            acumulador += "\n"+ element.Fruta + " " + element.Color + " " + element.Importada
        });
        return (acumulador)
    }

    agregarALista(){
        let Combo = new Verduras (Number(prompt("¡Que desea? \n 1) bananas \n 2) manzanas \n 3) peras ")),prompt("Ingrese el color: "),prompt("Ingrese la importacion: "));
        this.listado.push(Combo)
    }
    
    ponerPrecio(){
        this.listado.forEach(function(Fruta){
            Fruta.precio = Number(prompt("Ahora por favor, ingrese el precio sugerido de las Frutas " + Fruta.Importada + " "+ Fruta.Color))})
        
    }

    buscarproducto(Fruta){
        
        let encontrado =  this.listado.find(element => element.Fruta == Fruta)
        return encontrado
    }
}

class ControladorCarrito{
    constructor(){
        this.listaCarrito = []
    }

    agregarAlCarrito(producto){
        this.listaCarrito.push(producto)
    }

    eliminarCarrito(Fruta){
        this.listaCarrito = this.listaCarrito.filter(elemento => elemento.Fruta !== Fruta)
        return this.listaCarrito
    }

    mostrarCarrito(){
        let mostrar = ""
        this.listaCarrito.forEach(producto => {
            mostrar += producto.Fruta + producto.Color + producto.Importada  + " precio: " +  producto.precio + " cantidad" + producto.cantidad +" "+ "\n" 
        })
        return mostrar
    }

    calcularTotal(){
        let total = 0
        this.listaCarrito.forEach(producto => {
            total += producto.precio * producto.cantidad
        })
        return total 
    }

}

const verduraControlador = new ControladorVerduras() 
const carritoControlador = new ControladorCarrito()


let rta =""
let promptInicial = "a"
let Fruta = ""
let VerduraEncontrada = ""
let eliminar = ""
let repetir = "no"


verduraControlador.cargarProducto()

while((promptInicial != "si") && (promptInicial != "no")){
    promptInicial = prompt("¡Bienvenido a La Fruteria con Precios a Conciencia!\n Frutas disponibles: \n" + verduraControlador.mostrarProducto() + "\n ¿Quiere empezar su pedido? \n SI\n NO" ).toLowerCase()
    if(promptInicial == "si"){
        verduraControlador.agregarALista()
        verduraControlador.ponerPrecio()
    }else if(promptInicial == "no"){
        verduraControlador.ponerPrecio()
    }
}

do{
Fruta = prompt("Ingrese la fruta para agregar al carrito" )
VerduraEncontrada = verduraControlador.buscarproducto(Fruta)
carritoControlador.agregarAlCarrito(VerduraEncontrada)
rta = prompt("Ingrese 'ESC' para salir o Tecla cualquiera para seguir").toUpperCase()
}
while(rta != "ESC")
alert(carritoControlador.mostrarCarrito())
eliminar = prompt("Desea eliminar algun producto del carrito? SI \n NO").toLowerCase()
if(eliminar == "no"){
    alert("El total a pagar es de " + carritoControlador.calcularTotal())
}else if( eliminar == "si"){
    carritoControlador.eliminarCarrito(Number(prompt("Ingrese la fruta a eliminar")))
    alert(carritoControlador.mostrarCarrito())
    alert("El total a pagar es de " + carritoControlador.calcularTotal())
}
