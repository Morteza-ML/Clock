const $=document;
const li_nomber=$.querySelectorAll(".nomber");
const li_paragraph=$.querySelectorAll("p");
const watch=$.querySelector(".watch");
const box_min=$.querySelector(".min");
const box_sec=$.querySelector(".sec");

creatElement();
setInterval(()=>{
    clockDisplay();
    show();
},1000)


function match(){
    let date_ful={};
    let date_hour= new Date().getHours();
    date_hour=date_hour%12;
    date_hour=date_hour? date_hour:12;

    let date_min= new Date().getMinutes();
    let date_secend= new Date().getSeconds();
    date_ful["hour"]=date_hour;
    date_ful["min"]=date_min;
    date_ful["sec"]=date_secend;

    let rotate_hour= (30 * date_hour)+((date_min/60) *30);
    let rotate_minut=date_min*6;
    let rotate_second=date_secend*6;

    date_ful["rH"]=rotate_hour;
    date_ful["rM"]=rotate_minut;
    date_ful["rS"]=rotate_second;
    return date_ful;
}

function clockDisplay(){
    let ful=match();
    watch.style.transform=`rotate(${-ful.rH}deg)`;
    li_paragraph.forEach(element => {
        element.style.transform=`rotate(calc((var(--position) - 3)*-30deg + ${ful.rH - 15}deg))`;
        if(element.textContent!=ful.hour){
            element.style.fontSize="40px";
            element.style.color="rgb(51, 51, 51)";
        }
        else {
            element.style.fontSize="55px";
            element.style.color="black"
        }
    });
}

function creatElement(){
    let time=match();
    for(i=0;i<60;i++){
        {
            const newElement1=document.createElement("div");
            const newElement2=document.createElement("div");
            box_min.appendChild(newElement1);
            newElement1.setAttribute("class","pMIN");
            newElement2.setAttribute("class","sMIN");
            newElement1.setAttribute("style",`--pMIN: ${i}`);
            newElement1.appendChild(newElement2);
            if(time.min+i>=60){
                newElement2.textContent= i+time.min-60 ;
            }else{
                newElement2.textContent= parseInt(i+time.min);
            }
        }
        {
            const newElement3=document.createElement("div");
            const newElement4=document.createElement("div");
            box_sec.appendChild(newElement3);
            newElement3.setAttribute("class","pSEC");
            newElement4.setAttribute("class","sSEC");
            newElement3.setAttribute("style",`--pSEC: ${i}`);
            newElement3.appendChild(newElement4);
            
            if(time.sec+i>=60)newElement4.textContent=i+time.sec-60;
            else newElement4.textContent= i+time.sec;
        }
    }
}

function show(){
    let time=match();
    let men=$.querySelectorAll(".sMIN");
    let sen=$.querySelectorAll(".sSEC");
    men.forEach(element => {
        if(element.textContent!=time.min){
            element.style.fontSize="11px";
            element.style.color="black";
        }
        else{
            element.style.color="red";
        }
    });

    sen.forEach(element => {
        if(element.textContent!=time.sec){
            element.style.fontSize="9px";
            element.style.color="black";

        }
        else{
            element.style.color="red";
        }
        
    });
}
