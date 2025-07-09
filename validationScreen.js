'use strict'

function getValidationScreen(playerChoice, solution = cache['solution']){

    let r = document.createElement('div')

    r.innerHTML = ` 
    <div id = 'all'>
        <div id = 'myContentDiv'>
            <div id = 'playerSolution'>
                <p>Selection: </p>
                <p>${playerChoice}<p>
            </div>
            <div id = 'winOrLoseIcon'>
            </div>
            <div id = 'solution'>
                <p>Solution: </p>
                <p>${solution}<p>
            </div>
            <div id = 'currentScore'>
                <p>Current Score</p>
                <p>${0}<p>
            </div>
        </div>
        <div id = 'bottomScreenDiv'>
            <div id = 'timerDiv'>
                <p id = 'timerText'></p>
            </div>
            <div id = 'okButtonDiv'>   
            </div>
        </div>
    </div>
    
    <style>
        #all{
            height: 100dvh;
            width: 100dvw;
            margin: 0;
            padding: 0;
            display: grid;
            grid-template: 'myContentDiv' 80dvh
            'bottomScreenDiv' 20dvh / auto;
        }

        .menuOption{
            border: black 4px solid;
        }

        #myContentDiv{
            width: 100dvw;
            height: 80dvh;
            grid-area: myContentDiv;
            display: grid;
            align-items: center;
            justify-items: center;
            text-align: center;
        }

        #bottomScreenDiv{
            width: 100dvw;
            height: 20dvh;
            grid-area: bottomScreenDiv;
            display: grid;
            grid-template: 'timerDiv okButtonDiv' auto / 66dvw 34dvw
        }

        #timerDiv {
        width: 66dvw;
        height: 20dvh;
        grid-area: timerDiv;
        display: grid;
        align-items: center;
        justify-items: center;
        text-align: center;
        font-size: 8dvh;
        background-color: lightblue;
        }

        #timerText{
        margin: 0;
        padding: 0;
        }

        #okButtonDiv{
            width: 34dvw;
            height: 20dvh;
            grid-area: okButtonDiv;
            background-color: blueviolet;
        }
                
        </style>`

        cache['isOnValidationScreen'] = true

        updateOkButtonImg()

        r.querySelector('#okButtonDiv').addEventListener('pointerdown', () =>{
            if (cache['isfingerSlippingSecurityOff'] !== true){
                cache['isfingerSlippingSecurityOff'] = true
                updateOkButtonImg()
                return;
            }
            else if (cache['gameOver'] !== true){
                const randomCtImages = getCtImages()
                cache['currentCtFileName'] = randomCtImages.fileName
                cache['currentCtSubset'] = randomCtImages.subset
                cache['currentSolution'] = randomCtImages.solution
                /* console.log  */console.log(cache['currentCtFileName'], cache['currentCtSubset'], cache['currentSolution'])
                document.getElementsByTagName('body')[0].innerHTML = ''
                document.getElementsByTagName('body')[0].appendChild(imageVisualiserScreen(randomCtImages.data, imgTriangleLeft, imgTriangleRight))
                cache['isfingerSlippingSecurityOff'] = false
                cache['isOnValidationScreen'] = false
            }
            else {
                cache['isfingerSlippingSecurityOff'] = false
                cache['isOnValidationScreen'] = false
                document.getElementsByTagName('body')[0].innerHTML = ''
                document.getElementsByTagName('body')[0].appendChild(getMenuScreen())
            }
        })


        return r;
}