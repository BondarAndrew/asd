//ex1

let text1 = document.querySelector('.text1')
let text2 = document.querySelector('.text2')
let btn = document.querySelector('.btn')

function check() {
    if(text1.value && text2.value) {
alert('Заповнені')
    }else{
        alert(
            'Не всі поля заповнені')
    }
}

btn.addEventListener('click', check)

//ex2

