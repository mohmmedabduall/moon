let stars=document.getElementById("stars")
let moon=document.getElementById("moon")
let mountains3=document.getElementById("mountains3")
let mountains4=document.getElementById("mountains4")
let river=document.getElementById("river")
let boat=document.getElementById("boat")
let mohammed=document.querySelector(".mohammed")
let main=document.querySelector(".main") 

window.onscroll=function(){
    let value=scrollY;
    stars.style.left=value +'px'
    moon.style.top=value *2 +'px'
    mountains3.style.top=value *1.2 +'px'
    mountains4.style.top=value *1 +'px'
    river.style.top=value *1.2 +'px'
    boat.style.top=value *1.2 +'px'
    boat.style.left=value *3 +'px'
    mohammed.style.fontSize=value+"px"
    if(scrollY>=67){
        mohammed.style.fontSize=67+"px"
if(scrollY>=450){
    mohammed.style.display="none"
}else{
    mohammed.style.display="block"

}
    }
    if(scrollY>=250){
        main.style.background='black'
    }
    else
    {
        main.style.background='linear-gradient(#200016,#10001f)'

    }
}   


console.log(main)
