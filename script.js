const hour = document.querySelector('#hour')
const minute = document.querySelector('#minute')
const period = document.querySelector('#period')
const mode = document.querySelector('#mode')
const elem = document.documentElement
const max = document.querySelector('#maximize')
const min = document.querySelector('#minimize')

setInterval(function time(){
    let date = new Date()
    let hr = date.getHours()
    let min = date.getMinutes()
    let p = hr >=12 ? 'pm' : 'am'

    hr = hr % 12
    hr = hr ? hr : 12;

    hour.textContent = hr
    minute.textContent = min
    period.textContent = p
})

mode.onclick = function(){
    const body = document.querySelector('body')
    const line = document.querySelector('#line')
    const frames = document.querySelectorAll('.frame')
    const clocks = document.querySelectorAll('.clock')

    this.classList.toggle('active')
    body.classList.toggle('active')
    line.classList.toggle('active')
    max.classList.toggle('active')
    min.classList.toggle('active')

    frames.forEach(frame => {
        frame.classList.toggle('active')
    })
    clocks.forEach(clock=>{
        clock.classList.toggle('active')
    })
}

max.onclick = function(){
    if(elem.requestFullscreen){
        elem.requestFullscreen()
    }else if(elem.mozRequestFullScreen){
        elem.mozRequestFullScreen()
    }else if(elem.webkitRequestFullScreen){
        elem.webkitRequestFullScreen()
    }else if(elem.msRequestFullScreen){
        elem.msRequestFullScreen()
    }

    max.style.display = 'none'
    min.style.display = 'block'
}

min.onclick = function() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }else if(elem.mozCancelFullScreen){
        elem.mozCancelFullScreen()
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }

    min.style.display = 'none'
    max.style.display = 'block'
  }