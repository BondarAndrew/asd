let text1 = document.querySelector('.text1')
let text2 = document.querySelector('.text2')
let btn = document.querySelector('.btn')


function getSum() {
if (text1 + text2 < 10 && text1 + text2 > 10 ) {
    alert("Сума більша за 10");
} else {
  alert("Сума менша або дорівнює 10");
}  
}

btn.addEventListener('click', getSum)