// Selecciona todas las imágenes zoomables
var images = document.querySelectorAll('.zoomable');

// Añade un evento de clic a cada imagen
for (var i = 0; i < images.length; i++) {
    images[i].addEventListener('click', function() {
        // Cambia la clase de la imagen a "zoomed" cuando se hace clic en ella
        this.classList.toggle('zoomed');
    });
}