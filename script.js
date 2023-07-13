// Função formulário contato

const inputButtonForm = document.querySelector('.box-button');
console.log(inputButtonForm);

inputButtonForm.addEventListener('click', function (e) {
  e.preventDefault();
  const error = document.querySelector('#error');
  const inputNome = document.querySelector('#nome');
  const inputEmail = document.querySelector('#email');
  const inputSenha = document.querySelector('#senha');

  if (!inputNome.value || !isNaN(inputNome.value)) {
    error.innerHTML = 'Por favor, digite um nome válido!';
    return;
  } 

  if (!inputEmail.value || !isNaN(inputEmail.value)) {
    error.innerHTML = 'Por favor, digite um email válido!';
    return;
  }

  if (!inputSenha.value || !isNaN(inputSenha.value)) {
    error.innerHTML = 'Por favor, digite uma senha válida!';
    return;
  }

  error.innerHTML = '';

  inputNome.value = '';
  inputEmail.value = '';
  inputSenha.value = '';

  alert('Seu formulário foi enviado com sucesso!');
});
// Função voltar ao topo

window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("btnTopo").style.display = "block";
    } else {
      document.getElementById("btnTopo").style.display = "none";
    }
  }
  
  document.getElementById("btnTopo").onclick = function() {
    scrollToTop();
  };
  
  function scrollToTop() {
    document.body.scrollTop = 0; /* Para navegadores Safari */
    document.documentElement.scrollTop = 0; /* Para Chrome, Firefox, IE e Opera */
  }