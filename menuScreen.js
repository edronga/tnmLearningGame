'use strict'

function getMenuScreen(){

    let r = document.createElement('div')

    r.innerHTML = ` 
    <div id = 'all'>
        <div id = 'myContentDiv'>
            <div id = 'learnDiv' class = 'menuOption'>
                <p class = 'text'><b>LEARN</b></p>
            </div>
            <div id = 'playDiv' class = 'menuOption'>
                <p class = 'text'><b>PLAY</b></p>
            </div>
            <div id = 'creditsDiv' class = 'menuOption'>
                <p class = 'text'>Credits</p>
            </div>
            <div id = 'bestScoresDiv' class = 'menuOption'>
                <p class = 'text'>Top Scores</p>
            </div>
        </div>
        <div id = 'bottomScreenDiv'>
            <div id = 'timerDiv'>
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
            width: 90dvw;
            height: 15dvh;
            font-size : 7dvh;
            color: black;
            display: grid;
            align-items: center;
            justify-items: center;
            text-align: center;
        }

        .text{
            margin: 0;
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

        #playDiv{
            font-family: cursive;
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
            background-color: whitesmoke;
        }

        #okButtonDiv{
            width: 34dvw;
            height: 20dvh;
            grid-area: okButtonDiv;
            background-color: whitesmoke;
            background-image: url('Images/imgSafety.png');
            background-position: center;
            background-repeat: no-repeat;
            background-size: contain;
        }
                
        </style>`

        document.getElementsByTagName('body')[0].style.margin = 0

        cache['menuSelection'] = 'none'
        function goToNextScreen(){
            document.getElementsByTagName('body')[0].innerHTML = ''
                cache['isfingerSlippingSecurityOff'] = false
                switch (cache['menuSelection']){
                    case 'learn':
                        document.getElementsByTagName('body')[0].appendChild(getTnmExplanationScreenSelection())
                        break;
                    case 'play':
                        const randomCtImages = getCtImages()
                        cache['currentCtFileName'] = randomCtImages.fileName
                        cache['currentCtSubset'] = randomCtImages.subset
                        cache['currentSolution'] = randomCtImages.solution
                        /* console.log  */console.log(cache['currentCtFileName'], cache['currentCtSubset'], cache['currentSolution'])
                        cache['timer'] = gen_timerValue(cache['TIME_FOR_ROUND'])
                        cache['gameOver'] = false
                        document.getElementsByTagName('body')[0].appendChild(imageVisualiserScreen(randomCtImages.data, imgTriangleLeft, imgTriangleRight))
                        break;
                    case 'credits':
                        document.getElementsByTagName('body')[0].appendChild(getCreditsScreen())
                        break;
                    case 'bestScores':
                        document.getElementsByTagName('body')[0].appendChild(getBestScoresScreen())
                        break;
                    case 'none':
                        break;
                    default:
                        console.log(`variable cache['menuSelection'] value is not covered in the switch options`)
                }
        }

        let t = ['learn', 'play', 'credits', 'bestScores']
        t.forEach((value) =>{
            r.querySelector('#' + value + 'Div').addEventListener('pointerdown', () =>{
                if (cache['isfingerSlippingSecurityOff'] !== true || value !== cache['menuSelection']){
                    cache['menuSelection'] = value
                    t.forEach((val) =>{
                    document.querySelector('#' + val + 'Div').style.border = 'black 4px solid'
                    document.querySelector('#' + val + 'Div').style.backgroundColor = 'white'
                    document.querySelector('#' + val + 'Div').style.color = 'black'
                    })
                    document.querySelector('#' + value + 'Div').style.border = 'blue 4px solid'
                    document.querySelector('#' + value + 'Div').style.backgroundColor = 'mistyRose'
                    document.querySelector('#' + value + 'Div').style.color = 'blue'
                    cache['isfingerSlippingSecurityOff'] = true
                    updateOkButtonImg()
                }
                else {
                    goToNextScreen()
                }

            })
        })

        r.querySelector('#okButtonDiv').addEventListener('pointerdown', () =>{
            if (cache['isfingerSlippingSecurityOff'] !== true){
                return;
            }
            else {
                goToNextScreen()
            }
        })

        r.querySelector('#timerDiv').addEventListener('pointerdown', ()=>{
            cache['isfingerSlippingSecurityOff'] = false
            updateOkButtonImg()
            cache['menuSelection'] = 'none'
            let t = ['learn', 'play', 'credits', 'bestScores']
            t.forEach((value) =>{
                document.querySelector('#' + value + 'Div').style.border = 'black 4px solid'
                document.querySelector('#' + value + 'Div').style.backgroundColor = 'white'
                document.querySelector('#' + val + 'Div').style.color = 'black'
            })
        })

    return r ;
}