'use strict'

function getSelectionScreen(answer){

    let r = document.createElement('div')

    r.innerHTML = ` 
    <div id = 'all'>
        <div id = 'myContentDiv'>
            <div id = 'TTitleDiv' class = 'titleDiv'><p>T</p></div>
            <div id = 'T0Div' class = 'mainTNMDiv'><p>T0</p></div>
            <div id = 'T1Div' class = 'mainTNMDiv'><p>T1</p></div>
            <div id = 'T2Div' class = 'mainTNMDiv'><p>T2</p></div>
            <div id = 'T3Div' class = 'mainTNMDiv'><p>T3</p></div>
            <div id = 'T4Div' class = 'mainTNMDiv'><p>T4</p></div>
            
            <div id = 'T1aDiv' class = 'secondaryTNMDiv'><p>T1a</p></div>
            <div id = 'T1bDiv' class = 'secondaryTNMDiv'><p>T1b</p></div>
            <div id = 'T1cDiv' class = 'secondaryTNMDiv'><p>T1c</p></div>
            <div id = 'T2aDiv' class = 'secondaryTNMDiv'><p>T2a</p></div>
            <div id = 'T2bDiv' class = 'secondaryTNMDiv'><p>T2b</p></div>

            <div id = 'NTitleDiv' class = 'titleDiv'><p>N</p></div>
            <div id = 'N0Div' class = 'mainTNMDiv'><p>N0</p></div>
            <div id = 'N1Div' class = 'mainTNMDiv'><p>N1</p></div>
            <div id = 'N2Div' class = 'mainTNMDiv'><p>N2</p></div>
            <div id = 'N3Div' class = 'mainTNMDiv'><p>N3</p></div>

            <div id = 'N2aDiv' class = 'secondaryTNMDiv'><p>N2a</p></div>
            <div id = 'N2bDiv' class = 'secondaryTNMDiv'><p>N2b</p></div>

            <div id = 'MTitleDiv' class = 'titleDiv'><p>M</p></div>
            <div id = 'M0Div' class = 'mainTNMDiv'><p>M0</p></div>
            <div id = 'M1Div' class = 'mainTNMDiv'><p>M1</p></div>

            <div id = 'M1aDiv' class = 'secondaryTNMDiv'><p>M1a</p></div>
            <div id = 'M1bDiv' class = 'secondaryTNMDiv'><p>M1b</p></div>
            <div id = 'M1cDiv' class = 'secondaryTNMDiv'><p>M1c</p></div>
            <div id = 'M1c1Div' class = 'secondaryTNMDiv'><p>M1c1</p></div>
            <div id = 'M1c2Div' class = 'secondaryTNMDiv'><p>M1c2</p></div>

            <div id = 'StageTitleDiv'><p>AJCC</p></div>
            <div id = 'IA1Div' class = 'stageDiv'><p>IA1</p></div>
            <div id = 'IA2Div' class = 'stageDiv'><p>IA2</p></div>
            <div id = 'IA3Div' class = 'stageDiv'><p>IA3</p></div>
            <div id = 'IBDiv' class = 'stageDiv'><p>IB</p></div>
            <div id = 'IIADiv' class = 'stageDiv'><p>IIA</p></div>
            <div id = 'IIBDiv' class = 'stageDiv'><p>IIB</p></div>
            <div id = 'IIIADiv' class = 'stageDiv'><p>IIIA</p></div>
            <div id = 'IIIBDiv' class = 'stageDiv'><p>IIIB</p></div>
            <div id = 'IIICDiv' class = 'stageDiv'><p>IIIC</p></div>
            <div id = 'IVADiv' class = 'stageDiv'><p>IVA</p></div>
            <div id = 'IVBDiv' class = 'stageDiv'><p>IVB</p></div>
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

        #myContentDiv{
            width: 100dvw;
            height: 80dvh;
            grid-area: myContentDiv;
            display: grid;
            align-items: center;
            justify-items: center;
            text-align: center;
            grid-template: 'TTitleDiv T0Div T1Div T2Div T3Div T4Div' 10dvh
            'TTitleDiv T1aDiv T1bDiv T1cDiv T2aDiv T2bDiv' 10dvh
            'NTitleDiv N0Div N1Div N2Div N3Div .' 10dvh
            'NTitleDiv N2aDiv N2bDiv . . .' 10dvh
            'MTitleDiv M0Div M1Div . . .' 10dvh
            'MTitleDiv M1aDiv M1bDiv M1cDiv M1c1Div M1c2Div' 10dvh
            'StageTitleDiv IA1Div IA2Div IA3Div IBDiv IIADiv' 10dvh
            'IIBDiv IIIADiv IIIBDiv IIICDiv IVADiv IVBDiv' 10dvh;
        }
        .mainTNMDiv{
            width: 15dvw;
            height : 8dvh;
            background-color: lightgreen;
            border: 2px solid,
        }
        .secondaryTNMDiv{
            width: 15dvw;
            height : 8dvh;
            background-color: lightgrey;
            border: 2px solid,
        }
        .stageDiv{
            width: 15dvw;
            height : 8dvh;
            background-color: lightpink;
            border: 2px solid,
        }
        .titleDiv{
            width: 15dvw;
            height : 18dvh;
            display: grid;
            align-items: center;
            justify-items: center;
            background-color: yellow;
            border: 2px solid,
        }
        #T0Div{
            grid-area: T0Div;
        }
        #T1Div{
            grid-area: T1Div
        }
        #T2Div{
            grid-area : T2Div
        }
        #T3Div{
            grid-area : T3Div
        }
        #T4Div{
            grid-area : T4Div
        } 

        #T1aDiv{
            grid-area : T1aDiv
        }
        #T1bDiv{
            grid-area : T1bDiv
        }
        #T1cDiv{
            grid-area : T1cDiv
        }
        #T2aDiv{
            grid-area : T2aDiv
        } 
        #T2bDiv{
            grid-area : T2bDiv
        }

        #N0Div{
            grid-area : N0Div
        }
        #N1Div{
            grid-area : N1Div
        }
        #N2Div{
            grid-area : N2Div
        }
        #N3Div{
            grid-area : N3Div
        } 

        #N2aDiv{
            grid-area : N2aDiv
        }
        #N2bDiv{
            grid-area : N2bDiv
        }

        #M0Div{
            grid-area : M0Div
        }
        #M1Div{
            grid-area : M1Div
        }

        #M1aDiv{
            grid-area : M1aDiv
        }
        #M1bDiv{
            grid-area : M1bDiv
        }
        #M1cDiv{
            grid-area : M1cDiv
        }
        #M1c1Div{
            grid-area : M1c1Div
        }
        #M1c2Div{
            grid-area : M1c2Div
        }
        #IA1Div{
            grid-area: IA1Div
        }
        #IA2Div{
            grid-area: IA2Div
        }
        #IA3Div{
            grid-area: IA3Div
        }
        #IBDiv{
            grid-area: IBDiv
        }
        #IIADiv{
            grid-area: IIADiv
        }
        #IIBDiv{
            grid-area: IIBDiv
        }
        #IIIADiv{
            grid-area: IIIADiv
        }
        #IIIBDiv{
            grid-area: IIIBDiv
        }
        #IIICDiv{
            grid-area: IIICDiv
        }
        #IVADiv{
            grid-area: IVADiv
        }
        #IVBDiv{
            grid-area: IVBDiv
        }
        #TTitleDiv{
            grid-area: TTitleDiv
        }
        #NTitleDiv{
            grid-area: NTitleDiv
        }
        #MTitleDiv{
            grid-area: MTitleDiv
        }
        #StageTitleDiv{
            width: 15dvw;
            height : 8dvh;
            grid-area : StageTitleDiv;
            background-color: yellowgreen;
            border: 2px solid,
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
            background-color: whitesmoke;
            background-image: url('Images/imgSafety.png');
            background-position: center;
            background-repeat: no-repeat;
            background-size: contain;
        }
                
        </style>`

    document.getElementsByTagName('body')[0].style.margin = 0

    cache['playerChoice_T'] = 'Tx'
    cache['playerChoice_N'] = 'Nx'
    cache['playerChoice_M'] = 'M0'
    cache['playerChoice_Stage'] = '??'

    let t = []
    t = ['T0', 'T1', 'T2', 'T3', 'T4', 'T1a', 'T1b', 'T1c', 'T2a', 'T2b']
    t.forEach((value) =>{
        r.querySelector('#' + value + 'Div').addEventListener('pointerdown', ()=>{
                const t = ['T0', 'T1', 'T2', 'T3', 'T4', 'T1a', 'T1b', 'T1c', 'T2a', 'T2b']
                t.forEach((val) =>{
                    document.querySelector('#' + val + 'Div').style.border = 'black 2px solid'
                })
                document.querySelector('#' + value + 'Div').style.border = 'blue 2px solid'
                cache['playerChoice_T'] = value
            })
            
    })

    t = ['N0', 'N1', 'N2', 'N3', 'N2a', 'N2b']
    t.forEach((value) =>{
        r.querySelector('#' + value + 'Div').addEventListener('pointerdown', ()=>{
                const t = ['N0', 'N1', 'N2', 'N3', 'N2a', 'N2b']
                t.forEach((val) =>{
                    document.querySelector('#' + val + 'Div').style.border = 'black 2px solid'
                })
                document.querySelector('#' + value + 'Div').style.border = 'blue 2px solid'
                cache['playerChoice_N'] = value
            })
            
    })

    t = ['M0', 'M1', 'M1a', 'M1b', 'M1c', 'M1c1', 'M1c2']
    t.forEach((value) =>{
        r.querySelector('#' + value + 'Div').addEventListener('pointerdown', ()=>{
                const t = ['M0', 'M1', 'M1a', 'M1b', 'M1c', 'M1c1', 'M1c2']
                t.forEach((val) =>{
                    document.querySelector('#' + val + 'Div').style.border = 'black 2px solid'
                })
                document.querySelector('#' + value + 'Div').style.border = 'blue 2px solid'
                cache['playerChoice_M'] = value
            })
            
    })

    t = ['IA1', 'IA2', 'IA3', 'IB', 'IIA', 'IIB', 'IIIA', 'IIIB', 'IIIC', 'IVA', 'IVB']
    t.forEach((value) =>{
        r.querySelector('#' + value + 'Div').addEventListener('pointerdown', () =>{
            const t = ['IA1', 'IA2', 'IA3', 'IB', 'IIA', 'IIB', 'IIIA', 'IIIB', 'IIIC', 'IVA', 'IVB']
            t.forEach((val) => {
                document.querySelector('#' + val + 'Div').style.border = 'black 2px solid'
            })
            document.querySelector('#' + value + 'Div').style.border = 'blue 2px solid'
            cache['playerChoice_Stage'] = value
        })
    })

    r.querySelector('#okButtonDiv').addEventListener('pointerdown', () =>{
            if (cache['isfingerSlippingSecurityOff'] !== true){
                cache['isfingerSlippingSecurityOff'] = true
                updateOkButtonImg()
                return;
            }
            else {
                cache['playerChoice'] = cache['playerChoice_T'] + cache['playerChoice_N'] + cache['playerChoice_M']
                document.getElementsByTagName('body')[0].innerHTML = ''
                document.getElementsByTagName('body')[0].appendChild(getValidationScreen(cache['playerChoice'],cache['currentSolution']))

            }
        })
    

    return r;
}

