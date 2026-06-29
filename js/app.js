let carrinho =
JSON.parse(localStorage.getItem("carrinho")) || [];

let quantidadeCarrinho = carrinho.length;

const contador =
document.getElementById("contador-carrinho");

if(contador){
    contador.textContent =
    quantidadeCarrinho;
}

function adicionarCarrinho(nomeProduto){


quantidadeCarrinho++;

carrinho.push(nomeProduto);

localStorage.setItem(
    "carrinho",
    JSON.stringify(carrinho)
);

const contador =
document.getElementById("contador-carrinho");

if(contador){
    contador.textContent =
    quantidadeCarrinho;
}

const mensagem =
document.getElementById("mensagem-carrinho");

mensagem.textContent =
nomeProduto + " adicionado ao carrinho!";

mensagem.classList.add("mostrar");

setTimeout(() => {
    mensagem.classList.remove("mostrar");
}, 2500);


}
