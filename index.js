
var contador = 4
console.log(queNaoFazNada(contador))
function queNaoFazNada(contador){
    if(contador === 1){
        return 1;
    }
    // console.log(contador) 
    return contador * queNaoFazNada (contador-1)
}






// function queDiaEhHoje(){
//     console.log(new Date())
//     document.getElementById('data-de-hoje').innerHTML = new Date()
// }