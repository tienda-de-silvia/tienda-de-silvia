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



let articulos=[new Articulo("dewi",44,"imagenes/ropa2.png","hombre"),new Articulo("descrpi",32,"imagenes/ropa1.png","mujer"),new Articulo("dewi",44,"imagenes/ropa2.png","mujer")
,new Articulo("dewi",44,"imagenes/ropa2.png","mujer"),new Articulo("dewi",44,"imagenes/ropa2.png","mujer")
,new Articulo("dewi",44,"imagenes/ropa2.png","mujer"),new Articulo("dewi",44,"imagenes/ropa2.png","mujer")
,new Articulo("dewi",44,"imagenes/ropa2.png","mujer"),new Articulo("dewi",44,"imagenes/ropa2.png","mujer")
,new Articulo("dewi",44,"imagenes/ropa2.png","mujer"),new Articulo("dewi",44,"imagenes/ropa2.png","mujer")
,new Articulo("dewi",44,"imagenes/ropa2.png","mujer"),new Articulo("dewi",44,"imagenes/ropa2.png","mujer")
,new Articulo("dewi",44,"imagenes/ropa2.png","mujer"),new Articulo("dewi",44,"imagenes/ropa2.png","mujer")
,new Articulo("dewi",44,"imagenes/ropa2.png","mujer"),new Articulo("dewi",44,"imagenes/ropa2.png","mujer")
,new Articulo("dewi",44,"imagenes/ropa2.png","mujer")];

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