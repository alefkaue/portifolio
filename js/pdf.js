// Seleciona o botão "Resumo" e o modal
const resumeBtn = document.getElementById('resume-btn');
const pdfModal = document.getElementById('pdf-modal');
const closePdfModal = document.getElementById('close-pdf-modal');

// Função para abrir o modal de PDF
resumeBtn.addEventListener('click', () => {
  pdfModal.style.display = 'flex'; // Torna o modal visível
});

// Função para fechar o modal de PDF
closePdfModal.addEventListener('click', () => {
  pdfModal.style.display = 'none'; // Fecha o modal
});

// Fecha o modal se o clique for fora dele
document.addEventListener('click', (event) => {
  if (!pdfModal.contains(event.target) && event.target !== resumeBtn) {
    pdfModal.style.display = 'none'; // Fecha o modal
  }
});
