const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const cnpjInput = document.getElementById('cnpj');
  const telInput = document.getElementById('tel');
  const empresaInput = document.getElementById('empresa');
  
  if (!nameInput.value || !emailInput.value || !cnpjInput.value || !telInput.value || !empresaInput.value ) {
    alert('Por favor, preencha todos os campos');
    event.preventDefault();
  }
});
