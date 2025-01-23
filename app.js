// armazenar os nomes dos amigos em um array
let amigos = [];

// testando a inicialização por Log
console.log("Array inicializado:", amigos);

// adicionar um amigo por função
function adicionarAmigo() {
    // obter campo de entrada
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

// atualizar a lista de amigos na interface por função
function atualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpa a lista atual

    // Adiciona cada amigo como um item na lista
    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}