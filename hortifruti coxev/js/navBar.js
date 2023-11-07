let botaoAbrir = document.querySelector(".botaoMenu");
let menuOculto = document.querySelector(".menuOculto");
botaoAbrir.addEventListener("click", abrirMenu);
function abrirMenu() {
    menuOculto.style.right = "0";
}

let botaoFechar = document.querySelector(".btn-close");
botaoFechar.addEventListener("click", fecharMenu);
function fecharMenu () {
    menuOculto.style.right = "-320px";
}