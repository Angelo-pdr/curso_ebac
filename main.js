const form = document.querySelector('.form-depositor');
const p = document.querySelector(".sucesso-message");
const name = document.getElementsByTagName('h1')

form.addEventListener("submit", function(e){
    e.preventDefault()
    campoA = Number(document.querySelector("#campoA").value)
    campoB = Number(document.querySelector("#campoB").value)
    console.log(campoA <= campoB)
    console.log(campoB)

    if(campoA < campoB){
        p.classList.remove("error-message")
        p.classList.add('sucesso-message')
        p.style.display = "block";
        p.innerHTML = `depositor de R$${campoB.toFixed(2)} feito com sucesso`
    }
    else{
        p.classList.remove("sucesso-message")
        p.classList.add('error-message')
        p.innerHTML = "Numero da conta tem que ser menor que o valor de depositor"
    }
});
