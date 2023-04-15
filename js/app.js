class Verduras{
    constructor(Fruta,Color,Importada){
        this.Fruta = Fruta;
        this.Color = Color;
        this.Importada = Importada;
        this.Cantidad = 1
    }
}

const listado = [
    new Verduras("bananas","verde","argentina"),
    new Verduras("manzanas","roja","peru"),
    new Verduras("peras","verde","chile"),
]


class ControladorVerduras{
    constructor(){
        this.listado = []
    }

    cargarProducto(){
        this.listado = [
            new Verduras("bananas","verde","argentina"),
            new Verduras("manzanas","roja","peru"),
            new Verduras("peras","verde","chile"),
        ]
    }

    mostrarProducto(){
        let acumulador = ""
        this.listado.forEach(element => {
            acumulador += "\nfruta: "+ element.Fruta+", color: " + element.Color+ ", importada: " + element.Importada + ", precio: " +element.precio
        });
        return (acumulador)
    }

    agregarALista(){
        let Combo = new Verduras (Number(prompt("Ingrese el fruto que quiera: ")),prompt("Ingrese el color: "),prompt("Ingrese la importacion: "));
        this.listado.push(Combo)
    }
    
    ponerPrecio(){
        this.listado.forEach(function(Fruta){
            Fruta.precio = Number(prompt("Ahora por favor, ingrese el precio sugerido de las: " + Fruta.Importada + " "+ Fruta.Color))})
        
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

    eliminarCarrito(id){
        this.listaCarrito = this.listaCarrito.filter(elemento => elemento.Fruta !== Fruta)
        return this.listaCarrito
    }

    mostrarCarrito(){
        let mostrar = ""
        this.listaCarrito.forEach(producto => {
            mostrar += "fruta: " + producto.Fruta  + " color: " + producto.Color  + " importada: " + producto.Importada  + " precio: " +  producto.precio + " cantidad" + producto.cantidad +" "+ "\n" 
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
    promptInicial = prompt("Bienvenido a La fruteria online, Frutas disponibles: \n" + verduraControlador.mostrarProducto() + "\n Desea sugerir algun combo? \n SI\n NO" ).toLowerCase()
    if(promptInicial == "si"){
        verduraControlador.agregarALista()
        verduraControlador.ponerPrecio()
    }else if(promptInicial == "no"){
        verduraControlador.ponerPrecio()
    }
}

do{
id = prompt("Ingrese la fruta para agregar al carrito" )
VerduraEncontrada = verduraControlador.buscarproducto(id)
carritoControlador.agregarAlCarrito(VerduraEncontrada)
rta = prompt("Ingrese 'ESC' para salir o Tecla cualquiera para seguir").toUpperCase()
}
while(rta != "ESC")
alert(carritoControlador.mostrarCarrito())
eliminar = prompt("Desea eliminar algun producto del carrito? SI \n NO").toLowerCase()
if(eliminar == "no"){
    alert("El total a pagar es de " + carritoControlador.calcularTotal())
}else if( eliminar == "si"){
    carritoControlador.eliminarCarrito(Number(prompt("Ingrese el id del producto a eliminar")))
    alert(carritoControlador.mostrarCarrito())
    alert("El total a pagar es de " + carritoControlador.calcularTotal())
}
