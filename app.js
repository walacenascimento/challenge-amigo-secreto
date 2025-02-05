let amigos = []; // Array de amigos iniciado vazio

function adicionarAmigo() { // Função que adiciona o nome do amigo 
    let nomeAmigo = document.querySelector('input').value;
    if (nomeAmigo == '') {
        alert("Por favor, insira um nome");
    } else {
        amigos.push(nomeAmigo);
        limparCampo()
        listaDeAmigos()
    }
}

function limparCampo() { // função que limpa o campo, após o nome ser inserido
    let limparCampo = document.querySelector('input');
    limparCampo.value = ''
}

// Função que captura o elemento de lista PAI (UL), cria um novo elemento filho (li), percorre o array amigo e adicona o nome do ao novo elemente filho.
function listaDeAmigos() {
    let listaDeAmigos = document.getElementById('listaAmigos');listaDeAmigos.innerHTML = ' ';
    for (let index = 0; index < amigos.length; index++) {
        let novoAmigo = document.createElement('li');
        novoAmigo.textContent = amigos[index];
        listaDeAmigos.appendChild(novoAmigo);
    }
}

function sortearAmigo() {
    if (amigos == '') { // Verifica se o array amigos está vazio
        alert(`Ainda não existe nenhum amigo adicionado na lista!`)
    } else {
        const sortudo = Math.floor(Math.random() * amigos.length); // Gera um indice aleátorio
        const amigoSorteado = amigos[sortudo]; // obtem o indice gerado
        const sortearAmigo =document.getElementById('resultado'); // captura o elemeno html
        const sorteado = document.createElement('li'); // Cria um novo elemente de lista li no html
        sorteado.textContent = `O amigo sorteado é ${amigoSorteado}`; // recebe o indice obtido no html
        sortearAmigo.appendChild(sorteado); // Insere o indice sorteado no novo elemente(li) que fi criado.
    }
    limparCampo();
}