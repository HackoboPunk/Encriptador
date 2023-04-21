var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var muneco = document.querySelector(".caja-muneco");
var h3 = document.querySelector(".caja-h3");
var parrafo = document.querySelector(".caja-parrafo");
var resultado = document.querySelector(".texto-resultado");
var botonCopiar = document.querySelector('#boton-copiar');
var textoACopiar = document.querySelector('#texto-a-copiar');

botonEncriptar.onclick= encriptar;
botonDesencriptar.onclick= desencriptar;

function encriptar(){
    ocultarAdelante();
    var area = recuperarTexto();
    resultado.textContent = encriparTexto(area);
}
function desencriptar(){
    ocultarAdelante();
    var area = recuperarTexto();
    resultado.textContent = desencriparTexto(area);
}
function recuperarTexto(){
    var area = document.querySelector(".caja-texto");
    return area.value;
}
function ocultarAdelante(){
    muneco.classList.add('ocultar');
    h3.classList.add('ocultar');
    parrafo.classList.add('ocultar');
}
function encriparTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i=0; i<texto.length; i++){
        if(texto[i]=="a"){
            textoFinal = textoFinal+"ai"
        }
        else if(texto[i]=="e"){
            textoFinal = textoFinal+"enter"
        }
        else if(texto[i]=="i"){
            textoFinal = textoFinal+"imes"
        }
        else if(texto[i]=="o"){
            textoFinal = textoFinal+"ober"
        }
        else if(texto[i]=="u"){
            textoFinal = textoFinal+"ufat"
        }
        else{
            textoFinal=textoFinal+texto[i];
        };
    }
    return textoFinal;
}

function desencriparTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i=0; i<texto.length; i++){

        if(texto[i]=="a"){
            textoFinal = textoFinal+"a"
            i =i+1;
        }
        else if(texto[i]=="e"){
            textoFinal = textoFinal+"e"
            i =i+4;
        }
        else if(texto[i]=="i"){
            textoFinal = textoFinal+"i"
            i =i+3;
        }
        else if(texto[i]=="o"){
            textoFinal = textoFinal+"o"
            i =i+3;
        }
        else if(texto[i]=="u"){
            textoFinal = textoFinal+"u"
            i =i+3;
        }
        else{
            textoFinal=textoFinal+texto[i];
        };
    }
    return textoFinal;
}

botonCopiar.addEventListener('click', () => {
    const textoTemporal = document.createElement('textarea');
    textoTemporal.value = textoACopiar.innerText;
    document.body.appendChild(textoTemporal);
    textoTemporal.select();
    document.execCommand('copy');
    document.body.removeChild(textoTemporal);
});