const frases = [
    { frase: "Estira tu cuerpo y relaja tu mente." },
    { frase: "¡Toma un minuto para estirarte y recargarte!" },
    { frase: "¿Listo para una pausa activa? ¡A moverse!" },
    { frase: "Estira tu espalda y rodillas, cuida tu postura." },
    { frase: "Sacúdete el cansancio con una pausa activa." },
    { frase: "Una pausa breve, un mejor rendimiento." },
    { frase: "No subestimes el poder de una pausa activa." },
    { frase: "El movimiento es la clave para la concentración." },
    { frase: "Recupera el enfoque con una pausa activa ahora mismo." }
  ];
  
  function actualizarFrase() {
    const frase = document.querySelector('.frase');
  
    const numeroAleatorio = Math.floor(Math.random() * frases.length);
  
    frase.textContent = frases[numeroAleatorio].frase;
  }
  
  setInterval(actualizarFrase, 3000);

const images = document.querySelector(".Contenedor-imagenes")
const imagesCollection = document.querySelectorAll(".imagen")
const AnteriorBtn = document.querySelector(".Anterior")
const SiguienteBtn = document.querySelector(".Siguiente")
AnteriorBtn.addEventListener("click", prevSlide)
SiguienteBtn.addEventListener("click", nextSlide)

let index = 0

let interval = setInterval(startInterval, 3000)

function startInterval() {
    index++
    moverCarrusel()
}

function moverCarrusel() {
    if (index > imagesCollection.length-2) {
        index = 0
        
    } else if (index < 0) {
        index = imagesCollection.length-2
        
    }

    images.style.transform = `translateX(-${index * 825}px)`
}

function prevSlide() {
    index--
    moverCarrusel()
}

function nextSlide() {
    index++
    moverCarrusel()
}