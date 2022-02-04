function retorno() {
  let y
  let x = Number(document.getElementById('num').value)
  if (x > 0) {
    y = x - x * 2
    document.getElementById('saida').innerHTML = y + ' Type: false'
  } else if (x < 0) {
    y = x + x * -2
    document.getElementById('saida').innerHTML = y + ' Type: false'
  } else {
    document.getElementById('saida').innerHTML = true
  }
}
