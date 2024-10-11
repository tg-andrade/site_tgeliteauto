let slideIndex = 0;
mostrarSlide(slideIndex);

function mudarSlide(n) {
    mostrarSlide(slideIndex += n);
}

function mostrarSlide(n) {
    let i;
    let slides = document.querySelectorAll('.slide');
    
    if (n >= slides.length) {
        slideIndex = 0;
    }
    
    if (n < 0) {
        slideIndex = slides.length - 1;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex].style.display = "block";
}

// Função para abrir o modal e mostrar a mensagem
function comprarProduto() {
    let modal = document.getElementById("modal-compra");
    modal.style.display = "block"; // Mostrar o modal
}

// Função para fechar o modal ao clicar no "X"
let span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    let modal = document.getElementById("modal-compra");
    modal.style.display = "none"; // Fechar o modal
}

// Fechar o modal ao clicar fora dele
window.onclick = function(event) {
    let modal = document.getElementById("modal-compra");
    if (event.target == modal) {
        modal.style.display = "none"; // Fechar o modal
    }
}
