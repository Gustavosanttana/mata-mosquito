
var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

var criaMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal') {
    //1500
    var criaMosquitoTempo = 1500
}else
if(nivel === 'dificil') {
    //1000
    var criaMosquitoTempo = 1000
}else 
if(nivel === 'chucknorris') {
    //750
    var criaMosquitoTempo = 750
}

function ajustarTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(altura, largura)
}

ajustarTamanhoPalcoJogo()

var cronometro = setInterval(function() {

    tempo -= 1

    if(tempo < 0) {
      clearInterval(cronometro)
      clearInterval(criaMosquito)
      window.location.href = 'vitoria.html'
    }else{
        document.getElementById('cronometro').innerHTML = tempo
    }
    
     
}, 1000)

function posicaoRandomica(){

    //remover o mosquito aterior (caso exista)
    if(document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

        //console.log('v' + vidas)
        if(vidas > 3) {

            window.location.href = 'fim_de_jogo.html'
        }else {
        document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"

        vidas++
        }
    }
    

    var posiçaoX = Math.floor(Math.random() * largura) - 90
    var posiçaoY = Math.floor(Math.random() * altura) - 90

    posiçaoX = posiçaoX < 0 ? 0 : posiçaoX
    posiçaoY = posiçaoY < 0 ? 0 : posiçaoY

    console.log(posiçaoX, posiçaoY)

    //criando o elemento html
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posiçaoX + 'px'
    mosquito.style.top = posiçaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function() {
        this.remove()
    }

    document.body.appendChild(mosquito)

}

function tamanhoAleatorio() {
    var classe = Math.floor( Math.random() * 3)
    
    switch (classe) {
        case 0:
            return 'mosquito1'

        case 1:
            return 'mosquito2'

        case 2:
            return 'mosquito3'
            
        case 3:
            return 'mosquito4'    
    }
}

function ladoAleatorio() {
    var classe = Math.floor( Math.random() * 2)
    
    switch (classe) {
        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'

    }
}

