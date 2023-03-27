var manuBtn = document.getElementById('manuBtn')
var sideNav = document.getElementById('sideNav')
var menu = document.getElementById('menu')

sideNav.style.right = "-250px";
manuBtn.onclick = function(){
     if(sideNav.style.right == "-250px"){ // Se caso a nosso elemento sideNav for verdadeiro, vai executar as ações de baixo
        sideNav.style.right = "0";
        menu.src = "img/menu.png";
    } 
    else{ //Senão for verdadeiro(falso) executa essas ações
        sideNav.style.right == "-250px";
        menu.src = "img/menu.png";
     }
}