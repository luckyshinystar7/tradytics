  /*
      Utilizando o mesmo código dos exercícios de fixação anteriores:
    4. Altere a visibilidade dos atributos definidos na classe Tv para private.
    5. Crie um método getter e um setter para o atributo _connectedTo, da classe Tv.
    • O setter deverá verificar se o valor definido está entre as conexões disponíveis (_connections) e:
        ◦ Em caso positivo, definir este valor para o atributo _connectedTo;
        ◦ Em caso negativo, imprimir no console a mensagem “Sorry, connection unavailable!”
    6. Defina um valor para o atributo _connectedTo por meio do método setter criado e imprima seu valor.
  */
 type ConnectionTypes = 'hdmi' | 'rca' | 'vga';

    class MyTv {
      private _brand: string;
      private _size: number;
      private _resolution: string;
      private _connections: ConnectionTypes[];
      private _connectedTo?: string;
    
      constructor (b: string, s:number, res: string, connections: ConnectionTypes[]) {
        this._brand = b;
        this._size = s;
        this._resolution = res;
        this._connections = connections;        
      }
    
      turnOn ():void {
        console.log(this._brand, this._size, this._resolution, this._connections);    
      }

      get connectedTo() {
        return this._connectedTo;
      }

      set connectedTo(myPort: string | undefined) {
        const myPortExists = this._connections.find((c) => c === myPort);
        if (myPortExists) {
          this._connectedTo = myPort;
          console.log('Conectado com sucesso!');          
        } else {console.log('Desculpe, conexão indisponível!');
        }
      }
    }
    
    const myOLED = new MyTv('LG OLED A1', 55, '4k', ['hdmi', 'rca']);
    console.log(myOLED.connectedTo = 'hdmi');
     