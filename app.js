let listaJaSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; 
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
        exibirTextoNaTela('h1', 'Errou!');
        exibirTextoNaTela('p', `O número secreto é menor do que ${chute}`);
    } else {
        (chute < numeroSecreto);
        exibirTextoNaTela('h1', 'Errou!');
        exibirTextoNaTela('p', `O número secreto é maior do que ${chute}`);
    }
    tentativas++;
    limparCampo();
    }
    console.log(chute == numeroSecreto);
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1); 
    let qtdElementosNaLista = listaJaSorteados.length;

    if (qtdElementosNaLista == numeroLimite) {
        listaJaSorteados = [];
    }
    if (listaJaSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaJaSorteados.push(numeroEscolhido) 
        console.log(listaJaSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

// Recalibrando