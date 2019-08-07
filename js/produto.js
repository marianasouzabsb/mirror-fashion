
var inputTamanho = document.querySelector( '[name=tamanho]')
var outputTamanho = document.querySelector('[name=valortamanho]')

function mostraTamanho(){
    outputTamanho.valeu = inputTamanho.valeu
}
inputTamanho.oninput = mostraTamanho