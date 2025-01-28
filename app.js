//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
    let nomeAmigo = document.querySelector('input').value;
    if (nomeAmigo == '') {
        alert("Por favor, insira um nome");
    } else {
        amigos.push(nomeAmigo);
        limparCampo();
    }
    console.log(amigos);
}

function limparCampo() {
    let limparCampo = document.querySelector('input');
    limparCampo.value = ''
}