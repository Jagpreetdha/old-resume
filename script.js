const span = document.querySelector('span')

const wordsList = ['Hello, my name is Jagpreet Dhanova','I am a Coder','I am a Frontend Web Developer']
debugger
let wordIndex =0
let characterIndex = 0
let skipUpdate = 0
let reverseType = false
const intervalId = setInterval(() =>{

if(!reverseType){

span.innerText  = span.innerText + wordsList[wordIndex][characterIndex]
characterIndex++}
else{
span.innerText = span.innerText.slice(0,span.innerText.length-1)
characterIndex--
}
if(characterIndex === wordsList[wordIndex].length){

reverseType = true
}
if(span.innerText.length===0 && reverseType){
reverseType = false
wordIndex++
}
if(wordIndex===wordsList.length){
wordIndex=0}
}
,200)