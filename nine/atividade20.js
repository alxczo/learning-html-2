const list1 = []
const list2 = []
function lista1() {
  let x = document.getElementById('inserido').value

  list1.push(x)

  document.getElementById('saida1').innerHTML = list1
}
function lista2() {
  let y = list1.length - 1
  let x = document.getElementById('digito').value
  let comprimento
  for (let i = 0; i <= y; i++) {
    comprimento = list1[i].length
    if (comprimento == x) {
      list2.push(list1[i])
      document.getElementById('saida2').innerHTML = list2
    }
  }
}
