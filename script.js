window.onload= function(){
    let btnClose = document.querySelectorAll('input[type="button"].close');
    for(let i =0;i<btnClose.length;i++){
        btnClose[i].addEventListener('click',function(){
            let parent = btnClose[i].parentElement.parentElement;
            parent.classList.add("none");
            parent.classList.contains
        justifyConteiner(parent.parentElement);
        })
    }
    
    function justifyConteiner(conteiner){
        let child = conteiner.children;
        let noneElement = 0;
        for(let i = 0;i<conteiner.childElementCount;i++){
            if(child[i].classList.contains("none")){
                noneElement++;
            }
        }
        if(noneElement == 1){
            conteiner.style.justifyContent = "space-around";
        }
        else if(noneElement == 2){
            conteiner.style.justifyContent = "center";
        }
    }
}



