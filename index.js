const noButton = document.getElementById("no");
noButton.addEventListener("mouseover", ()=>{
    noButton.style.position = "absolute";
    noButton.style.left = `${Math.ceil(Math.random() * 90)}%`;
    noButton.style.top = `${Math.ceil(Math.random() * 90)}%`;
})

noButton.addEventListener("click", ()=>{
    noButton.style.position = "absolute";
    noButton.style.left = `${Math.ceil(Math.random() * 90)}%`;
    noButton.style.top = `${Math.ceil(Math.random() * 90)}%`;
})

