const slide = ["../photos/IMG_4404.jpg", "../photos/IMG_9406.jpg", "../photos/IMG_9476.jpg", "../photos/IMG_9498.jpg"];
let numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
}