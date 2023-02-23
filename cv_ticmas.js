document.getElementById("seccion-correo").addEventListener("mouseenter", function () {
    document.getElementById("correo").style.color = "white";
})
document.getElementById("seccion-correo").addEventListener("mouseleave", function () {
    document.getElementById("correo").style.color = "black";
})

document.getElementById("seccion-ubicacion").addEventListener("mouseenter", function () {
    document.getElementById("ubicacion").style.color = "white";
})
document.getElementById("seccion-ubicacion").addEventListener("mouseleave", function () {
    document.getElementById("ubicacion").style.color = "black";
})

document.getElementById("seccion-twitter").addEventListener("mouseenter", function () {
    document.getElementById("twitter").style.color = "white";
})
document.getElementById("seccion-twitter").addEventListener("mouseleave", function () {
    document.getElementById("twitter").style.color = "black";
})


let opcion = true;

document.getElementById("modo-oscuro").addEventListener("click", function () {

    if(opcion) {
        document.getElementById("columna-izquierda").style.backgroundColor = "darkslategrey";
        document.getElementById("principal").style.background = "grey";
        document.getElementById("nombre-postulante").style.color = "darkslategrey";

        document.getElementById("parrafo-datos1").style.color = "darkslategrey";
        document.getElementById("parrafo-datos1").style.color = "darkslategrey";
        document.getElementById("parrafo-datos2").style.color = "darkslategrey";
        document.getElementById("parrafo-datos3").style.color = "darkslategrey";

        document.getElementById("puesto-ocupado1").style.color = "darkslategrey";
        document.getElementById("puesto-ocupado2").style.color = "darkslategrey";
        document.getElementById("puesto-ocupado3").style.color = "darkslategrey";

        document.getElementById("datos-educacion1").style.color = "darkslategrey";
        document.getElementById("datos-educacion2").style.color = "darkslategrey";
        document.getElementById("datos-educacion3").style.color = "darkslategrey";

        document.getElementById("inst-educ1").style.color = "darkslategrey";
        document.getElementById("inst-educ2").style.color = "darkslategrey";
        document.getElementById("inst-educ3").style.color = "darkslategrey";
        opcion = false;
    } else {
        document.getElementById("columna-izquierda").style.backgroundColor = "rgb(38, 136, 136)";
        document.getElementById("principal").style.background = "";
        document.getElementById("nombre-postulante").style.color = "rgb(38, 136, 136)";

        document.getElementById("parrafo-datos1").style.color = "rgb(38, 136, 136)";
        document.getElementById("parrafo-datos1").style.color = "rgb(38, 136, 136)";
        document.getElementById("parrafo-datos2").style.color = "rgb(38, 136, 136)";
        document.getElementById("parrafo-datos3").style.color = "rgb(38, 136, 136)";

        document.getElementById("puesto-ocupado1").style.color = "rgb(38, 136, 136)";
        document.getElementById("puesto-ocupado2").style.color = "rgb(38, 136, 136)";
        document.getElementById("puesto-ocupado3").style.color = "rgb(38, 136, 136)";

        document.getElementById("datos-educacion1").style.color = "rgb(38, 136, 136)";
        document.getElementById("datos-educacion2").style.color = "rgb(38, 136, 136)";
        document.getElementById("datos-educacion3").style.color = "rgb(38, 136, 136)";

        document.getElementById("inst-educ1").style.color = "rgb(38, 136, 136)";
        document.getElementById("inst-educ2").style.color = "rgb(38, 136, 136)";
        document.getElementById("inst-educ3").style.color = "rgb(38, 136, 136)";
        opcion = true;
    }
})
