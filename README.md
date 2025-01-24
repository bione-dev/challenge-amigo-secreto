# Amigo Secreto

## Descrição do Projeto
Este é um projeto simples e interativo para realizar sorteios de "Amigo Secreto" diretamente no navegador. Ele permite que os usuários adicionem nomes, visualizem uma lista e realizem o sorteio de maneira prática.

## Funcionalidades
1. **Adicionar amigos**:
   - Permite que o usuário insira nomes para criar uma lista de amigos participantes.
   - Realiza validação para garantir que o campo de entrada não esteja vazio.
   - Atualiza a interface para exibir a lista atualizada.

2. **Visualizar a lista de amigos**:
   - Exibe os amigos adicionados em uma lista abaixo do campo de entrada.
   - Garante que a lista seja sincronizada com os dados armazenados.

3. **Sortear amigo secreto**:
   - Realiza o sorteio de forma aleatória entre os amigos da lista.
   - Exibe o resultado na interface.
   - Verifica se há amigos na lista antes de realizar o sorteio.

## Estrutura do Projeto
- **HTML**: Contém a estrutura básica da página, incluindo campos de entrada, botões e áreas para exibir a lista e o resultado.
- **CSS**: Estilização da interface para criar uma experiência visual atraente.
- **JavaScript**: Implementação da lógica funcional do projeto, incluindo a validação de entradas, atualização da lista e sorteio aleatório.

## Tecnologias Utilizadas
- **HTML5**: Estrutura da página.
- **CSS3**: Estilização responsiva e moderna.
- **JavaScript (ES6)**: Manipulação de eventos e interatividade.

## Como Utilizar
1. Clone este repositório em sua máquina local:
   ```bash
   git clone https://github.com/seu-usuario/amigo-secreto.git
   ```

2. Abra o arquivo `index.html` em qualquer navegador.

3. Digite os nomes dos amigos no campo de entrada e clique no botão **Adicionar**.

4. Confira a lista de amigos adicionados.

5. Clique no botão **Sortear amigo** para realizar o sorteio. O resultado será exibido logo abaixo da lista.

## Estrutura de Arquivos
```
▶ projeto-amigo-secreto/
|
|-- index.html        # Estrutura do projeto
|-- style.css         # Estilização da interface
|-- app.js            # Lógica e funcionalidades
|-- assets/           # Imagens
```

## Mensagens de Commit
1. **Inicialização do projeto**: estrutura HTML, CSS básico e variável `amigos` declarada.
2. **Funcionalidade de adicionar amigos**: implementada com validação de entrada e atualização da lista na página.
3. **Atualização da lista de amigos**: sincronização do array `amigos` com a interface.
4. **Sorteio de amigo secreto**: implementação de sorteio aleatório com exibição do resultado.

## Melhorias Futuras
- Adicionar a opção de remover amigos da lista.
- Implementar um modo responsivo para dispositivos móveis.
- Salvar a lista de amigos em LocalStorage para persistência de dados.

