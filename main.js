'use strict'

document.addEventListener('pointerdown', function (e) {
    e.preventDefault();
}, {passive: false})


document.getElementById('okButtonDiv').addEventListener('pointerdown', () =>{
    document.getElementsByTagName('body')[0].innerHTML = ''
    document.getElementsByTagName('body')[0].appendChild(getMenuScreen())
})

cache['TIME_FOR_ROUND'] = 30
cache['timer'] = gen_timerValue(cache['TIME_FOR_ROUND'])
cache['gameOver'] = true
setInterval(()=>{
    if (cache['gameOver'] === true || document.querySelector('#timerDiv') === null){
        return;
    }
    const time = cache['timer'].next().value
    document.querySelector('#timerDiv').innerHTML = time.htmlTextString
    if (time.number <= 0 ){
        cache['gameOver'] = true
        if (cache['isOnValidationScreen'] === true){
            return;
        }
        document.getElementsByTagName('body')[0].innerHTML = ''
        document.getElementsByTagName('body')[0].appendChild(getSelectionScreen(cache['currentSolution']))
        
    }
}, 200)

cache['isfingerSlippingSecurityOff'] = false

function updateOkButtonImg (securityImg = !cache['isfingerSlippingSecurityOff'] ){
    if (document.querySelector('#okButtonDiv') === null){
        return;
    }
    if (securityImg){
        document.querySelector('#okButtonDiv').style.backgroundImage = `url('Images/imgSafety.png')`
        document.querySelector('#okButtonDiv').style.backgroundPosition = 'center'
        document.querySelector('#okButtonDiv').style.backgroundRepeat = 'no-repeat'
        document.querySelector('#okButtonDiv').style.backgroundSize = 'contain'
    }
    else {
        document.querySelector('#okButtonDiv').style.backgroundImage = `url('Images/imgTappingHand.png')`
        document.querySelector('#okButtonDiv').style.backgroundPosition = 'center'
        document.querySelector('#okButtonDiv').style.backgroundRepeat = 'no-repeat'
        document.querySelector('#okButtonDiv').style.backgroundSize = 'contain'
    }
    
}