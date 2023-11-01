const pBar=document.getElementById("bar");
const load=document.getElementById("download");

let barWidth=0;
const down=()=>{
    barWidth++;
    pBar.style.width=`${barWidth}%`;
    setTimeout(()=>{
        load.innerHTML=(barWidth===100)?`${barWidth}% Completed`:`${barWidth}% Downloading`},300);
        }

setTimeout(()=>{
let int=setInterval(()=>{
    if(barWidth===100){
        clearInterval(int)
    }
    else{
        down()
    }
    },100)
},2000)