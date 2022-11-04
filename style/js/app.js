// console.log("hola");


const btnTodos = document.querySelector('.todos');
const btnCervezas = document.querySelector('.cervezas');
const btnbebida = document.querySelector('.bebidas');
const btnSnack = document.querySelector('.snacks');

const contenedorPlatillos = document.querySelector('.platillos');

document.addEventListener('DOMContentLoaded',()=>{
    // eventos();
    platillos();
});



const botonCerrar =() =>{
    const btnCerrar = document.createElement('p');
    const overlay = document.createElement('div');
    overlay.classList.add('pantalla-completa');
    const body = document.querySelector('body');
        if(document.querySelectorAll('.pantalla-completa').length > 0) return;
    body.appendChild(overlay);
    btnCerrar.textContent = 'x ';
    btnCerrar.classList.add('btn-cerrar');

    // while(navegacion.children[5]){
    //     navegacion.removeChild(navegacion.children[5]);
    // }
    navegacion.appendChild(btnCerrar);
    cerrarMenu(btnCerrar, overlay);
}

const observer = new IntersectionObserver((entries, observer)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            const imagen = entry.target;
            imagen.src = imagen.dataset.src;
            observer.unobserve(imagen);
        }
    })
})

// imagenes.forEach(imagen=>{
//     observer.observe(imagen);
// });

const cerrarMenu = (boton,overlay) =>{
    boton.addEventListener('click',()=>{
        navegacion.classList.add('ocultar');
        overlay.remove();
        boton.remove()
    });

    overlay.onclick = function(){
        overlay.remove();
        navegacion.classList.add('ocultar');
    }
}

const platillos = ()=>{
    let platillosArreglo=[];
    const platillos = document.querySelectorAll('.platillo');

    platillos.forEach(platillo=> platillosArreglo = [...platillosArreglo,platillo]);

    const cervezas = platillosArreglo.filter(cerveza=> cerveza.getAttribute('data-platillo') === 'cerveza');

    const bebidas = platillosArreglo.filter(bebida=> bebida.getAttribute('data-platillo') =='bebida');

    const snacks = platillosArreglo.filter(snack=>snack.getAttribute('data-platillo') ==='snack');

    // console.log(postre);

    mostrarPlatillos(cervezas,bebidas,snacks,platillos)
}

const mostrarPlatillos =(cervezas,bebidas,snacks,platillosArreglo)=>{
    btnCervezas.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatillos);
        cervezas.forEach(cerveza=> contenedorPlatillos.appendChild(cerveza));
    });
    btnbebida.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatillos);
        bebidas.forEach(bebida=> contenedorPlatillos.appendChild(bebida));
    });
    btnSnack.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatillos);
        snacks.forEach(snack=> contenedorPlatillos.appendChild(snack));
    });
    btnTodos.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatillos);
        platillosArreglo.forEach(todo=> contenedorPlatillos.appendChild(todo));
    });
}

const limpiarHtml = (contenedor =>{
    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild);
    }
});

