var lista = document.querySelector('nav > ul');
// Buscamos los hijos
var primerEnalce = lista.querySelector('a');
var todosLosEnlaces = lista.querySelectorAll('a');

todosLosEnlaces.forEach(e => {
    // e.onclick = function() {
    //     alert('Hizo click!')
    // }
    e.addEventListener('click', function() {
        alert('Hizo click!')
    });

    e.addEventListener('click', function(){
        console.log('Hizo click!');
    });
})
// buscamos al padre
var navegacion = lista.parentElement;

// document.querySelectorAll('nav > ul > li')