// Vamos a uma proposta de solução do problema inicial (movimentação de peões e torres no xadrez)?
// Lembrando de pontos importantes definidos para facilitar:
// Foram considerados somente dois tipos de peça: Peão e Torre.
// Não foram consideradas a existência de peças inimigas, passíveis de serem capturadas.

// Primeiramente vamos definir alguns tipos e uma função auxiliar que checa se determinada lista contém outra lista:

type BoardColumn = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';
type BoardRow = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';
type BoardHouse = [BoardColumn, BoardRow];

const boardColumns: BoardColumn[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
const boardRows: BoardRow[] = ['1', '2', '3', '4', '5', '6', '7', '8'];

const isInList = (element: any, list: any[]) => {
    for (let e of list)
        if (element[0] == e[0] && element[1] == e[1]) return true;
    return false;
};

// Os tipos relacionados ao tabuleiro, BoardColum (coluna), BoardRow (linha) 
//    e BoardHouse (casa) são para auxiliar na representação das casas do tabuleiro de xadrez.

// Agora, vamos definir a estrutura (a classe) de uma peça de xadrez genérica:

abstract class Piece {
  protected _position: BoardHouse;
  abstract type: string;

  constructor(position: BoardHouse, protected board: Board) {
      this._position = position;
  };

  get position() { return this._position; }
  abstract get availableMoves(): BoardHouse[];

  move(newPosition: BoardHouse) {
      console.log(
          `MOVENDO ${this.type} DA CASA ${this._position} PARA A CASA ${newPosition}`
      );
      if (!isInList(newPosition, this.availableMoves)) return false;
      this._position = newPosition;
      return true;
  }
}

// Observe que a classe Piece (Peça) é uma classe abstrata. 
// Além disso, repare que o método availableMoves (obter movimentos disponíveis) é um método abstrato, 
//  pois cada tipo de peça se movimenta de uma forma diferente. OBS: availableMoves é um getter, 
//  mas a sintaxe de método abstrato pode ser utilizada com métodos normais também!

// Agora vamos à implementação do Peão:

class Pawn extends Piece {
  type = 'Peão';
  get availableMoves() {
      const column = this.position[0];
      const row = this.position[1];
      const rowIndex = boardRows.indexOf(row);
      if (rowIndex === 7)
          return [];

      const nextHouse: BoardHouse = [column, boardRows[rowIndex + 1]];
      if (isInList(nextHouse, this.board.occupiedHouses))
          return [];

      return [nextHouse];
  }
}

// A classe Pawn (Peão) implementa o método que é abstrato na classe Piece, availableMoves. É uma implementação bem simples, apenas checando se o peão já está na linha 8 ou se existe alguma outra peça em sua frente.

// Já a torre pode se movimentar bem mais que isso, e precisa de uma lógica muito mais complexa para checar os movimentos disponíveis:

class Root extends Piece {
  type = "Torre";
  get availableMoves() {
      const column = this.position[0];
      const columnIndex = boardColumns.indexOf(column);

      const row = this.position[1];
      const rowIndex = boardRows.indexOf(row);

      let availableHouses: BoardHouse[] = [];

      // Adiciona todas as casas abaixo
      for (let i = rowIndex - 1; i >= 0; i--) {
          const house: BoardHouse = [boardColumns[columnIndex], boardRows[i]];
          if (isInList(house, this.board.occupiedHouses)) break;
          availableHouses.push(house);
      }

      // Adiciona todas as casas acima
      for (let i = rowIndex + 1; i < 8; i++) {
          const house: BoardHouse = [boardColumns[columnIndex], boardRows[i]];
          if (isInList(house, this.board.occupiedHouses)) break;
          if (isInList(house, availableHouses)) continue;
          availableHouses.push(house);
      }

      // Adiciona todas as casas na direita
      for (let i = columnIndex + 1; i < 8; i++) {
          const house: BoardHouse = [boardColumns[i], boardRows[rowIndex]];
          if (isInList(house, this.board.occupiedHouses)) break;
          if (isInList(house, availableHouses)) continue;
          availableHouses.push(house);
      }

      // Adiciona todas as casas na esquerda
      for (let i = columnIndex - 1; i >= 0; i--) {
          const house: BoardHouse = [boardColumns[i], boardRows[rowIndex]];
          if (isInList(house, this.board.occupiedHouses)) break;
          if (isInList(house, availableHouses)) continue;
          availableHouses.push(house);
      }

      return availableHouses;
  }
}

// Há a checagem de todas as casas na esquerda e na direita, acima e abaixo, de forma a saber para quais a torre pode ir.

// Por último, mas não menos importante, temos o tabuleiro, já com duas peças de exemplo:

class Board {
  pieces: Piece[] = [];

  constructor() {
      this.addPiece(new Pawn(['C', '2'], this));
      this.addPiece(new Root(['F', '1'], this));
  }

  private addPiece(piece: Piece) {
      if (isInList(piece.position, this.occupiedHouses))
          return;
      this.pieces.push(piece);
  }
  get occupiedHouses() {
      return this.pieces.map((piece) => piece.position);
  }

}

// E aqui um exemplo de teste para você checar o funcionamento:

let piece: Piece;

const board = new Board();
console.log(board);

const logPieceInfo = (piece: Piece) => {
    console.log(
        `----------------------
Peça: ${piece.type}
Posição: ${piece.position}
Movimentos disponíveis: ${piece.availableMoves.map(
            (b) => "[" + b + "]")
        }
Posições ocupadas no tabuleiro: ${board.occupiedHouses}`
    );
};

piece = board.pieces[0];
logPieceInfo(piece);
piece.move(['C', '3']);

piece = board.pieces[1];
logPieceInfo(piece);
piece.move(['F', '3']);
logPieceInfo(piece);
piece.move(['A', '3']);
logPieceInfo(piece);

piece = board.pieces[0];
logPieceInfo(piece);
piece.move(['C', '4']);
logPieceInfo(piece);
piece.move(['C', '5']);
logPieceInfo(piece);
piece.move(['C', '6']);
logPieceInfo(piece);
piece.move(['C', '7']);
logPieceInfo(piece);
piece.move(['C', '8']);
logPieceInfo(piece);

/*
Saída:
<ref *1> Board {
  pieces: [
    Pawn { board: [Circular *1], _position: [Array], type: 'Peão' },
    Root { board: [Circular *1], _position: [Array], type: 'Torre' }
  ]
}
----------------------
Peça: Peão
Posição: C,2
Movimentos disponíveis: [C,3]
Posições ocupadas no tabuleiro: C,2,F,1
MOVENDO Peão DA CASA C,2 PARA A CASA C,3
----------------------
Peça: Torre
Posição: F,1
Movimentos disponíveis: [F,2],[F,3],[F,4],[F,5],[F,6],[F,7],[F,8],[G,1],[H,1],[E,1],[D,1],[C,1],[B,1],[A,1]
Posições ocupadas no tabuleiro: C,3,F,1
MOVENDO Torre DA CASA F,1 PARA A CASA F,3
----------------------
Peça: Torre
Posição: F,3
Movimentos disponíveis: [F,2],[F,1],[F,4],[F,5],[F,6],[F,7],[F,8],[G,3],[H,3],[E,3],[D,3]
Posições ocupadas no tabuleiro: C,3,F,3
MOVENDO Torre DA CASA F,3 PARA A CASA A,3
----------------------
Peça: Torre
Posição: F,3
Movimentos disponíveis: [F,2],[F,1],[F,4],[F,5],[F,6],[F,7],[F,8],[G,3],[H,3],[E,3],[D,3]
Posições ocupadas no tabuleiro: C,3,F,3
----------------------
Peça: Peão
Posição: C,3
Movimentos disponíveis: [C,4]
Posições ocupadas no tabuleiro: C,3,F,3
MOVENDO Peão DA CASA C,3 PARA A CASA C,4
----------------------
Peça: Peão
Posição: C,4
Movimentos disponíveis: [C,5]
Posições ocupadas no tabuleiro: C,4,F,3
MOVENDO Peão DA CASA C,4 PARA A CASA C,5
----------------------
Peça: Peão
Posição: C,5
Movimentos disponíveis: [C,6]
Posições ocupadas no tabuleiro: C,5,F,3
MOVENDO Peão DA CASA C,5 PARA A CASA C,6
----------------------
Peça: Peão
Posição: C,6
Movimentos disponíveis: [C,7]
Posições ocupadas no tabuleiro: C,6,F,3
MOVENDO Peão DA CASA C,6 PARA A CASA C,7
----------------------
Peça: Peão
Posição: C,7
Movimentos disponíveis: [C,8]
Posições ocupadas no tabuleiro: C,7,F,3
MOVENDO Peão DA CASA C,7 PARA A CASA C,8
----------------------
Peça: Peão
Posição: C,8
Movimentos disponíveis:
Posições ocupadas no tabuleiro: C,8,F,3
*/
