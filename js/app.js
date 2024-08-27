
function encriptar(){
    let textEntrada = document.getElementById('entradaTexto').value;
    console.log(`Mostrando texto del textArea ${textEntrada}`)
    let textoEncriptado = CryptoJS.AES.encrypt(textEntrada, 'mi-secreto').toString();
   // document.getElementById('textoEncriptado').value = textoEncriptado;
    console.log(`Mostrando encriptado: ${textoEncriptado}`)
    mostrarResultado(textoEncriptado);
}

function desencriptar(){
    let textEntrada = document.getElementById('entradaTexto').value;
    console.log(`Mostrando texto del textArea ${textEntrada}`)

    let bytes = CryptoJS.AES.decrypt(textEntrada, 'mi-secreto');
    let textoDesencriptado = bytes.toString(CryptoJS.enc.Utf8);
    console.log(`Mostrando desencriptado: ${textoDesencriptado}`)
    mostrarResultado(textoDesencriptado);
}

function mostrarResultado(texto){
    let contenedorResultado = document.getElementById('resultadoEncriptador');
    
    // Reemplaza todo el contenido del div con el resultado
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
    textoACopiar.setSelectionRange(0, 99999); // Para dispositivos móviles
    document.execCommand("copy");

    alert("Texto copiado al portapapeles" );
    limpiarTxt();
}

function limpiarTxt(){
    document.querySelector('#entradaTexto').value='';
}