// EXEMPLO de Type Union
// A função abaixo pode receber tanto um número quanto uma string. 
function retornarCPF(cpf: number | string){ // variavel cpf ceita numero e também string
  console.log("Seu CPF é: " + cpf);
}

// 1. Crie um type union que represente os estados físicos da matéria: líquido, sólido ou gasoso.
type EstadoDaMateria = "líquido" | "sólido" | "gasoso";

// 2. Crie um type union que represente o documento identificador de uma pessoa que pode receber valores numéricos ou texto. Ex: “123.567.890-12” ou 123456789012.
type Rg = number | string;

// 3. Crie um type union que represente sistemas operacionais: linux, mac os ou windows.
type Os = "linux" | "max" | "windows";

// 4. Crie um type union que represente as vogais do alfabeto.
type Vogais = "a" | "e" | "i" | "o" | "u";