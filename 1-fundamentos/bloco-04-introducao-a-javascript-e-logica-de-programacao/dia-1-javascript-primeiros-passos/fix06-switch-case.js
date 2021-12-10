const situacao = "aprovada";

switch (situacao) {
  case "aprovada":
    console.log("Parabéns, você passou!");
    break;

  case "lista":
    console.log("Você está na lista de espera!");
    break;

  case "reprovada":
    console.log("Você foi reprovado.");
    break;

  default:
    console.log("Error 404. Tente novamente mais tarde.");
}
