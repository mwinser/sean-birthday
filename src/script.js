window.focus()
let output = document.querySelector('#message')
let gift = document.querySelector('#gift')
let cake = document.querySelector('#cake')
let flame = document.querySelector('#flame')
let codeLog = []
let konami = ["ArrowUp","ArrowUp","ArrowLeft","ArrowDown","ArrowRight","a","b"]

function blowCandles() {
  flame.classList.add('flicker')
  setTimeout(()=>{
    flame.classList.remove('flicker')
  },1500)
}

cake.addEventListener('click', blowCandles)

window.addEventListener('keyup', (e)=>{
  codeLog.push(e.key)
  if (codeLog.length>konami.length) {
    codeLog.shift()
  }
  if (codeLog.join('')===konami.join('')){
    output.innerHTML = "HAPPY BIRTHDAY!"
    output.classList.add('konami')
    gift.classList.add('hide')
    cake.classList.remove('hide')
  } else {
    output.innerHTML = "Use your cheat code to open your gift!"
    output.classList.remove('konami')
    gift.classList.remove('hide')
    cake.classList.add('hide')
  }
})