let currentIndex = 0; // Índice da imagem atual no carrossel

// Função para mover os slides do carrossel
function moveSlide(direction) {
  const slides = document.querySelectorAll('.carousel img');
  const totalSlides = slides.length;
  
  // Atualiza o índice da imagem atual com base na direção
  currentIndex += direction;
  
  // Garante que o índice fique dentro do intervalo
  if (currentIndex < 0) {
    currentIndex = totalSlides - 1; // Volta para a última imagem
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0; // Vai para a primeira imagem
  }
  
  // Ajusta a posição das imagens para mostrar a imagem correta
  const carousel = document.querySelector('.carousel');
  const offset = -currentIndex * 100; // Cada slide ocupa 100% da largura
  carousel.style.transform = `translateX(${offset}%)`;
}

// Função para mostrar o card "Sobre mim" ao clicar no botão
document.getElementById('about-btn').addEventListener('click', function(event) {
  event.stopPropagation(); // Impede que o clique se propague para o documento e feche o card imediatamente
  const aboutContainer = document.getElementById('about-container');
  
  // Alterna a visibilidade do card "Sobre mim"
  if (aboutContainer.style.display === 'none' || aboutContainer.style.display === '') {
    aboutContainer.style.display = 'flex'; // Mostra o card
    console.log("Card visível");
  } else {
    aboutContainer.style.display = 'none'; // Esconde o card
    console.log("Card escondido");
  }
});

// Função para fechar o card "Sobre mim" ao clicar fora dele
document.addEventListener('click', function(event) {
  const aboutContainer = document.getElementById('about-container');
  
  // Verifica se o clique foi fora do card
  if (!aboutContainer.contains(event.target) && aboutContainer.style.display === 'flex') {
    aboutContainer.style.display = 'none'; // Esconde o card
    console.log("Card fechado ao clicar fora");
  }
});
