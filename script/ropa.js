class Articulo{
    constructor(descripcion,precio,url,genero) {
        this.descripcion = descripcion;
        this.precio = precio;
        this.url = url;
        this.genero = genero;
    }
    getDescripcion(){
        return this.descripcion;
    }
    getPrecio(){
        return this.precio;
    }
    getUrl(){
        return this.url;
    }
    getGenero(){
        return this.genero;
    }
}



let articulos=[new Articulo("Bomber cuerina importado talla desde la m a xxxl",95,"/imagenes/ropaH1.png","hombre"),
               new Articulo("Polos camiseros varón",35,"/imagenes/ropaH2.png","hombre"),
               new Articulo("Blazers varón tela eston",75,"/imagenes/ropaH3.png","hombre"),
               new Articulo("Jogger varón camuflado talla desde la 28 a la 34",75,"/imagenes/ropaH5.png","hombre"),
               new Articulo("Pantalones jeans varón talla desde la 28 a la 34",60,"/imagenes/ropaH6.png","hombre"),
               new Articulo("Bermuda cargó tallas desde la 30 a la 36",50,"/imagenes/ropaH7.png","hombre"),
               new Articulo("Jogger varón talla desde la 16 a la 36",70,"/imagenes/ropaH8.png","hombre"),
               new Articulo("Poleras billabong talla desde la s a la l tallas completas",60,"/imagenes/ropaH9.png","hombre"),
               new Articulo("Conjunto puma talla completas desde la s a la l",95,"/imagenes/ropaH10.png","hombre"),
               new Articulo("Camiseta bulls talla desde la s a la xl",35,"/imagenes/ropaH11.png","hombre"),
               new Articulo("Casaca cuerina importada",95,"/imagenes/ropaH12.png","hombre"),
               new Articulo("Polo deportivo",32,"/imagenes/ropaH13.png","hombre"),
               new Articulo("Chaleco dralon",32,"/imagenes/ropaH14.png","hombre"),
               new Articulo("Casaca doble cara tallas hasta las xxxl",98,"/imagenes/ropaH15.png","hombre"),
               new Articulo("Chompas abrigadoras talla estandar",50,"/imagenes/ropaH16.png","hombre"),
               new Articulo("Conjunto deportivo",95,"/imagenes/ropaH17.png","hombre"),
               new Articulo("Chompas en hilo",45,"/imagenes/ropaH18.png","hombre"),
               //MUJERES:
               new Articulo("Abrigos paño bebé tallas desde la s a la xl",110,"/imagenes/ropaM1.png","mujer"),
               new Articulo("Abrigos paño bebé tallas desde la s a la xl",110,"/imagenes/ropaM2.png","mujer"),
               new Articulo("Abrigos paño bebé tallas desde la s a la xl",110,"/imagenes/ropaM3.png","mujer"),
               new Articulo("Sacos de paño cortos",98,"/imagenes/ropaM4.png","mujer"),
               new Articulo("Sacos en cuello neru paño bebé tallas de la s a la xl",110,"/imagenes/ropaM5.png","mujer"),
               new Articulo("Blusas de seda dama",40,"/imagenes/ropaM6.png","mujer"),
               new Articulo("Flor pants escuba",40,"/imagenes/ropaM7.png","mujer"),
               new Articulo("Abrigos paño elástico talla desde la s a la xl",115,"/imagenes/ropaM8.png","mujer"),
               new Articulo("Chompa en hilo",35,"/imagenes/ropaM9.png","mujer"),
               new Articulo("Chompa en hilo",35,"/imagenes/ropaM10.png","mujer"),
               new Articulo("Chompa en hilo",35,"/imagenes/ropaM11.png","mujer"),
               new Articulo("Chompa en hilo",35,"/imagenes/ropaM12.png","mujer"),
               new Articulo("Blusa de seda",42,"/imagenes/ropaM13.png","mujer"),
               new Articulo("Blusa floreada",40,"/imagenes/ropaM14.png","mujer")]

let contenedor=document.getElementById('contenedor-ropa');

function llenarArticulos(genero){
    let numeroBoton=1;
    let contenido="";
    if(genero=="mujer")
        numeroBoton=contarPrendasVaron()+1;
    articulos.forEach(element => {
        if(element.getGenero() == genero){
            contenido+=`<div class="contenedor-elemento" id="container-${numeroBoton}">
                        <img src="${element.getUrl()}" alt="" class="contenedor-elemento_img" id="imagen-${numeroBoton}">
                        <p class="contenedor-elemento_descripcion" id="descrip-${numeroBoton}">${element.getDescripcion()}</p>
                        <input type="button" value="ver Precio" class="contenedor-elemento_boton" onclick="mostrarPrecio(this,${element.getPrecio()})" id="boton_precio-${numeroBoton}">
                    </div>`;
            numeroBoton++;        
        }
        
    });

    contenedor.innerHTML=contenido;
    //despues que se escribe el codigo html:
    document.querySelectorAll(".contenedor-elemento").forEach(el => {
        el.addEventListener("click", e => {
            let numeroElemento=e.target.getAttribute("id");
            let posGuion=numeroElemento.indexOf("-");
            numeroElemento=numeroElemento.slice(posGuion+1,numeroElemento.length);
            console.log(numeroElemento);
            let elid='boton_precio-'+numeroElemento;

            if (!document.getElementById(elid).contains(e.target)){
                mostrarImagenGrande(numeroElemento);
            }
        });
    });
}



function mostrarImagenGrande(numeroElemento){
    let ventana=document.getElementById('ventanaImagen');
    let img = document.getElementById('imagenGrande');
    ventana.style.display='flex';
    console.log();
    
    img.setAttribute('src',articulos[numeroElemento-1].getUrl());
}


function cerrarVentanaImg(){
    let ventana=document.getElementById('ventanaImagen');
    ventana.style.display='none';
}

let ventanaImagenGrande=document.getElementById("ventanaImagen");
ventanaImagenGrande.addEventListener('click', function(e){

    if (!document.getElementById('contenedorDeImagen').contains(e.target)){
        ventanaImagenGrande.style.display='none';
    } 
})

function mostrarPrecio(elementoAMostrar,precio){
    elementoAMostrar.setAttribute("value",precio);
    elementoAMostrar.style.background="white";
    elementoAMostrar.style.color="green";
}
function contarPrendasVaron(){
    let contador=0;
    articulos.forEach(element => {
        if(element.getGenero()=="hombre") 
            contador++;
    });
    console.log("el contador es "+contador);
    return contador;
}   