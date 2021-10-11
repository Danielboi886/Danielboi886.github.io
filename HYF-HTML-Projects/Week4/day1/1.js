//A calculation of area of a square. Mainly to practice how to initiate varibles and call functions

const Pi = 3.1415926
function roundArea (radius) {
return Math.round(Pi*radius*radius)
}
let totalArea = roundArea (3)
console.log(totalArea)


// A remove div excersice, inpired by 'JavaScript Shopping Cart Tutorial for Beginners' https://youtu.be/YeFzkC2awTM 
let divsNum = document.getElementsByClassName('blocks').length;
for (var i = 0; i<= divsNum; i++) {
    function totalBlocks() {
        console.log (`Total items are ${i} `)
    }
    }

function removeDIVs(){
    var ele = document.getElementsByClassName("blocks");
    ele[0].remove();
}





