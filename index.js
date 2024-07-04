function soma(a, b){
    return a + b;
}

function subtracao(a, b){
    return a - b;
}

function exibirSoma(){
    console.log('chamei o exibir soma')
    var a = document.getElementById('valorA').value
    console.log(parseInt(a))

    var b = document.getElementById('valorB').value
    console.log(parseInt(b))

    var aNumber = parseInt(a)
    var bNumber = parseInt(b)

    console.log(soma(aNumber, bNumber))
}
function sub (){
    console.log('chamei o exibir soma')
    var a = document.getElementById('valorA').value
    console.log(parseInt(a))

    var b = document.getElementById('valorB').value
    console.log(parseInt(b))

    var aNumber = parseInt(a)
    var bNumber = parseInt(b)

    console.log(subtracao (aNumber, bNumber))
}
