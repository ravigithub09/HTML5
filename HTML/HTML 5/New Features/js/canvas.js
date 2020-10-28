var canvas = document.querySelector('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

var context = canvas.getContext('2d')
context.fillStyle = "rgba(255,0,0,0.5)"
context.fillRect(100, 100, 100, 100)
context.fillStyle = "rgba(0,0,255,0.5)"
context.fillRect(400, 100, 100, 100)
context.fillStyle = "rgba(0,255,0,0.5)"
context.fillRect(250, 200, 100, 100)

//Line
context.beginPath()
context.moveTo(50, 400)
context.strokeStyle = "rgba(0,255,0,1)"
context.lineTo(300, 100)
context.lineTo(400, 300)
context.stroke()
console.log(canvas)

//arc
// context.beginPath()
// context.arc(300, 400, 30, 0, Math.PI * 2, false)
// context.strokeStyle = "blue"
// context.stroke()

//for multiple circle
for (var i = 0; i < 4000; i++) {
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    context.beginPath()
    context.arc(x, y, 30, 0, Math.PI * 2, false)
    context.strokeStyle = "blue"
    context.stroke()
}