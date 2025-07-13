'use strict'


function imageVisualiserScreen(arrayOfCtImages = [], imgButtonLeft, imgButtonRight){
    let r = document.createElement('div')

    const myContentDiv = document.createElement('div')
    const imgDiv = document.createElement('div')
    const leftButtonDiv = document.createElement('div')
    const middleButtonDiv = document.createElement('div')
    const rightButtonDiv = document.createElement('div')
    const bottomScreenDiv = document.createElement('div')
    const timerDiv = document.createElement('div') 
    const okButtonDiv = document.createElement('div') 

    r.appendChild(myContentDiv)
    r.appendChild(bottomScreenDiv)
    myContentDiv.appendChild(imgDiv)
    myContentDiv.appendChild(leftButtonDiv)
    myContentDiv.appendChild(middleButtonDiv)
    myContentDiv.appendChild(rightButtonDiv)
    bottomScreenDiv.appendChild(timerDiv)
    bottomScreenDiv.appendChild(okButtonDiv)

    // style

    document.getElementsByTagName('body')[0].style.margin = 0

    r.style.height = '100dvh'
    r.style.width = '100dvw'
    r.style.backgroundColor = 'black'
    r.style.margin = 0
    r.style.padding = 0
    r.style.display = 'grid';
    r.style.gridTemplate =
    `'myContentDiv' 80dvh
    'bottomScreenDiv' 20dvh / auto`

    myContentDiv.id = 'myContentDiv'
    myContentDiv.style.width = '100dvw'
    myContentDiv.style.height = '80dvh'
    myContentDiv.style.gridArea = 'myContentDiv'
    myContentDiv.style.display = 'grid'
    myContentDiv.style.alignItems = 'center'
    myContentDiv.style.justifyItems = 'center'
    myContentDiv.style.textAlign = 'center'
    myContentDiv.style.gridTemplate =  
    `'. . .' 5dvh 
    'imgDiv imgDiv imgDiv' 50dvh 
    '. . .' 5dvh 
    'leftButtonDiv middleButtonDiv rightButtonDiv' 20dvh`

    imgDiv.id = 'imgDiv'
    imgDiv.style.width = '50dvh'
    imgDiv.style.height = '50dvh'
    imgDiv.style.gridArea = 'imgDiv'
    imgDiv.style.backgroundPosition = 'center'
    imgDiv.style.backgroundRepeat = 'no-repeat'
    imgDiv.style.backgroundSize = 'contain'
    imgDiv.style.backgroundImage = `url(${arrayOfCtImages[0].src})`
    
    leftButtonDiv.id = 'leftButtonDiv'
    leftButtonDiv.style.width = '33dvw'
    leftButtonDiv.style.height = '20dvh'
    leftButtonDiv.style.gridArea = 'leftButtonDiv'
    leftButtonDiv.style.backgroundPosition = 'center'
    leftButtonDiv.style.backgroundRepeat = 'no-repeat'
    leftButtonDiv.style.backgroundSize = 'contain'
    leftButtonDiv.style.backgroundImage = `url(${imgButtonLeft.src})`
    
    middleButtonDiv.id = 'middleButtonDiv'
    middleButtonDiv.style.width = '33dvw'
    middleButtonDiv.style.height = '20dvh'
    middleButtonDiv.style.gridArea = 'middleButtonDiv'
    middleButtonDiv.style.backgroundColor = 'black'
    middleButtonDiv.style.backgroundPosition = 'center'
    middleButtonDiv.style.backgroundRepeat = 'no-repeat'
    middleButtonDiv.style.backgroundSize = 'contain'
    middleButtonDiv.style.backgroundImage = `url('Images/imgControlKnobs.png')`
    
    rightButtonDiv.id = 'rightButtonDiv'
    rightButtonDiv.style.width = '33dvw'
    rightButtonDiv.style.height = '20dvh'
    rightButtonDiv.style.gridArea = 'rightButtonDiv'
    rightButtonDiv.style.backgroundPosition = 'center'
    rightButtonDiv.style.backgroundRepeat = 'no-repeat'
    rightButtonDiv.style.backgroundSize = 'contain'
    rightButtonDiv.style.backgroundImage = `url(${imgButtonRight.src})`

    bottomScreenDiv.id = 'bottomScreenDiv'
    bottomScreenDiv.style.width = '100dvw'
    bottomScreenDiv.style.height = '20dvh'
    bottomScreenDiv.style.gridArea = 'bottomScreenDiv'
    bottomScreenDiv.style.display = 'grid'
    bottomScreenDiv.style.gridTemplate = `'timerDiv okButtonDiv' auto / 66dvw 34dvw`
    
    timerDiv.id = 'timerDiv'
    timerDiv.style.width = '66dvw'
    timerDiv.style.height = '20dvh'
    timerDiv.style.backgroundColor = 'whitesmoke'
    timerDiv.style.fontSize = '10dvh'
    timerDiv.style.gridArea = 'timerDiv'
    timerDiv.style.display = 'grid'
    timerDiv.style.textAlign = 'center'
    timerDiv.style.justifyContent = 'center'
    timerDiv.style.alignItems = 'center'
    
    okButtonDiv.id = 'okButtonDiv'
    okButtonDiv.style.width = '34dvw'
    okButtonDiv.style.height = '20dvh'
    okButtonDiv.style.gridArea = 'okButtonDiv'
    okButtonDiv.style.backgroundImage = `url('Images/imgSafety.png')`
    okButtonDiv.style.backgroundColor = 'whitesmoke'
    okButtonDiv.style.backgroundPostion = 'center'
    okButtonDiv.style.backgroundRepeat = 'no-repeat'
    okButtonDiv.style.backgroundSize = 'contain'


    cache['currentCtImage'] = 0
    // events

    rightButtonDiv.addEventListener('pointerdown', function (e){
        if (cache.currentCtImage < arrayOfCtImages.length - 1){
        cache.currentCtImage++
        imgDiv.style.backgroundImage = `url(${arrayOfCtImages[cache.currentCtImage].src})`
        }  
    })

    leftButtonDiv.addEventListener('pointerdown', (e)=>{
        if (cache.currentCtImage > 0){
            cache.currentCtImage--
            imgDiv.style.backgroundImage = `url(${arrayOfCtImages[cache.currentCtImage].src})`
        } 
    })

    middleButtonDiv.addEventListener('pointerdown', () =>{
        const subset = cache['currentCtSubset'] === 'lung'? 'abdo': 'lung';
        cache['currentCtSubset'] = subset
        const newCtImage = getCtImages(cache['currentCtFileName'], subset)
        /* console.log  */console.log(`CT image subset was changed to '${subset}'`)
        document.getElementsByTagName('body')[0].innerHTML = ''
        document.getElementsByTagName('body')[0].appendChild(imageVisualiserScreen(newCtImage.data, imgTriangleLeft, imgTriangleRight))
    })

    r.querySelector('#okButtonDiv').addEventListener('pointerdown', () =>{
        if (cache['isfingerSlippingSecurityOff'] !== true){
            cache['isfingerSlippingSecurityOff'] = true
            updateOkButtonImg(!cache['isfingerSlippingSecurityOff'], 'Images/imgNerdFace.png')
            return;
        }
        else {
            document.getElementsByTagName('body')[0].innerHTML = ''
            document.getElementsByTagName('body')[0].appendChild(getSelectionScreen(cache['currentSolution']))
            cache['isfingerSlippingSecurityOff'] = false
        }
    })

    r.querySelector('#myContentDiv').addEventListener('pointerdown', () =>{
        if (cache['isfingerSlippingSecurityOff'] === true){
            cache['isfingerSlippingSecurityOff'] = false
            updateOkButtonImg(!cache['isfingerSlippingSecurityOff'])
            return;
        }
    })

    r.querySelector('#timerDiv').addEventListener('pointerdown', () =>{
        if (cache['isfingerSlippingSecurityOff'] === true){
            cache['isfingerSlippingSecurityOff'] = false
            updateOkButtonImg(!cache['isfingerSlippingSecurityOff'])
            return;
        }
    })

    return r
}

