//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
    let nomeAmigo = document.querySelector('input').value;
    if (nomeAmigo == '') {
        alert("Por favor, insira um nome");
    } else {
        amigos.push(nomeAmigo);
        console.log(nomeAmigo);
        listaDeAmigos()
        
    }
    limparCampo();
}

function limparCampo() {
    let limparCampo = document.querySelector('input');
    limparCampo.value = ''
}

function listaDeAmigos() {
 let listaDeAmigos = document.getElementById('listaAmigos');
 listaDeAmigos.innerHTML = ' ';
 let novoAmigo = document.createElement('li');
 novoAmigo.textContent = amigos;
 listaDeAmigos.appendChild(novoAmigo);
}