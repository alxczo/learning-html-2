function adicao() {
  let z
  let w = 'Adição <br/>'
  let x = Number(document.getElementById('num').value)
  for (let i = 1; i <= 10; i++) {
    z = x + i
    w += x + ' + ' + i + ' = ' + z + '<br />'
  }
  document.getElementById('saida').innerHTML = w
}
function sub() {
  let z
  let w = 'Subtração <br/>'
  let x = Number(document.getElementById('num').value)
  for (let i = x; i <= x + 10; i++) {
    z = i - x
    w += i + ' - ' + x + ' = ' + z + '<br/>'
  }
  document.getElementById('saida').innerHTML = w
}
function mult() {
  let z
  let w = 'Multiplicação <br/>'
  let x = Number(document.getElementById('num').value)
  for (let i = 1; i <= 10; i++) {
    z = x * i
    w += x + ' * ' + i + ' = ' + z + '<br>'
  }
  document.getElementById('saida').innerHTML = w
}
function div() {
  let z
  let w = 'Divisão <br/>'
  let x = Number(document.getElementById('num').value)
  for (let i = x; i <= x * 10; i += x) {
    z = i / x
    w += i + ' / ' + x + ' = ' + z + '<br>'
  }
  document.getElementById('saida').innerHTML = w
}
