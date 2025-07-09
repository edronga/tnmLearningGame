'use strict'

/*
 * generator gen_timerValue(initialTimeInSeconds, standardColor, lowTimeColor)
 * @param {number} initialTimeInSeconds 
 * @param {number} standardColor 
 * @param {number} lowTimeColor 
 * @return {obect} {number: number, htmlTextString: string} is time in a number format and time in a string format with an html element for the color'<span style = 'color'>minutes : seconds</span>' i.e. '04 : 56', with a <span> element to precise the color
 max value is '60 : 60' ; min value is '00 : 00'
 color changes to lowTimeColor if time is equal or under 10 seconds
*/

function* gen_timerValue(initialTimeInSeconds = 180, standardColor = 'green', lowTimeColor = 'red'){
    const referenceTime = Date.now()
    let elapsedTimeInMilliseconds = 0
    let timeToShow = initialTimeInSeconds
    let r = ''

    function parseTimeToString(timeInSeconds, stdColor = standardColor, lTColor = lowTimeColor){
        if (timeInSeconds <= 0){
            return `<span style = 'color:${lTColor}'>00 : 00</span>`
        }
        if (timeInSeconds >= 60*60){
            return `<span style = 'color:${stdColor}'>60 : 60</span>`
        }
        const minutes = Math.floor(timeInSeconds/60)
        const seconds = timeInSeconds - minutes * 60
        const minutesString = (minutes <= 9)? `0${minutes}`: `${minutes}`;
        const secondsString = (seconds <= 9)? `0${seconds}`: `${seconds}`;
        const color = (timeInSeconds<=10)? lTColor : stdColor;
        return `<span style = 'color:${color}'>${minutesString} : ${secondsString}</span>`
    }
    function update(elapsedTimeInMilliseconds){
        elapsedTimeInMilliseconds = Date.now() - referenceTime
        return elapsedTimeInMilliseconds
    }

    while (true){
        elapsedTimeInMilliseconds = update(elapsedTimeInMilliseconds)
        timeToShow = Math.round(initialTimeInSeconds - elapsedTimeInMilliseconds / 1000)
        r = parseTimeToString(timeToShow, standardColor, lowTimeColor)
        yield {number: timeToShow, htmlTextString: r}
    }
}