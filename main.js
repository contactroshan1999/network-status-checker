//selecting all the elements

const wrapper=document.querySelector(".wrapper"),
toast=wrapper.querySelector(".toast"),
wifiicon=wrapper.querySelector(".icon"),
title=wrapper.querySelector("span"),
subtitle=wrapper.querySelector("p"),
closeicon=wrapper.querySelector(".close-icon");

window.onload= () =>{//Once window is loaded
    function ajax()
    {
        let xhr= new XMLHttpRequest(); //creating new xml object
        xhr.open("GET","https://jsonplaceholder.typicode.com/posts/1",true); //sending get request to this URL
        
        xhr.onload= ()=>{ //once the Ajax is loaded
            if(xhr.status == 200 && xhr.status < 300)
            {
                toast.classList.remove("offline");
                title.innerText="You're online now 🤩";
                subtitle.innerText="Hurray! Internet is Connnected 😃";
                wifiicon.innerHTML='<i class="uil uil-wifi"></i>';
                closeicon.onClick= ()=> {
                    
                    wrapper.classList.remove("hide");
                }
                setTimeout(()=>{ wrapper.classList.add("hide");},3000);
            }
            else
            {
                offline();
            }
            //console.log("j"); // Getting the response of that get Request
        }
        xhr.onerror= ()=>{//If the passed url is incorrect or returning 404 or other error
            offline();
        }
        xhr.send(); 
    }
    function offline()
    {
        wrapper.classList.remove("hide");
        toast.classList.add("offline");
        title.innerText="You're offline 😑";
        subtitle.innerText="Opps! Internet is Disconnected 😭";
        wifiicon.innerHTML='<i class="uil uil-wifi-slash"></i>';
    }
    setInterval(()=>{ajax();},100);
    

}
