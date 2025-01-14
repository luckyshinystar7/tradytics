// Utilizando o que você já aprendeu até aqui, faça o seguinte exercício:
//     1. Crie uma classe chamada Tv, com os atributos:
//     • brand: marca da TV;
//     • size: tamanho em polegadas;
//     • resolution: resolução da tela;
//     • connections: conexões disponíveis(HDMI, Ethernet, etc.);
//     • connectedTo: conexão atual Este atributo não precisa ser inicializado no construtor.
//     2. Dentro da classe Tv, crie o método turnOn, que imprimirá os atributos inicializados no construtor.
//     3. Instancie um objeto a partir da classe Tv, chame o método turnOn para imprimir seus atributos.

class Tv {
  brand: string;
  size: number;
  resolution: string;
  connections: string;
  connectedTo?: string;

  constructor (b: string, s:number, res: string, connections: string) {
    this.brand = b;
    this.size = s;
    this.resolution = res;
    this.connections = connections; 
  }

  turnOn ():void {
    console.log(this.brand, this.size, this.resolution, this.connections);    
  }
}

const minhaOLED = new Tv('LG OLED A1', 55, '4k', '4x hdmi');
minhaOLED.turnOn();
