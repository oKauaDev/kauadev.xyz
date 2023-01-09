export default function typewriter(selector) {
  const element = document.querySelector(selector);

  function write() {
    // Por algum motivo a concatenação com espaço não estava pegando, então dei replace em um caractere invisível.
    const text = element.innerText.replace(/\s/g, "ㅤ").split("");
    element.innerText = "";
    text.forEach((letter, index) => {
      setTimeout(() => {
        element.innerText += letter;
      }, index * 75);
    });
  }

  return {
    write,
  };
}
