document.addEventListener("DOMContentLoaded", ()=> {
    const errorElement = document.querySelector('.error');
    if(errorElement){
        setTimeout(()=> {
            errorElement.style.opacity = "0";
            setTimeout(()=> {
                errorElement.style.display = "none";
            },1000);
        },5000);
    }
});