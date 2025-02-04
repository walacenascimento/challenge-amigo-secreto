//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
    let nomeAmigo = document.querySelector('input').value;
    if (nomeAmigo == '') {
        alert("Por favor, insira um nome");
    } else {
        amigos.push(nomeAmigo);
        console.log(nomeAmigo);
        limparCampo()
        listaDeAmigos()
        
    }
}

function limparCampo() {
    let limparCampo = document.querySelector('input');
    limparCampo.value = ''
}

function listaDeAmigos() {
    let listaDeAmigos = document.getElementById('listaAmigos');listaDeAmigos.innerHTML = ' ';
    for (let index = 0; index < amigos.length; index++) {
        let novoAmigo = document.createElement('li');
        novoAmigo.textContent = amigos[index];
        listaDeAmigos.appendChild(novoAmigo);
    }
}

function sortearAmigo() {
    let amigoSorteado =document.getElementById('resultado');
    let sorteado = document.createElement('li');
    sorteado.textContent = `O amigo sorteado é Walace`;
    amigoSorteado.appendChild(sorteado);
}