function like(index){
    if(index===1){
    element=document.querySelector("#likes1").innerHTML;
    element++;
    document.querySelector("#likes1").innerHTML=element;
    }
    else if(index===2){
        element=document.querySelector("#likes2").innerHTML;
        element++;
        document.querySelector("#likes2").innerHTML=element;
    }
    else {
        element=document.querySelector("#likes3").innerHTML;
        element++;
        document.querySelector("#likes3").innerHTML=element;
    }
}