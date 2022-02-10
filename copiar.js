var buttonCopy = document.querySelector("#btn-copy"); 
var textoInput = document.querySelector("#msg");

function copiar() {

    var content = textoInput;
    
    content.select(); 
    document.execCommand("copy");
}

buttonCopy.addEventListener('click', (e)=>{
e.preventDefault();
copiar()   
});