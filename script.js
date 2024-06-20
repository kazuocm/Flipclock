const hour = document.querySelector('#hour')
const minute = document.querySelector('#minute')
const period = document.querySelector('#period')
const mode = document.querySelector('#mode')

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
    frames.forEach(frame => {
        frame.classList.toggle('active')
    })
    clocks.forEach(clock=>{
        clock.classList.toggle('active')
    })
}