let llaveAES = 'mi-secreto';

function encriptar(){
    let textEntrada = document.getElementById('entradaTexto').value;
    let textoEnMinusculas =textEntrada.toLowerCase();
    //console.log(`Mostrando texto del textArea ${textoEnMinusculas}`)
    let textoEncriptado = CryptoJS.AES.encrypt(textoEnMinusculas, llaveAES).toString();
    //console.log(`Mostrando encriptado: ${textoEncriptado}`)
    mostrarResultado(textoEncriptado);
}

function desencriptar(){
    let textEntrada = document.getElementById('entradaTexto').value;
    //console.log(`Mostrando texto del textArea ${textEntrada}`)

    let bytes = CryptoJS.AES.decrypt(textEntrada, llaveAES);
    let textoDesencriptado = bytes.toString(CryptoJS.enc.Utf8);
    //console.log(`Mostrando desencriptado: ${textoDesencriptado}`)
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