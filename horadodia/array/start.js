let palavra = ''
let fatia = palavra.split('')
let inverso = palavra.split('').reverse()
if (fatia.join() == inverso.join()){
    console.log(`${palavra} É um palindromo!`)
} else {
    console.log(`${palavra} NÃO é um palindromo!`)
}
