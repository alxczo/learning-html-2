const list1 = []
const list2 = []
function lista1() {
  let x = Number(document.getElementById('inserido').value)

  list1.push(x)

  document.getElementById('saida1').innerHTML = list1
}
function lista2() {
  let y = list1.length - 1
  for (let i = 0; i <= y; i++) {
    if (list1[i] % 2 == 0) {
      list2.push(list1[i])
    }
  }
  document.getElementById('saida2').innerHTML = list2
}
