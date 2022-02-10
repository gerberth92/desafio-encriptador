var botonEncriptar = document.querySelector("#btn-encriptar");
var imput = document.querySelector("#input-texto");
var mensajeSalida = document.querySelector("#msg");

function encriptar() {

    var texto = imput.value;
    var textoencriptar = texto.replace(/[e]/g,"enter")
                              .replace(/[i]/g,"imes")
                              .replace(/[a]/g,"ai")
                              .replace(/[o]/g,"ober")
                              .replace(/[u]/g,"ufat");

    mensajeSalida.value = textoencriptar;
    imput.value = "";
}

botonEncriptar.addEventListener('click', (e)=>{
    e.preventDefault();
    encriptar();
});