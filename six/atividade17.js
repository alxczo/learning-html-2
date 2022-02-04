const listOne = []
const listTwo = []
function listOne() {
  let x = document.getElementById('insert').value

  listOne.push(x)

  document.getElementById('saida').innerHTML = list1
}
function listTwo() {
  let y = list1.length - 1
  for (let i = 0; i <= y; i++) {
    if (list1[i] > 0 || listOne[i] <= 0) {
      listTwo.push(listOne[i])
    }
  }
  document.getElementById('saida').innerHTML = list2
}
