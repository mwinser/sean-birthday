//window.focus()
let output = document.querySelector('#message')
let gift = document.querySelector('#gift')
let cake = document.querySelector('#cake')
let codeLog = []
let konami = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a","b","a"]
window.addEventListener('keyup', (e)=>{
  codeLog.push(e.key)
  if (codeLog.length>konami.length) {
    codeLog.shift()
  }
  if (codeLog.join('')===konami.join('')){
    output.innerHTML = "KONAMI ENTERED!"
    output.classList.add('konami')
    gift.classList.add('hide')
    cake.classList.remove('hide')
  } else {
    output.innerHTML = "Open your gift! (press up, up, down, down, left, right, left, right, b, a, b, a.)"
    output.classList.remove('konami')
    gift.classList.remove('hide')
    cake.classList.add('hide')
  }
})