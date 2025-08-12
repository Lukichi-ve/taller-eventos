const div = document.querySelector('div');
const boton = document.querySelector('button');

div.addEventListener('click', function() {
    alert('Hola! Soy el div');
});

boton.addEventListener('click', function(event){
    alert('Hola!')
    event.stopPropagation();
});