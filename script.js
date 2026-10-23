let cliques = 0;

const contador = document.getElementById("contador");
const mensagem = document.getElementById("mensagem");
const adicionar = document.getElementById("adicionar");
const resetar = document.getElementById("resetar");
const diminuir = document.getElementById("diminuir");
function atualizarTela() {
  contador.textContent = cliques;

  if (cliques === 0) {
    mensagem.textContent = "Você ainda não clicou. Comece agora!";
  } else if (cliques === 1) {
    mensagem.textContent = "Você deu seu primeiro clique!";
  } else {
    mensagem.textContent = `Você já clicou ${cliques} vezes. Continue!`;
  }
}

adicionar.addEventListener("click", () => {
  cliques++;
  atualizarTela();

});

resetar.addEventListener("click", () => {
  cliques = 0;
  atualizarTela();
});
diminuir.addEventListener("click", () => {
  if (cliques > 0) {
    cliques--;
    atualizarTela();
  }
});

