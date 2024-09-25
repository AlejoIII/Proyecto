function uploadImage() {
  const input = document.getElementById('imageInput');
  const preview = document.getElementById('previewImage');
  
  const file = input.files[0];
  if (file) {
    const reader = new FileReader();
    
    reader.onload = function(event) {
      preview.src = event.target.result;
      preview.style.display = 'block';
    };
    
    reader.readAsDataURL(file);
  } else {
    alert('Por favor, selecciona un archivo de imagen.');
  }
}
