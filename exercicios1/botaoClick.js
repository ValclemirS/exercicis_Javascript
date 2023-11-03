//Eventos DOM: Crie uma página HTML com um botão que, quando clicado, exiba um alerta que diga “Você clicou no botão!”.
const  botao= document.getElementById("click")
function click(){
    alert("Você clicou no botão!")
}
botao.addEventListener("click",click)