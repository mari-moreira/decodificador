//Atualiza o ano no rodapé
const atualizarRodape = () => {
  const getAnoAtual = () => new Date().getFullYear();
  document.querySelector("#ano-atual").textContent = getAnoAtual();
};
atualizarRodape();
