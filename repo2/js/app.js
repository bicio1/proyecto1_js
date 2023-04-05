let i = 3
const Bananas = 15, Manzanas = 40, Peras = 50

function agregar() {
    let tienda = prompt("¿ Que frutas quiere comprar ?\n 1: Bananas\n 2: Manzanas \n 3: Peras \n 4: Pasar por caja")
    let total = 0

    do {
        switch (tienda) {
            case "1":
                let numBananas = Number(prompt(" El kilo de Bananas: $15 \n Cuantos kilos desea?:"))
                for (let i = 0; i < numBananas; i++) {
                    total += Bananas
                }
                break;
            case "2":
                let numManzanas = Number(prompt(" El kilo de Manzanas: $40 \n Cuantos kilos desea?:"))
                for (let i = 0; i < numManzanas; i++) {
                    total += Manzanas
                }
                break;
            case "3":
                let numRepuestos = Number(prompt(" El kilo de Peras: $50 \n Cuantos kilos desea?:"))
                for (let i = 0; i < numRepuestos; i++) {
                    total += repuestos
                }
                break;
            case "4":
                alert("Gracias por su compra.")
                break;
            default:
                alert("Por favor, seleccione una opción válida.")
                break;
        }
        if (tienda !== "4") {
            tienda = prompt("¿seguir comprando?\n 1: Bananas \n 2: Manzanas \n 3: Peras \n 4: Pasar por caja")
        }
    }while (tienda !== "4")

    return total
}

do{
let usuario = prompt("Ingrese su nombre:")
let apellido = prompt("Ingrese su apellido:")
const BLANCO = " "

let nombreCompleto = usuario + BLANCO + apellido

alert(" Hola " + nombreCompleto + " bienvenido a la fruteria online ") 

let edad = prompt(" ¿cuantos años tenes? ");

if(edad >=18){
    alert(" genial,si tenes tarjeta propia ");
}else{
    alert(" espero tengas tarjeta y no me estes haciendo perder el tiempo ")
}

        let total = 0
        let num
        do {
            num = Number(prompt(" Seleccione una opción:\n 1: Agregar al carrito\n 2: Ver total\n 3: Comprar\n 4:Solicitar factura con IVA \n 5: Salir"))
            switch (num) {
                case 1:
                    total += agregar()
                    break;
                case 2:
                    alert(" El total es: " + total + " pesos ")
                    break;
                case 3:
                    alert(" ¡Muchas gracias!, vuelva prontos ")

                    break;
                case 4:
                    alert(" Su factura \n Precio neto " + total + " \n Precio total a pagar con afano de IVA 21 %" + (total * 1.21))
                    total = 0
                    break;
                case 5:
                    alert(" ¡Muchas gracias!, vuelva prontos ")
                    break;
                default:
                    alert(" La opción no es valida.")
                    break;
            }
} while (num !== 5)

} while (i >= 0)