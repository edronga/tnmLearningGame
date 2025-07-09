'use strict'

function getMenuScreen(){

    let r = document.createElement('div')

    r.innerHTML = ` 
    <div id = 'all'>
        <div id = 'myContentDiv'>
            <div id = 'learnDiv' class = 'menuOption'>
                <p>LEARN</p>
            </div>
            <div id = 'playDiv' class = 'menuOption'>
                <p>PLAY</p>
            </div>
            <div id = 'creditsDiv' class = 'menuOption'>
                <p>Credits</p>
            </div>
            <div id = 'bestScoresDiv' class = 'menuOption'>
                <p>Top Scores</p>
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
            font-size : 5dvh;
            display: grid;
            align-items: center;
            justify-items: center;
            text-align: center;
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
            background-color: lightblue;
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

        r.querySelector('#learnDiv').style.border = 'blue 4px solid'
        cache['menuSelection'] = 'learn'

        let t = ['learn', 'play', 'credits', 'bestScores']
        t.forEach((value) =>{
            r.querySelector('#' + value + 'Div').addEventListener('pointerdown', () =>{
                cache['menuSelection'] = value
                t.forEach((val) =>{
                    document.querySelector('#' + val + 'Div').style.border = 'black 4px solid'
                })
                document.querySelector('#' + value + 'Div').style.border = 'blue 4px solid'
            })
        })

        r.querySelector('#okButtonDiv').addEventListener('pointerdown', () =>{
            if (cache['isfingerSlippingSecurityOff'] !== true){
                cache['isfingerSlippingSecurityOff'] = true
                updateOkButtonImg()
                return;
            }
            else {
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
                    default:
                        console.log(`variable cache['menuSelection'] value is not covered in the switch options`)
                }
            }
        })



    return r ;
}