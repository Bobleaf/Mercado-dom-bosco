//aqui adicionamos um evento de escutar o click do mouse sobre o ícone de hamburguer.
hamburgerButton.addEventListener("click",function(){
    mobileMenu.classList.add("flex");
//criamos uma função que a ouvir o click do mouse, ele adicione uma Class, que está fazendo nossa caixa (div) aparecer, ou seja, ficar visivel.
});

//criamos uma função que a ouvir o click do mouse, ele remova uma class, que está fazendo nossa caixa (div) desaparecer, ou seja, ficar invisivel.
closeButton.addEventListener("click", function() {
    mobileMenu.classList.remove("flex");
});