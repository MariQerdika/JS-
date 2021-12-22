const textEl = document.getElementById('animText__h1');
const text = "Vanilla JavaScript";
let idx = 1;
let speed = 150;

writeText()

function writeText(){
    textEl.innerText = text.slice(0, idx)
    idx++
    if(idx > text.length){
        idx = 1
    }
    setTimeout(writeText, speed)
}