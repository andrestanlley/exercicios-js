var num = document.getElementById('num')
var lista = document.getElementById('lista')
var res = document.getElementById('res')

let numeros = []

function checagem(num){
    if (num.value < 1 || num.value > 100 || num.value == ''){
        alert('Valor invalido ou já encontrado na lista')
    } else {
        existe(num)
    }
}

function existe(num){
    if (numeros.indexOf(Number(num.value)) > -1){
        alert(`Número ${num.value} já encontrado na lista!`)
    } else {
        adicionar(num)
    }
}

function adicionar(n){
    let item = document.createElement('option')
    item.text = `Valor ${Number(n.value)} adicionado`
    lista.appendChild(item)
    numeros.push(Number(n.value))
    calcular(n)
}

function calcular(n){
    let cadastrados = numeros.length
    let max = n.value
    let min = n.value
    let total = 0
    for (m in numeros){
        if (numeros[m] > max)
        max = numeros[m]
    }
    for (m in numeros){
        if (numeros[m] < min){
            min = numeros[m]
        }
    }
    for (s in numeros){
        total += numeros[s]
    }
    let media = total/numeros.length
    res.innerHTML = `Ao todo, temos <strong>${cadastrados}</strong> números cadastrados<br>O menor valor informado foi <strong>${min}</strong><br>O maior valor informado foi <strong>${max}</strong><br>Somando todos os valores, temos <strong>${total}</strong><br>A média dos valores digitados é <strong>${media.toFixed()}</strong>`
}

function mostrar(){
    res.style.display = "block"
}