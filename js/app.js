let llaveAES = 'mi-secreto';

function encriptar(){
    let textEntrada = document.getElementById('entradaTexto').value;
    if (!textEntrada) {
        alert("Por favor, ingrese un texto para encriptar.");
        return; 
    }
    let textoEnMinusculas =textEntrada.toLowerCase();
    let textoEncriptado = CryptoJS.AES.encrypt(textoEnMinusculas, llaveAES).toString();
    mostrarResultado(textoEncriptado);
}

function desencriptar(){
    let textEntrada = document.getElementById('entradaTexto').value;
    if (!textEntrada) {
        alert("Por favor, ingrese un texto para desencriptar.");
        return; 
    }
    let bytes = CryptoJS.AES.decrypt(textEntrada, llaveAES);
    let textoDesencriptado = bytes.toString(CryptoJS.enc.Utf8);
    mostrarResultado(textoDesencriptado);
}

function mostrarResultado(texto){
    let contenedorResultado = document.getElementById('resultadoEncriptador');
    
    contenedorResultado.innerHTML = `
        <div class="contenedor-taResult">
            <textarea class="txt-area-resultado">${texto}</textarea>
        </div>
        <div class="contenedor-btnResult">
            <button class="btnResult" onclick="copiar()" >Copiar</button>
        </div>
    `;
}

function copiar(){
    let textoACopiar = document.querySelector('.txt-area-resultado');
    textoACopiar.select();
    textoACopiar.setSelectionRange(0, 99999); 
    document.execCommand("copy");

    alert("Texto copiado al portapapeles" );
    limpiarTxt();
}

function limpiarTxt(){
    document.querySelector('#entradaTexto').value='';
}