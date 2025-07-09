'use strict'

let cache = {}


const imgTriangleLeft = new Image()
imgTriangleLeft.src = 'Images/imgTriangleLeft.png'
const imgTriangleRight = new Image()
imgTriangleRight.src = 'Images/imgTriangleRight.png'

function getTestCT(){
    let r = []
    for (let i = 0; i <= 96; i++){
        r[i] = new Image()
        r[i].src = (i<10)?`Images/testCase/testCtImgNumber000${i}.png`:`Images/testCase/testCtImgNumber00${i}.png`
    }
    return r;
}

const ctImgBank = {
    'PD-1-Lung-00002':{
        'lung': 176,
        'abdo': 200,
        'solution': 'TxNxMx'
    },
    'PD-1-Lung-00003':{
        'lung': 129,
        'abdo': 200,
        'solution': 'TxNxMx'
    },
    'PD-1-Lung-00004':{
        'lung': 147,
        'abdo': 200,
        'solution': 'TxNxMx'
    },
    'PD-1-Lung-00005':{
        'lung': 139,
        'abdo': 139,
        'solution': 'TxNxMx'
    },
    'PD-1-Lung-00006':{
        'lung': 143,
        'abdo': 200,
        'solution': 'TxNxMx'
    },
    'PD-1-Lung-00007':{
        'lung': 133,
        'abdo': 200,
        'solution': 'TxNxMx'
    },
    'PD-1-Lung-00008':{
        'lung': 154,
        'abdo': 154,
        'solution': 'TxNxMx'
    },
    'PD-1-Lung-00009':{
        'lung': 148,
        'abdo': 148,
        'solution': 'TxNxMx'
    },
    'PD-1-Lung-00011':{
        'lung': 146,
        'abdo': 200,
        'solution': 'TxNxMx'
    },
}

function getCtImages(fileName = undefined, subset = 'lung', CT_IMG_BANK = ctImgBank){

    if (!['lung', 'abdo'].includes(subset)){
        console.log('subset is not equal to "lung" or "abdo", was automatically corrected to "abdo"')
        subset = 'abdo'
    }

    let r = {
        fileName : '',
        subset : subset,
        data : [],
        solution : ''
    }

    const keys = Object.keys(CT_IMG_BANK)

    if (fileName === undefined){
        fileName = function(){
            const rand = Math.floor(Math.random() * keys.length)
            return keys[rand]
        }()
    }
    r.fileName = fileName
    r.solution = CT_IMG_BANK[fileName]['solution']
    
    const numberOfImages = CT_IMG_BANK[fileName][subset]
    for (let i = 0; i < numberOfImages; i++){
        r['data'][i] = new Image()
        r['data'][i].src = `Images/ctImagesBase/${fileName}/${subset}/testCtImgNumber${i}.png`
    }
    return r;

}
