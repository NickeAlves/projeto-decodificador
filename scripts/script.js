function criptografarTexto(texto) {  
    return texto.replace(/e/g, "enter")
                .replace(/i/g, "imes")
                .replace(/a/g, "ai")
                .replace(/o/g, "ober")
                .replace(/u/g, "ufat");
}

function descriptografarTexto(texto) {  
    return texto.replace(/enter/g, "e")
                .replace(/imes/g, "i")
                .replace(/ai/g, "a")
                .replace(/ober/g, "o")
                .replace(/ufat/g, "u");
}

function mostrarResultado() { 
    var texto = document.getElementById("input-text").value; // obtendo o texto digitado pelo usuario atraves do textarea
    if (texto.trim() === "") { // caso o usuario nao digite
        return;
    } else {
        var textoCriptografado = criptografarTexto(texto); 
        var resultadoDiv = document.getElementById("resultado"); 
        document.getElementById("texto__resultado").textContent = textoCriptografado;
        resultadoDiv.style.display = "flex"; 
        var nadaDiv = document.getElementById("nada"); 
        nadaDiv.style.display = "none";
        var DivNada = document.getElementById("nada__rodape");
        DivNada.style.display = "none";
        document.getElementById("input-text").value = ""; // Limpa o conteúdo do textarea
    }
}

function mostrarDescriptografado() {
    var texto = document.getElementById("input-text").value; 
    if (texto.trim() === "") {
        return;
    } else {
        var textoDescriptografado = descriptografarTexto(texto); 
        var resultadoDiv = document.getElementById("resultado"); 
        document.getElementById("texto__resultado").textContent = textoDescriptografado;
        resultadoDiv.style.display = "flex"; 
        var nadaDiv = document.getElementById("nada"); 
        nadaDiv.style.display = "none";
        var DivNada = document.getElementById("nada__rodape");
        DivNada.style.display = "none";
        document.getElementById("input-text").value = ""; // Limpa o conteúdo do textarea
    }
}

function copiarTexto() {
    var textoResultado = document.getElementById("texto__resultado").textContent;
    navigator.clipboard.writeText(textoResultado).then(function() {
        document.getElementById("texto__resultado").textContent = ""; // limpa o conteudo
        document.getElementById("resultado").style.display = "none";
        document.getElementById("nada").style.display = "flex"; // mostra o conteudo quando nao ha nada digitado
    });
}
