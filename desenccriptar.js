var botonDesencriptar = document.querySelector("#btn-desencriptar");
var mensajeEntrada = document.querySelector("#input-texto");
var mensajeSalida = document.querySelector("#msg");

function desencriptar () {

    var texto = mensajeEntrada.value;
    var textoDesencriptar = texto.replace(/\enter/g, "e")
                                 .replace(/\imes/g, "i")
                                 .replace(/\ai/g, "a")
                                 .replace(/\ober/g, "o")
                                 .replace(/\ufat/g, "u");

    mensajeSalida.value = textoDesencriptar;
    mensajeEntrada.value = "";
}

botonDesencriptar.addEventListener('click', (e)=>{
    e.preventDefault();
    desencriptar();
});