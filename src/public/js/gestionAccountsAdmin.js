const menu_icon = document.getElementById("menu-icon");
const barraLateral = document.querySelector(".barra-lateral");
const spans = document.querySelectorAll("span");
const menu = document.querySelector(".menu");
const contenedorContenido = document.querySelector(".contenedor_contenido");
const barraUsuario = document.querySelector(".barra_usuario");



const fotoUsuario = document.querySelector(".foto_usuario");
const eleccionUsuario2 = document.querySelector(".eleccion_usuario2");

// DEL RESPONSIVE
const eleccionUsuario = document.querySelector(".eleccion_usuario");
const fotoUsuario2 = document.querySelector(".foto_usuario2");

// Funcion de navegacion de botones
// const editarPerfil = document.getElementById("editar_perfil");
// const cerrarSesion = document.getElementById("cerrar_sesion");
// const editarHerramienta = document.querySelectorAll(".btn-edit");
// const btnAddNewAdmin = document.querySelector(".btn-add-subadmin");

// ESPECIAL DE ESTA HOJA

// VENTANA ELIMINAR
const btnTrash = document.querySelectorAll(".btn-trash-open");
const ventanaEliminarHerramienta = document.querySelector(".ventana_eliminar_herramienta");
const noEliminar = document.getElementById("btn-not");
const btnCerrar = document.getElementById("btn-close");




// RESPONSIVE ELECCION DE CERRA SESION Y EDITA PERFIL
fotoUsuario2.addEventListener("click", () => {
    eleccionUsuario.classList.toggle("aparece");

})

// Ocultar el menú si se hace clic fuera de él RESPONSIVE
document.addEventListener("click", (event) => {
    const isClickInside = eleccionUsuario.contains(event.target) || fotoUsuario2.contains(event.target);
    // Comprueba si el elemento en el que se hizo clic (event.target) está contenido dentro del div (eleccion_usuario2 o fotoUsuario)
    // ||, si el clic ocurrió dentro de cualquiera de estos elementos, isClickInside será TRUE.
    //  contains, se usa para determinar si el elemento en el que se hizo clic (event.target) es un descendiente del div con la clase.

    if (!isClickInside) { // si es diferente a TRUE, significa que el clic no ocurrio dentro del div
        eleccionUsuario.classList.remove("aparece");
    }
});


// NORMAL ELECCION DE CERRA SESION Y EDITA PERFIL
fotoUsuario.addEventListener("click", () => {
    eleccionUsuario2.classList.toggle("apareceInicial");

})

// Ocultar el menú si se hace clic fuera de él NORMAL
document.addEventListener("click", (event) => {
    const isClickInside = eleccionUsuario2.contains(event.target) || fotoUsuario.contains(event.target);

    if (!isClickInside) {
        eleccionUsuario2.classList.remove("apareceInicial");
    }
});



// MENU RESPONSIVE
menu.addEventListener("click", () => {
    // Esta el el RESPOSIVE, vuelva a la posicion
    barraLateral.classList.toggle("max-barra-lateral");

    // classList.contains() es una función de JavaScript que se 
    // utiliza para verificar si un elemento HTML tiene una clase específica
    if (barraLateral.classList.contains("max-barra-lateral")) {
        menu.children[0].style.display = "none"; // icon menu
        menu.children[1].style.display = "block"; //icon circulo
    }
    else {
        menu.children[0].style.display = "block"; // icon menu
        menu.children[1].style.display = "none"; // icon circulo
    }

});

// MENU DESPEGABLE NORMAL VISTA
menu_icon.addEventListener("click", () => {
    // Barra de Arriba
    barraUsuario.classList.toggle("min-barra");

    // Barra Lateral
    barraLateral.classList.toggle("mini-barra-lateral");

    // organizar el margin-left del CONTENIDO. 
    contenedorContenido.classList.toggle("min-contenido");



    // Para todos los span encontrados le agregamos la CALSE .oculto
    spans.forEach((span) => {
        span.classList.toggle("oculto");
    });
});



// NAVEGACION a otras paginas de html
// editarPerfil.addEventListener("click", () => {
//     window.location.href = 'editarPerfilAdmin.html';
// })

// cerrarSesion.addEventListener("click", () => {
//     window.location.href = 'index.html';
// })

// editarHerramienta.forEach(function (button) {
//     button.addEventListener("click", function () {
//         window.location.href = 'editarHerramienta.html';
//     });
// });


// ESPECIAL DE ESTA HOJA


// VENTANA ELIMINAR
// Añade un evento de clic a cada botón de 'Abrir Ventana'
btnTrash.forEach(function (button) {
    button.addEventListener("click", function () {
        ventanaEliminarHerramienta.style.display = 'block';
        // ventanaEliminarHerramienta.classList.add("open");
    });
});


noEliminar.addEventListener("click", function () {
    ventanaEliminarHerramienta.style.display = 'none';
    // ventanaEliminarHerramienta.classList.add("close");
});

// NAVEGACION a otras paginas de html

// cerrarSesion.addEventListener("click", () => {
//     window.location.href = 'index.html';
// });





// editarPerfil.forEach(function (button) {
//     button.addEventListener("click", function () {
//         window.location.href = 'editarPerfilAdmin.html';
//     });
// });


