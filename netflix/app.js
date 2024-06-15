const fa = document.querySelectorAll(".faqs")

fa.forEach((faqs)=>{
    faqs.addEventListener("click",()=>
    {
        if(faqs.classList.contains("active"))
        {
            faqs.classList.remove("active")
        }
        else{
            faqs.classList.add("active")
        }
    })
})