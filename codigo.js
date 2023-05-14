const divContenedorProductos = document.querySelector("#contenedor-productos");
const selectCantProductosMostrar = document.querySelector("#opc-cant");
const selectCantProdPermitida = document.querySelector("#opc-cant-permitida");
const selectColorConfig = document.querySelector("#opc-color");
const pInfoConfProd = document.querySelector("#info-opc-prod p");

const vectImg = [
    "https://d3ugyf2ht6aenh.cloudfront.net/stores/536/860/products/varita-harry-potter-rod-weasley1-e8ac6faf59c16b979316362331109830-640-0.jpg",
    "https://files.cults3d.com/uploaders/14090674/illustration-file/26cb5144-88ac-4bd3-85ae-567590092b63/1%20(2).jpg",
    "https://files.cults3d.com/uploaders/14090674/illustration-file/26cb5144-88ac-4bd3-85ae-567590092b63/1%20(2).jpg",
    "https://files.cults3d.com/uploaders/14090674/illustration-file/26cb5144-88ac-4bd3-85ae-567590092b63/1%20(2).jpg",
    "https://files.cults3d.com/uploaders/14090674/illustration-file/26cb5144-88ac-4bd3-85ae-567590092b63/1%20(2).jpg",
    "https://files.cults3d.com/uploaders/14090674/illustration-file/26cb5144-88ac-4bd3-85ae-567590092b63/1%20(2).jpg",
    "https://files.cults3d.com/uploaders/14090674/illustration-file/26cb5144-88ac-4bd3-85ae-567590092b63/1%20(2).jpg",
    "https://files.cults3d.com/uploaders/14090674/illustration-file/26cb5144-88ac-4bd3-85ae-567590092b63/1%20(2).jpg",
    "https://files.cults3d.com/uploaders/14090674/illustration-file/26cb5144-88ac-4bd3-85ae-567590092b63/1%20(2).jpg",
    "https://files.cults3d.com/uploaders/14090674/illustration-file/26cb5144-88ac-4bd3-85ae-567590092b63/1%20(2).jpg",
];

const CSS_CLASE_CONFIG = "conf-color-";

/**
 * Inicia el reinicio de productos a mostrar en la pagina
 */
function reiniciarProdMostrar(){
    let cantProdMostrar = parseInt(selectCantProductosMostrar.value);
    let cantProdPermitidos = parseInt(selectCantProdPermitida.value);
    let confColorProd = parseInt(selectColorConfig.value);
    htmlGenerarProductos(cantProdMostrar, cantProdPermitidos, confColorProd);
    mostrarInfoConfProd(cantProdMostrar, cantProdPermitidos, confColorProd);
}


/**
 * Muestra en la pagina la info seleccionada por el usuario para los productos
 * @param {Number} cantProdMostrar en la pagina
 * @param {Number} cantProdPermitidos a comprar en la pagina por producto
 * @param {Number} confColorProd en valor numerico
 */
function mostrarInfoConfProd(cantProdMostrar, cantProdPermitidos, confColorProd) {
    pInfoConfProd.innerHTML = `
        La cantidad de productos a mostrar es: ${cantProdMostrar}<br>
        La cantidad de productos permitidos por compra es: ${cantProdPermitidos}<br>
        Los colores seleccionados a usar son: ${selectColorConfig[confColorProd].innerHTML}
    `;
}

/**
 * Genera el html para agregar productos segun los valores requeridos
 * @param {Number} cantidadProd a agregar en la pagina
 * @param {Number} cantPermitida a comprar de cada producto
 * @param {Number} confColorProd en valor numero correspondiente
 */
function htmlGenerarProductos(cantidadProd, cantPermitida, confColorProd){
    let claseCssUsar = CSS_CLASE_CONFIG + confColorProd + "-";
    divContenedorProductos.innerHTML = "";
    for (let i = 0; i < cantidadProd; i++) {
        divContenedorProductos.innerHTML +=`
            <div class="producto ${alternarColores(i, claseCssUsar)}" id="producto-${i}">
                <p>Producto ${i+1}</p>
                <div class="producto-img">
                    <img src="${vectImg[i]}" alt="producto ${i}">
                </div>
                ${htmlGenerarOpcionesPago(i)}
                ${htmlGenerarOpcionesCant(i, cantPermitida)}
                <button>Comprar</button>
            </div>
        `;        
   }
}

function htmlGenerarOpcionesCant(i, cantPermitida){
    return `
        <label for="cantidad-compra-prod-${i}">Seleccione cantidades</label>
        <select id="cantidad-compra-prod-${i}">
            ${htmlGenerarOpciones(cantPermitida)}
        </select>
    `;
}


/**
 * Devuelve el html necesario para agregar una lista de opciones de pago
 * @returns el html necesario para agregar una lista de opciones de pago
 */
function htmlGenerarOpcionesPago(i){
    return `
        <label for="producto${i}-tipo-pago">Seleccione pago</label>
        <select id="producto${i}-tipo-pago">
            <option value="">Efectivo</option>
            <option value="">Debito</option>
            <option value="">Credito</option>
        </select>
    `;
}

/**
 * Devuelve el html de la cantidad de opciones requeridas
 * @param {Number} cant de opciones a generar
 * @returns el html con la cantidad de opciones generadas correspondientes
 */
function htmlGenerarOpciones(cant){
    let opcionesHtml = "";
    for (let i = 0; i < cant; i++) {
        opcionesHtml += `
            <option value="${i+1}">${i+1}</option>
        `;
    }
    return opcionesHtml;
}

/**
 * Modifica la clase a la correspondiente dependinedo del numero de
 * producto a agregar
 * @param {Number} i numero del producto actual a agregar
 * @param {String} claseCssUsar que necesita ser modificada
 * @returns la clase correspondiente a agregar para el producto
 */
function alternarColores(i, claseCssUsar){
    return ((i%2) ? claseCssUsar+"b" : claseCssUsar+"a"); 
}