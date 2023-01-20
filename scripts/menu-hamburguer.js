function ativar_menu(){
    const menu_nav= document.querySelector('nav');
    const conteudo_menu= document.getElementById('menu')
    
    
    
            if(conteudo_menu.style.visibility==='visible'){
                conteudo_menu.style.visibility='hidden';
                menu_nav.style.height='35px';
            }
            else{
                conteudo_menu.style.visibility='visible';
                menu_nav.style.height='100vh';
            }
}   