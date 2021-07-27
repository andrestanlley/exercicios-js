var inicio = document.getElementById('inicio')
var fim = document.getElementById('fim')
var passo = document.getElementById('passo')
var botao = document.getElementById('calc')
var res = document.getElementById('res')
var passoerrado = document.getElementById('passoerrado')

function check(campo){
    var campoembranco = `${campo.id}embranco`
    var campoembranco = document.getElementById(`${campoembranco}`)
    if (campo.value == ''){
        campoembranco.style.visibility = "visible"
        console.log(`${campo.id} em branco!`)
        botao.style.background = "grey"
        botao.style.pointerEvents = "none"
    } else {
        campoembranco.style.visibility = "hidden"
        botao.style.background = ""
        botao.style.cursor = ""
        botao.style.pointerEvents = "auto"
    }
}


function calc(){
    check(inicio)
    check(fim)
    if (inicioembranco.style.visibility != "visible" && fimembranco.style.visibility != "visible"){
        if (passo.value == '' || passo.value <= 0){
            passoerrado.style.display = "block"
            passo.value = 1
        } else {
            passoerrado.style.display = "none"
            let init = Number(inicio.value)
            let fm = Number(fim.value)
            let ps = Number(passo.value)
            res.innerHTML = ''
            if (init <= fm){
                for (init;init <= fm;init += ps) {
                    res.innerHTML += `${init} \u{1F449}`
                }
            } else {
                for (init;init >= fm;init -= ps) {
                    res.innerHTML += `${init} \u{1F449}`
                }
            }
            res.innerHTML += `\u{1F64C}`
        }
    }
}