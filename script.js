// Seleciona todos os botões de pergunta
const faqQuestions = document.querySelectorAll(".faq-question")

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const parent = question.parentNode
    parent.classList.toggle("active")

    // Alterna o ícone entre "+" e "-"
    const icon = question.querySelector(".faq-icon")
    icon.textContent = parent.classList.contains("active") ? "−" : "+"
  })
})
