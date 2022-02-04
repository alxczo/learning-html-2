function NomeCompleto() {
  let nome = document.getElementById('fname').value
  let sobreNome = document.getElementById('lname').value
  document.getElementById('saida').innerHTML = `Olá, ${nome} ${sobreNome}!`
}
