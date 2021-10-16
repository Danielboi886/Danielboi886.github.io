let textSample = `hOw cAn mIrRoRs bE ReAl iF OuR EyEs aReN'T ReAl`
console.log(textSample)

let smCaseArr = textSample.toLowerCase().split(' ')
let jadCaseArr = smCaseArr.map(function caseConv(word){
    return word.slice(0,1).toUpperCase() +  word.slice(1).toLowerCase()
})
console.log(jadCaseArr.join(' '))