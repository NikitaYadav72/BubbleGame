var timer = 59;
var score = 0;
var hit = 0;

function increaseScore(){
    score+=10;
    document.querySelector("#score").textContent=score;
}

function makeNewHit(){
    hit=Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent=hit;
}

function makebubble(){
    var clutter="";
    for(let i=1; i<=150;i++){
        var count=Math.floor(Math.random()*10);
        clutter+=`<div class ="bubble">${count}</div>`
    }
    document.querySelector("#bottom").innerHTML=clutter;
}

function runtimer(){
    var timerint=setInterval (function(){
        if(timer>0){
            timer--;
            document.querySelector("#timer").textContent=timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#bottom").innerHTML=`<div class="card">
            <h1>Game Over</h1>
            <h2>Score : <span>${score}</span> </h2>
            <div class = " playBtn">
                <i class ="fa-solid fa-play" style="color:#ff1467;"></i>
                </div>
            </div> `

            document.querySelector(".playBtn").addEventListener("click",()=>{
                makebubble()
                bottom.classList.remove("center")
                makeNewHit()
                timer =30;
                timerBox.innerHTML = timer
                runtimer()
                score=0;
                score.innerHTML = score;
                
            }) 
        }
    },1000)
}
runtimer()

document.querySelector("#bottom").addEventListener("click",function(dets){
    var clickednum=Number(dets.target.textContent);
    if(clickednum ===hit)
        increaseScore();
    makebubble();
    makeNewHit();
});



runtimer();
increaseScore();
makeNewHit();
makebubble();











