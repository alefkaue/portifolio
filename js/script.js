// Função para exibir a seção ao rolar até ela
function handleScroll() {
  const scrollSection = document.getElementById('scroll-section');
  const sectionTop = scrollSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  // Quando a seção estiver visível na tela
  if (sectionTop < windowHeight) {
    scrollSection.classList.add('visible');
  }
}

// Monitorando o evento de rolagem
window.addEventListener('scroll', handleScroll);

// Exibindo a seção ao carregar a página (caso já esteja visível no carregamento inicial)
document.addEventListener('DOMContentLoaded', handleScroll);

// Carrossel - animação para mover as imagens
const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');

// Configuração para animação do carrossel (move a cada 5 segundos)
let currentIndex = 0;
const moveCarousel = () => {
  currentIndex++;
  if (currentIndex >= items.length) {
    currentIndex = 0;
  }
  
  // Calcula a posição de transição
  const offset = -currentIndex * 100;
  carousel.style.transform = `translateX(${offset}%)`;
};

setInterval(moveCarousel, 5000); // A cada 5 segundos (5000ms)

// Mostrar o "Sobre Mim" quando o botão for clicado
const aboutBtn = document.getElementById('about-btn');
const aboutContainer = document.getElementById('about-container');
const closeAbout = document.createElement('span');
closeAbout.innerText = 'X';
closeAbout.classList.add('close-btn');

// Adicionando o botão de fechar ao quadrado
aboutContainer.appendChild(closeAbout);

// Evento para abrir o quadrado "Sobre Mim"
aboutBtn.addEventListener('click', () => {
  aboutContainer.style.display = 'flex'; // Mostra o quadrado
});

// Evento para fechar o quadrado "Sobre Mim"
closeAbout.addEventListener('click', () => {
  aboutContainer.style.display = 'none'; // Esconde o quadrado
});

// Abrir o PDF modal (opcional, caso deseje uma função para abrir um modal de PDF)
const openPDFModal = (url) => {
  const pdfModal = document.getElementById('pdf-modal');
  const pdfIframe = document.createElement('iframe');
  
  pdfIframe.src = url;
  pdfIframe.style.width = '100%';
  pdfIframe.style.height = '100%';
  pdfModal.innerHTML = ''; // Limpa conteúdo anterior
  pdfModal.appendChild(pdfIframe);
  pdfModal.style.display = 'flex'; // Mostra o modal
};

// Fechar o PDF modal
const closePDFModal = () => {
  const pdfModal = document.getElementById('pdf-modal');
  pdfModal.style.display = 'none'; // Esconde o modal
};

// Adicionando evento para fechar o modal de PDF
document.querySelector('.close-btn').addEventListener('click', closePDFModal);
