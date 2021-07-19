var hora = new Date()
var agora = hora.getHours()
var mostrarhora = document.getElementById('hora')
var mostrarperiodo = document.getElementById('periodo')
var mostrarimagem = document.getElementById('img')
mostrarhora.innerText = `${hora.getHours()}:${hora.getMinutes()}h.`

function alterar(){
    document.title = `Hora atual: ${hora.getHours()}:${hora.getMinutes()}h.`
    if (agora < 12) {
        mostrarperiodo.innerText = 'Bom dia!'
        mostrarimagem.src = 'img/manha.jpg'
        document.body.style.background = '#c46d02'
    } else if (agora >= 12 && agora < 18) {
        mostrarperiodo.innerText = 'Boa tarde!'
        mostrarimagem.src = 'img/tarde.jpg'
        document.body.style.background = '#fec59e'
    } else {
        mostrarperiodo.innerText = 'Boa noite!'
        mostrarimagem.src = 'img/noite.jpg'
        document.body.style.background = '#12263e'
    }
}
