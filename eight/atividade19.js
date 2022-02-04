const list1 = []
const list2 = []
function lista1() {
  let x = Number(document.getElementById('inserido').value)

  list1.push(x)

  document.getElementById('saida1').innerHTML = list1
}
function lista2() {
  let y = list1.length - 1
  let cont = 0
  for (let i = 0; i <= y; i++) {
    cont = list1[i] * 3
    list2[i] = cont
  }
  document.getElementById('saida2').innerHTML = list2
}
