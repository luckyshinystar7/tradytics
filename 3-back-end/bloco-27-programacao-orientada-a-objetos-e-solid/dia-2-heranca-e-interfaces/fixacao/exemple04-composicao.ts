// A ideia de herança é muito boa para reuso de código. Entretanto, deve-se tomar cuidado com uso indevido.
// Utilizamos herança sempre que queremos especializar uma classe, ou seja, deixá-la mais específica. Basta se perguntar se subclasse é um tipo de superclasse: se a resposta for não, então não devemos utilizar herança.
// Por exemplo, imagine a classe (ou classe abstrata/interface) Database (banco de dados). Faz sentido que uma classe chamada MySQLDatabase herde (ou implemente) Database, visto que MySQLDatabase é um tipo de Database.
// Agora imagine que você possui, no contexto de um jogo de xadrez, um tabuleiro e as peças em suas posições. Além disso, lhe é solicitado que o tabuleiro tenha um método save, que o salva em um banco de dados. Não faz sentido que a classe Board (tabuleiro) (nem a classe ChessBoard, tabuleiro de xadrez) herde da classe Database, visto que um tabuleiro não é um tipo de banco de dados. O correto neste caso seria utilizar composição de classes, que é reunir todos os tipos de objetos que você precisa em uma mesma classe ao invés de fazer herança:

interface Board {
  save(): void;
  // ...
}

// Aqui vamos compor a classe com o nosso Database: passamos um objeto
// do tipo Database para o construtor da classe.
class GenericBoard implements Board {
  // Finja que faz sentido as casas do tabuleiro serem um array de strings
  constructor(public houses: string[], protected database: Database) {}

  public save() {
    this.database.save(this.houses);
  }
}

class ChessBoard extends GenericBoard {
  constructor(
    public houses: string[],
    protected database: Database,
    // Parâmetros específicos de um tabuleiro de xadrez
  ) {
    // Implementação específica de um tabuleiro de xadrez
  }
}

interface Database {
  save(content: any): void;
  // ...
}

class MySQLDatabase implements Database {
  private connection: MySQLConnection; // Uma conexão fictícia com o banco
  // ...
  save(content: any) {
    // Uma query fictícia para salvar o conteúdo no banco
    this.connection.query(`INSERT INTO table_name VALUES (${content})`);
  }
}

const db = new MySQLDatabase();
const board = new ChessBoard(['A1', 'A2', 'B1', 'B2'], db);
board.save();