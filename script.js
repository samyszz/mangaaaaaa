const cadastroImageInput = document.getElementById('cadastro-image-input');
const cadastroImage = document.getElementById('cadastro-image');

cadastroImageInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    cadastroImage.src = URL.createObjectURL(file);
  }
});

const loginImageInput = document.getElementById('login-image-input');
const loginImage = document.getElementById('login-image');

loginImageInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    loginImage.src = URL.createObjectURL(file);
  }
});