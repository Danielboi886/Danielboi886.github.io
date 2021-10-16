let textSample = `hOw cAn mIrRoRs bE ReAl iF OuR EyEs aReN'T ReAl`
console.log(textSample)
//convert all words into small case first and then split them into an array for the next step
let smCaseArr = textSample.toLowerCase().split(' ')   
//This is to let each word in the array captialize the its first letter and then "smallfy" all other letters, then join them together. 
//Slice would first take the first letter, namely slice(0,1), and then take the rest, namely, slice(1)
//I use map here because I need to create an new array. Check it out:
//https://stackoverflow.com/questions/29719329/convert-array-into-upper-case/29719347
let jadCaseArr = smCaseArr.map(function caseConv(word){                    
    return word.slice(0,1).toUpperCase() +  word.slice(1).toLowerCase()
})
// joining the array back again using arr.join(), where seprator by default is "," you can change it by for example " ". 
console.log(jadCaseArr.join(' '))