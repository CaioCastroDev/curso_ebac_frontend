const form = document.getElementById('exe');
document.querySelector('.correto').style.display = 'none'
document.querySelector('.incorreto').style.display = 'none'

let num1 = document.getElementById('campoA');
let num2 = document.getElementById('campoB');
const correto = "Esta correto!";
const incorreto = "O campo B precisa ser maior que o campo A";

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    if (parseInt(num1.value) < parseInt(num2.value)) { 
        mensagemCorreto = document.querySelector ('.correto');
        mensagemCorreto.innerHTML = correto;
        document.querySelector('.correto').style.display = 'block';
        document.querySelector('.incorreto').style.display = 'none';

    } else {
        mensagemIncorreto = document.querySelector ('.incorreto');
        mensagemIncorreto.innerHTML = incorreto;
        document.querySelector('.incorreto').style.display = 'block';
        document.querySelector('.correto').style.display = 'none';
    }
})
