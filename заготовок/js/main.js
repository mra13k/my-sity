let header_btn = document.querySelector(".header_btn");
let header_wrapper = document.querySelector(".header_wrapper");

header_btn.onclick=()=>{
    if (header_wrapper.style.display==""){
        header_wrapper.style.display = "flex";
        header_btn.textContent = "close";
    }
    else{
        header_wrapper.style.display = "";
        header_btn.textContent = "open";
    }
}