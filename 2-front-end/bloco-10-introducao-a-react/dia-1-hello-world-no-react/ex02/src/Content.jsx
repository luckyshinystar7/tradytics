import React from "react";

const conteudos = [
  {
    conteudo: "High Order Functions",
    bloco: 8,
    status: "Aprendido",
  },
  {
    conteudo: "Composicao de Componentes",
    bloco: 11,
    status: "Aprendendo",
  },
  {
    conteudo: "Composicao de Estados",
    bloco: 12,
    status: "Aprenderei",
  },
  {
    conteudo: "Redux",
    bloco: 16,
    status: "Aprenderei",
  },
];

const createLi = (element, index) => {
  return (
    <li key={index}>
      O conteúdo é: {element.conteudo}<br></br>

      Status: {element.status}<br></br>

      Bloco: {element.bloco} <br></br><br></br>

    </li>
  );
};

class Content extends React.Component {
  render() {
    return <ul>{conteudos.map((value, index) => createLi(value, index))}</ul>;
  }
}

export default Content;
