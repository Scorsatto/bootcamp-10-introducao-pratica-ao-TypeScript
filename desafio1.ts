/*
// Como podemos rodar isso em um arquivo .ts sem causar erros? 

let employee = {};
employee.code = 10;
employee.name = "John";
*/

// Resolução
interface  funcionario {
    codigo: number
    nome: string;
}

const funcionario1: funcionario ={
    codigo: 10,
    nome: "João"
}