// Define o nome do arquivo TXT com os códigos hexadecimais
const arquivoCores = "../cores.txt";

// Faz uma requisição AJAX para ler o arquivo de texto com as cores
let xhr = new XMLHttpRequest();
xhr.open('GET', arquivoCores, true);
xhr.onload = function () {
    if (this.status == 200) {
        let cores = this.responseText.split('\n');
        console.log(cores[1])
        let container = document.querySelector('.container');
        let box = document.createElement('div');
        box.classList.add('box');
        for (let i = 0; i < cores.length; i++) {
            if (i % 5 === 0) {
                //container.appendChild(document.createElement('br'));
            }
            box.innerText = cores[i];
            box.style.backgroundColor = cores[i].trim();
            container.appendChild(box.cloneNode(true));

        }
    }
}
xhr.send();