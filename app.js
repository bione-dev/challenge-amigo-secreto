// Armazenar os nomes dos amigos em um array
let amigos = [];

// Testando a inicialização por Log
console.log("Array inicializado:", amigos);

// Adicionar um amigo por função
function adicionarAmigo() {
    // Obter campo de entrada
    const input = document.getElementById("amigo");
    const nome = input.value.trim(); 

    // Validação: exibe um alerta se o campo estiver vazio, evitando adicionar um amigo vazio
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Adiciona o novo amigo ao array
    amigos.push(nome);

    // Atualiza a lista na interface
    atualizarLista();

    // Limpa o campo de entrada
    input.value = "";
}

// Atualizar a lista de amigos na interface por função
function atualizarLista() {
    // Obter o elemento da lista
    const listaAmigos = document.getElementById("listaAmigos");

    // Limpar a lista existente
    listaAmigos.innerHTML = "";

    // Percorrer o array e adicionar elementos à lista
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li"); // Criar elemento de lista (<li>)
        li.textContent = amigos[i]; // Adicionar o nome do amigo ao item
        listaAmigos.appendChild(li); // Adicionar o item à lista na interface
    }
}

// Função para sortear um amigo
function sortearAmigo() {
    // Validar se há amigos disponíveis no array
    if (amigos.length === 0) {
        alert("A lista está vazia. Adicione amigos antes de sortear.");
        return;
    }

    // Gerar um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obter o nome sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar o resultado na interface
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `O amigo sorteado é: <strong>${amigoSorteado}</strong>`;
}
