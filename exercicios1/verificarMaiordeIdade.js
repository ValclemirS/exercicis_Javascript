let name= prompt("digite seu nome")
let age= Number(prompt("Digite sua idade"))

if (!isNaN(age)) {
    function verificaçao (name,age) {
        if (age>=18) {
         alert(`${name} Maior de idade de idade"`)   
        }else{
            alert(`${name} Menor de idade de idade"`)      
        }    
    }
} else {
    alert("verefique suas informaçoes")
}
verificaçao(name,age)
