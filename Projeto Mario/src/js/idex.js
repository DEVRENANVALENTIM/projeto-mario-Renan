/*
OBJETIVO 1 - quando o usuário clicar no botão de veja o trailer, devemos abrir a modal com o video do trailer 
- passo 1 - dar um jeito de pegar o elemento que representa o botão na tela usando o JS 
- passo 2 - dar um jeito de identificar quando o usuário clicar no botão  
- passo 3 - dar um jeito de pegar o elemento no JS
- passo 4 - abrir a modal na tela  

OBJETIVO 2 - quando o usuario clicar no X devemos fechar a modal 
- passo 1 - dar um jeito de pegar o elemento de fechar modal usando o JS 
- passo 2 - dar um jeito de identificar quando o usuario clicar no X
- passo 3 - fechar a modal

*/
const video = document.getElementById("video"); 
const linkDoVideo = video.src;
const botaoTrailer = document.querySelector(".botao-trailer");
const modal = document.querySelector(".modal");
const fecharModal = document.querySelector(".fechar-modal");

botaoTrailer.addEventListener("click", () => {
    modal.classList.add("aberto");
    video.setAttribute("src", linkDoVideo);
});

fecharModal.addEventListener ("click", () => {
    modal.classList.remove("aberto");
    video.setAttribute("src", "");
});

