//aqui adicionamos um evento de escutar o click do mouse sobre o ícone de hamburguer.
hamburgerButton.addEventListener("click",function(){
    mobileMenu.classList.add("flex");
//criamos uma função que a ouvir o click do mouse, ele adicione uma Class, que está fazendo nossa caixa (div) aparecer, ou seja, ficar visivel.
});

//criamos uma função que a ouvir o click do mouse, ele remova uma class, que está fazendo nossa caixa (div) desaparecer, ou seja, ficar invisivel.
closeButton.addEventListener("click", function() {
    mobileMenu.classList.remove("flex");
});

window.revelar = ScrollReveal({reset:true});


revelar.reveal('.efeito-img-topo', {
    duration: 2000,
    distance: '90px'
})


revelar.reveal('.clientes-efeito', {
    duration: 2000,
    distance: '120px'
})

revelar.reveal('.sobre-nos-js', {
    duration: 2000,
    distance: '200px'
})

