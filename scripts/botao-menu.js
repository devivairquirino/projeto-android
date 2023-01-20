function menu(){

    const linha= document.querySelectorAll('div.linhas');
    
    if(linha[1].style.display==='none')
    {
        for(let i=0; i<=2;i++){
            // static faz os elementtos voltarem a posição original
            // pois não são afetados pelo top,right...
            linha[i].style.position='static';

            linha[i].style.margin='5px auto';
        }
        // rodar as linhas para a posição original
        linha[0].style.transform='rotate(0deg)';
        linha[2].style.transform='rotate(180deg)';
        // tornar visivel a linha do meio
        linha[1].style.display='block';
    }
    else{
        // linha do meio fica invisivel
        linha[1].style.display='none';
        for(let i=0; i<=2;i++){
            linha[i].style.position='absolute';
            // centralizar o X
            linha[i].style.top='50%';
            linha[i].style.left='50%';

            linha[i].style.margin='-2.5px -45%';
        }
        // colocar em X o menu rodando as linhas
        linha[0].style.transform='rotate(45deg)';
        linha[2].style.transform='rotate(135deg)';
    }
    

}