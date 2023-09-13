const frases = [
    { frase: "Ajusta tu espacio de trabajo para cuidar de tu cuerpo." },
    { frase: "Una silla ergonómica es una inversión en tu salud." },
    { frase: "La ergonomía en el trabajo promueve la salud y la productividad." },
    { frase: "Alinea tu postura con principios ergonómicos para una vida sin dolor." },
    { frase: "Un teclado y un mouse ergonómicos marcan la diferencia." },
    { frase: "Haz de la ergonomía un hábito y experimenta la diferencia en tu bienestar." },
    { frase : "La ergonomía reduce la fatiga y aumenta la eficiencia."}
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