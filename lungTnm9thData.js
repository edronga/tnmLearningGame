'use strict'


const lungTnm = {
    edition: '9th',
    getDefinition: getTnm9thDefinition,
    getAjccStaging: getTnm9thAjccStaging
}

/*
 * function getTnm9thDefinition(tnmCode)
 * @param {string} tnmCode i.e. 'M1c'
 * @return {string} definition
 * 
*/

function getTnm9thDefinition(tnmCode){
    const definition = {
    'TX': 'Primary tumor cannot be assessed.\nIncludes tumors provent by the presence of malignant cells in sputum or bronchial washings but not visualized by imaging of bronchoscopy',
    'T0': 'No evidence of primary tumor',
    'Tis': 'Carcinoma in situ\nSquamous cell carcinoma in situ (SCIS)\nAdenocarcinoma in situ (AIS) : adenocarcinoma with pure lepidic patter, \u2264 cm in greatest dimension',
    'T1': 'Tumor \u2264 3 cm in greatest dimension surrounded by lung of visceral pleura, or in a lobar or more peripheral bronchus',
    'T1mi': 'Minimally invasive adenocarcinoma: adenocarcinoma(\u2264 in greatest dimension) with a predominantly lepidic pattern and \u2264 5mm invasion in greatest dimension',
    'T1a': 'Tumor \u2264 1 cm in greatest dimension\nOR\nTumor of any size whose invasive componvent is limited to the bronchial wall and may extend proximal to the main bronchus, this in an uncommon superficial, spreading tumor',
    'T1b': 'Tumor \u2265 1 cm but \u2264 2 cm in greatest dimension',
    'T1c': 'Tumor \u2265 2 cm but \u2264 3 cm in greatest dimension',
    'T2' : 'Tumor \u2265 3 cm but \u2264 5 cm in greatest dimension\nOR\nTumor \u2264 4 cm with one of more of the following features:\n-Invades visceral pleura\n-Invades and adjacent lobe\n-Involves main bronchus (up to but not including the carina)\nor\n associated with atelectasis or obstructive pneumonitis, extending to the hilar regions, involving either part of or the entire lung',
    'T2a': 'Tumor \u2265 3 cm but \u2264 4 cm in greatest dimension\nOR\nTumor \u2264 4 cm in greatest dimension with one or more of the follwing features:\n-Invades visceral pleura\n-Invades adjacent lobe\nInvolves main bronchus(up to but not including the carina)\nor\nassociated with atelectasis or obstructive pneumonitis, extending to the hilar regions, involving either part of or the entire lung',
    'T2b': 'Tumor \u2265 4 cm but \u2264 5 cm in greatest dimension\nOR\nTumor \u2264 4 cm in greatest dimension with one or more of the follwing features:\n-Invades visceral pleura\n-Invades adjacent lobe\nInvolves main bronchus(up to but not including the carina)\nor\nassociated with atelectasis or obstructive pneumonitis, extending to the hilar regions, involving either part of or the entire lung',
    'T3': 'Tumor \u2265 5 cm but \u2264 7 cm in greatest dimension\OR\nTumor \u2264 7 cm with one or more of the following features:\n-Invades parietal pleural or chest wall\n-Invades pericardium, phrenic nerve or azygos vein\nAlthough theses structures lie within the mediastinum, the degree of mediastinal penetration by the tumor needed to invade theses structures is not counted as T4\n-Invades thoracic nerve roots (i.e., T1, T2) or stellate ganglion\n-Separated tumor nodule(s) in the same lobe as the primary',
    'T4': 'Tumor \u2265 7 cm in greatest dimension\nOR\nTumor of any size with one or more of the following features:\n-Invades mediastinum (except structures listed in T3), thymus, trachea, carina, reccurent laryngeal nerve, vagus nerve, oesophagus or diaphragm\n-Invades heart great vessels (aorta, superior/inferior vena cava, intrapericardial pulmonary arteries/veins), supra-aortic arteries or brachiocephalic veins\n-Invades subclavian vessels, vertebral body, lamina, spinal canal, cervical nerve roots or brachial plexus(i.e., trunks, divisions, cords or terminal nerves)\n-Separate tumor nodule(s) in a different ipsilateral lobe than that of the primary',
    'NX': 'Regional lymph nodes cannot be assessed',
    'N0': 'No tumor involvement or regional lymph node(s)',
    'N1': 'Tumor involvement of ipsilateral peribronchial and/or ipsilateral and/or ipsilateral pulmonary lymph node station(s), including involvement by direct extension',
    'N2': 'Tumor involvement of ipsilateral mediastinal nodal station(s) and/or subcarinal lymph node station',
    'N2a': 'Tumor involvement of a single ipsilateral mediastinal nodal station or of the subcarinal nodal station',
    'N2b': 'Tumor involvement of multiple ipsilateral mediastinal nodal stations with or without involvement of the subcarinal nodal station',
    'N3': 'Tumor involvement of contralateral mediastinal, contralateral hilar, ipsilatera/contralateral scalene, or ipsilateral/contralateral supraclavicular lymph node station(s)',
    'M0': 'No distant metastasis',
    'M1': 'Distant metastasis',
    'M1a': 'Metastasis in pleural or pericardial nodules, and/or malignant pleural or pericardial effusions, and/or separate tumor nodule(s) in a contralateral lobe',
    'M1b': 'Single extrathoracic metastasis in a single organ system (including involvement of a single non-regional node)',
    'M1c': 'Multiple extrathoracic metastases in a single or multiple organ system(s)',
    'M1c1': 'Multiple extrathoracic metastases in a single organ system',
    'M1c2': 'Multiple extrathoracic metastases in multiple organs systems'
}
    if (definition[tnmCode] === undefined){
        return `Error: no definition found for code ${tnmCode}`
    }
    return definition[tnmCode]

}

/*
 * function getTnm9thAjccStaging(stringT = 'TX', stringN = 'NX', stringM = 'MX')
 * @param {string} T Code i.e. 'T1a'
 * @param {string} N Code i.e. 'N2a'
 * @param {string} M Code i.e. 'M1c2'
 * @return {string} AJCC stage i.e. 'IIIB', with prefix 'At least' if MX, return error string if AJCC staging could not be determined
 * 
*/

function getTnm9thAjccStaging(stringT = 'TX', stringN = 'NX', stringM = 'MX'){

    if (typeof(stringT) !== 'string' || typeof(stringN) !== 'string' || typeof(stringM) !== 'string' ){
        return 'Error : parameters type must be string (getTnm9thAjccStaging)'
    }
    
    function formatText(string) {
        string = string.toLowerCase()
        string = string.slice(0,1).toUpperCase() + string.slice(1)
        if (string[1] === 'x'){string = string.replace('x', 'X')}
        return string
    }
    stringT = formatText(stringT)
    stringN = formatText(stringN)
    stringM = formatText(stringM)

    if (!['TX', 'T0', 'Tis', 'T1', 'T1mi','T1a', 'T1c', 'T2a', 'T2b', 'T3', 'T4'].includes(stringT)){
        return 'Error: T value was not recognized (getTnm9thAjccStaging)'
    }
    if (!['N0', 'NX', 'N1', 'N2a', 'N2b', 'N3'].includes(stringN)){
        return 'Error : N value was not recogized (getTnm9thAjccStaging)'
    }
    if (!['M0','MX', 'M1a', 'M1b', 'M1c', 'M1c1', 'M1c2'].includes(stringM)){
        return 'Error : M value was not recogized (getTnm9thAjccStaging)'
    }
   
    if (stringM[1] === '1' && ['a', 'b'].includes(stringM[2])){
        return'IVA'
    }
    if (stringM[1] === '1' && stringM[2] === 'c'){
        return 'IVB'
    }

    let prefix = ''
    if (stringM === 'MX'){
        prefix = 'MX, at least '
        stringM = 'M0'
    }

    if (stringN === 'N3' && ['T3', 'T4'].includes(stringT)){
        return prefix + 'IIIC'
    }
    if (stringN === 'N3' && ['T1', 'T2', 'T1mi','T1a', 'T1c', 'T2a', 'T2b'].includes(stringT)){
        return prefix + 'IIIB'
    }
    if (stringT === 'T4' && ['N2a', 'N2b'].includes(stringN)){
        return prefix + 'IIIB'
    }
    if (['T2','T2a', 'T2b','T3'].includes(stringT) && stringN === 'N2b'){
        return prefix + 'IIIB'
    }
    if (['T2', 'T2a', 'T2b','T3'].includes(stringT) && stringN === 'N2a'){
        return prefix + 'IIIA'
    }
    if (['T1', 'T1a', 'T1b', 'T1c'].includes(stringT) && stringN === 'N2b'){
        return prefix + 'IIIA'
    }
    if (['T3', 'T4'].includes(stringT) && stringN === 'N1'){
        return prefix + 'IIIA'
    }
    if (stringT === 'T4' && stringN === 'N0'){
        return prefix + 'IIIA'
    }
    if (['T2a', 'T2b'].includes(stringT) && stringN === 'N1'){
        return prefix + 'IIB'
    }
    if (['T1','T1mi','T1a', 'T1c', 'T2a', 'T2b'].includes(stringT) && stringN === 'N2a'){
        return prefix + 'IIB'
    }
    if (stringT === 'T3' && stringN === 'N0'){
        return prefix + 'IIB'
    }
    if (['T1', 'T1mi', 'T1a', 'T1b', 'T1c'].includes(stringT) && stringN === 'N1'){
        return prefix + 'IIA'
    }
    if (stringT === 'T2b' && stringN === 'N0'){
        return prefix + 'IIA'
    }
    if (stringT === 'T2a' && stringN === 'N0'){
        return prefix + 'IB'
    }
    if (stringT === 'T1c' && stringN === 'N0'){
        return prefix + 'IA3'
    }
    if (stringT === 'T1b' && stringN === 'N0'){
        return prefix + 'IA2'
    }
    if (['T1mi', 'T1a'].includes(stringT) && stringN === 'N0'){
        return prefix + 'IA1'
    }
    if (stringT === 'Tis' && stringN === 'N0'){
        return prefix + '0'
    }
    if (stringT === 'Tx'){
        return prefix + '0'
    }
    return `Error: no AJCC staging could be determined for combination ${stringT}, ${stringN}, ${stringM} (getTnm9thAjccStaging)`
}

/*
 * function testForGetTnm9thAjccStaging(), is a test for getTnm9thAjccStaging(stringT = 'TX', stringN = 'NX', stringM = 'MX')
 * @param {} node
 * impure 
 * @return getTnm9thAjccStaging for all possible combinations of T, N and M parameters
 * 
*/

function testForGetTnm9thAjccStaging(){
    const tOptions = ['TX', 'T0', 'Tis', 'T1', 'T1mi','T1a', 'T1c', 'T2a', 'T2b', 'T3', 'T4']
    const nOptions = ['NX', 'N0', 'N1', 'N2a', 'N2b', 'N3']
    const mOptions = ['MX', 'M0', 'M1a', 'M1b', 'M1c', 'M1c1', 'M1c2']

    tOptions.forEach((t)=>{
        nOptions.forEach((n) =>{
            mOptions.forEach((m)=>{
                console.log (`Parameters: ${t}${n}${m}; Return : ${getTnm9thAjccStaging(t,n,m)}`)
            })
        })
    })
}