const textArea = document.querySelector(".text-area");
const textArea2 = document.querySelector(".text-area2");

/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/
function btnEncriptar() {
    const textoEncriptar = encriptar(textArea.value)
    textArea2.value = textoEncriptar

    textArea.value = ""
    textArea2.style.backgroundImage = "none" 

    
}

function btnDesencriptar() {
    const textoDesencriptar = desencriptar(textArea2.value)
    textArea.value = textoDesencriptar;
    //textArea2.value="";

    
    
}

 function copiara() {
    let copyText = document.querySelector('.text-area2');
    copyText.select();
    
    document.execCommand("copy");
    
 
}


function encriptar(scriptEncriptada) {
    let matrizCodigo = [ ["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"] ];
    scriptEncriptada = scriptEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (scriptEncriptada.includes(matrizCodigo[i][0])) {
           scriptEncriptada =scriptEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]); 

        }
        
    }

    return scriptEncriptada
}

function desencriptar(scriptDesencriptada) {
    let matrizCodigo = [ ["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"] ];
    scriptDesencriptada = scriptDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (scriptDesencriptada.includes(matrizCodigo[i][0])) {
            scriptDesencriptada =scriptDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]); 

        }
        
    }

    return scriptDesencriptada
}