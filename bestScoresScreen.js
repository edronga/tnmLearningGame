'use strict'

function getBestScoresScreen(){
    let r = document.createElement('div')

    r.innerHTML = ` 
    <div id = 'all'>
        <div id = 'myContentDiv'>
            <div id = 'myTitle'>
                <p>Top Scores</p>
            </div>
            <div id = 'myText'>
                <p>to be completed</p>
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
            background-image: url('Images/imgPatientFile.png');
            background-position: center;
            background-repeat: no-repeat;
            background-size: contain;
        }
                
        </style>`

    r.querySelector('#okButtonDiv').addEventListener('pointerdown', () =>{         
        document.getElementsByTagName('body')[0].innerHTML = ''
        document.getElementsByTagName('body')[0].appendChild(getMenuScreen())
    })

    return r;
    
}