function setup(){
    canvas= createCanvas(900,600)

}
x=0
y=0
draw_circle=""
draw_rectangle=""
var speech_recognition= window.webkitSpeechRecognition
var recognition= new speech_recognition()
function start(){
    document.getElementById("status").innerHTML="System is listening, please speak"
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event)
    content=event.results[0][0].transcript
    document.getElementById("status").innerHTML="Speech has been recognized as: "+content
    if(content=="circle"){
        x=Math.floor(Math.random()*900)
        y=Math.floor(Math.random()*600)
        document.getElementById("status").innerHTML="Started drawing the circle"
        draw_circle="set"
    }
    if(content=="rectangle"){
        x=Math.floor(Math.random()*900)
        y=Math.floor(Math.random()*600)
        document.getElementById("status").innerHTML="Started drawing the rectangle"
        draw_rectangle="set"
    }
 }
 function draw(){
    if(draw_circle=="set"){
        radius=Math.floor(Math.random()*100)
        circle(x,y,radius)
        document.getElementById("status").innerHTML="Circle is drawn"
        draw_circle=""
    }
    if(draw_rectangle=="set"){
        rect(x,y,50,70)
        document.getElementById("status").innerHTML="Rectangle is drawn"
        draw_rectangle=""
    }
 }