// Importando elementos do HTML

// Itens do jogo
// Sendo 0 = Pedra, 1 = Papel e 2 = Tesoura

// Função para alterar o score

// Adicionando eventos de click


// Importamdo elementos do HTML
const pedraElement = document.querySelector("button[name=pedra]")
const papelElement = document.querySelector("button[name=papel]")
const tesouraElement = document.querySelector("button[name=tesoura]")
const jogadorElemnt = document.querySelector("img[name=jogador]")
const botElemnt = document.querySelector("img[name=bot]")
const score1Elemnt = document.querySelector("#score1")
const score2Elemnt = document.querySelector("#score2")
const resultElemnt = document.querySelector("p[name=result]")
// Itens do jogo 
// sendo 0 = Pedra, 1 = Papel e 2 = Tesoura
const itens = ["Pedra", "Papel", "Tesoura"]

let contadorJogador = 0 
let contadorPc = 0 
// Função para alterar o score
function alterarScore(){
    score1Elemnt.innerHTML = '${contadorJogador}'
    score2Elemnt.innerHTML = '${contadorPc'
}
// Adicionado eventos de click 
papelElement.addEventListener("click", () => {
    var bot = Math.floor(Math.random() * 3)
    jogadorElemnt.scr = 'imagens/icon-paper.svg'
    switch(bot) {
        case 0:
           botElemnt.src = 'images/icon-Rock.svg'
           resultElemnt.innerHTML = "Resultado: todo o sucesso começa com a decisão de tentar! :D"
           contadorJogador++
           break
        case 1:
            botElemnt.src = 'imades/incon-scissors.svg'
            resultElemnt.innerHTML = "Resultado: Quando começamos jogar o jogo da vida, nimguém disse que seria justo... : ("
           break
    }
})
