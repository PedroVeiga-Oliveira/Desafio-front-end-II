const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function clearErrors() {
  document.querySelectorAll('.error').forEach(el => el.textContent = '');
}

function setError(id, message) {
  const el = document.getElementById('err-' + id);
  if (el) el.textContent = message;
}

function validateNome(nome) {
  if (!nome || nome.trim().length === 0) return 'Nome deve ser preenchido.';
  if (nome.trim().length < 3 || nome.trim().length > 50) return 'Nome deve conter entre 3 e 50 caracteres.';
  return null;
}
function validateSobrenome(sob) {
  if (!sob || sob.trim().length === 0) return 'Sobrenome deve ser preenchido.';
  if (sob.trim().length < 3 || sob.trim().length > 50) return 'Sobrenome deve conter entre 3 e 50 caracteres.';
  return null;
}
function validateEmail(email) {
  if (!email || email.trim().length === 0) return 'Email deve ser preenchido.';
  if (!emailRegex.test(email.trim())) return 'Email inválido.';
  return null;
}
function validateIdade(idade) {
  if (idade === '' || idade === null || idade === undefined) return 'Idade deve ser preenchida.';
  const n = Number(idade);
  if (!Number.isInteger(n)) return 'Idade deve ser um número inteiro.';
  if (n <= 0 || n >= 120) return 'Idade deve ser positiva e menor que 120.';
  return null;
}
function collectAndValidateForm() {
  clearErrors();
  const nome = document.getElementById('nome').value;
  const sobrenome = document.getElementById('sobrenome').value;
  const email = document.getElementById('email').value;
  const idade = document.getElementById('idade').value;

  let hasError = false;

  const e1 = validateNome(nome);
  if (e1) { setError('nome', e1); hasError = true; }
  const e2 = validateSobrenome(sobrenome);
  if (e2) { setError('sobrenome', e2); hasError = true; }
  const e3 = validateEmail(email);
  if (e3) { setError('email', e3); hasError = true; }
  const e4 = validateIdade(idade);
  if (e4) { setError('idade', e4); hasError = true; }

  if (hasError) return null;

  return {
    nome: nome.trim(),
    sobrenome: sobrenome.trim(),
    email: email.trim(),
    idade: Number(idade)
  };
}
