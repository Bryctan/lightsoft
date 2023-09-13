const frases = [
    { frase: "Come más frutas y verduras y notaras la diferencia." },
    { frase: "La agua es tu mejor compañera para el día." },
    { frase: "Dormir bien, rendir mejor." },
    { frase: "Comer bien es un acto de amor propio." },
    { frase: "Respira profundo y libera el estrés." },
    {frase: "Haz ejercicio, vive mejor."},
    { frase: "Cuida tu mente y cuerpo con amor." },
    {frase: "Evita el estrés, abraza la calma."}
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







  
  
  
  
  