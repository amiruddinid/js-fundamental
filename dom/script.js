document.getElementById('red').style="color:red"

// single atau satuan
// satu element saja yang di select
// document.getElementById('red')
// document.getElementById('red')
document.querySelector('.blue').style.color = "blue"

// multi atau jamak
// bisa ambil banyak element di simpan dalam array
document.getElementsByClassName
document.getElementsByName
document.getElementsByTagName
document.getElementsByTagNameNS
document.querySelectorAll

// const p = document
//     .querySelectorAll('p')

// p[p.length-2].style.color = "green"
// p[p.length-1].style.color = "green"

// querySelector & selectorAll parameter / selectornya menggunakan 
// selector css

const ijo = document.querySelectorAll('.ijo')

ijo.forEach(element => {
    element.style.color = "green"
});

const h1 = document.createElement("h1")
document.body.append(h1)

document.getElementById("cyan")
    .addEventListener("click", function(){
        document.querySelectorAll('p')
        .forEach(element => {
            element.style.color = "cyan"
        });
    })

document.getElementById("purple")
.addEventListener("click", function(){
    document.querySelectorAll('p')
    .forEach(element => {
        element.style.color = "purple"
    });
})

document.getElementById("color").
addEventListener("keypress", function(e){
    document.querySelectorAll('p')
    .forEach(element => {
        element.style.color = e.target.value
    });
})

document.getElementById("reset").
addEventListener("click", function(e){
    document.querySelectorAll('p')
    .forEach(element => {
        element.style.color = null
    });
    document.getElementById('red').style="color:red"
    document.querySelector('.blue').style.color = "blue"
    ijo.forEach(element => {
        element.style.color = "green"
    });
})