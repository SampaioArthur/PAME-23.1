'use strict'
const prompt = require("prompt-sync")({ sigint: true })

class Cliente {
    constructor(ID, NomeCliente, Pets, Fidelizado) {
        this._ID = ID;
        this._NomeCliente = NomeCliente;
        this._Pets = Pets;
        this._Fidelizado = Fidelizado;
    }
    //Getter e Setter de ID
    get ID() {
        return this._ID;
    }
    set ID(NovoID) {
        this._ID = NovoID;
    }
    //Getter e Setter de Nome do Cliente
    get NomeCliente() {
        return this._NomeCliente;
    }
    set NomeCliente(NovoNomeCliente) {
        this._NomeCliente = NovoNomeCliente;
    }
    //Getter e Setter dos pets
    get Pets() {
        return this._Pets;
    }
    set Pets(NovosPets) {
        this._Pets = NovosPets;
    }
    //Getter e Setter de Fidelizado
    get Fidelizado() {
        return this._Fidelizado;
    }
    set Fidelizado(NovoFidelizado) {
        this.Fidelizado = NovoFidelizado
    }
}

class Funcionario {
    #Senha;

    constructor(IDF, NomeUsuario, Senha) {
        this._IDF = IDF;
        this._NomeUsuario = NomeUsuario;
        this.#Senha = Senha;
    }
    //Getter e Setter de IDF
    get IDF() {
        return this._IDF;
    }
    set IDF(NovoIDF) {
        this.IDF = NovoIDF;
    }
    //Getter e Setter para Nome de Usuário
    get NomeUsuario() {
        return this._NomeUsuario;
    }
    set NomeUsuario(NovoNomeUsuario) {
        this._NomeUsuario = NovoNomeUsuario;
    }
    //Getter e Setter para Senha
    get Senha() {
        return this.#Senha;
    }
    set Senha(NovaSenha) {
        this.#Senha = NovaSenha;
    }

}

class Animal {
    constructor(IDP, NomePet, NomeDono, Consultas) {
        this._IDP = IDP;
        this._NomePet = NomePet;
        this._NomeDono = NomeDono;
        this._Consultas = Consultas;
    }
    //Getter e Setter de IDP
    get IDP() {
        return this._IDP;
    }
    set IDP(NovoIDP) {
        this._IDP = NovoIDP;
    }
    //Getter e Setter de Nome do Pet
    get NomePet() {
        return this._NomePet;
    }
    set NomePet(NovoNomePet) {
        this._NomePet = NovoNomePet;
    }
    //Getter e Setter de Nome do Dono
    get NomeDono() {
        return this._NomeDono;
    }
    set NomeDono(NovoNomeDono) {
        this._NomeDono = NovoNomeDono;
    }
    //Getter e Setter de Consultas
    get Consultas() {
        return this._Consultas;
    }
    set Consultas(NovaConsulta) {
        this._Consultas = NovaConsulta
    }
}

class Consulta {
    constructor(IDC, NomeCliente, NomePet, NomeFuncionario, Status, DataConsulta) {
        this._IDC = IDC;
        this._NomeCliente = NomeCliente;
        this._NomePet = NomePet;
        this._NomeFuncionario = NomeFuncionario;
        this._Status = Status;
        this._DataConsulta = DataConsulta;
    }
    //Getter e Setter de IDC
    get IDC() {
        return this._IDC;
    }
    set IDC(NovoIDC) {
        this._IDC = NovoIDC;
    }
    //Getter e Setter de Nome do Cliente
    get NomeCliente() {
        return this._NomeCliente;
    }
    set NomeCliente(NovoNomeCliente) {
        this._NomeCliente = NovoNomeCliente;
    }
    //Getter e Setter de NomePet
    get NomePet() {
        return this._NomePet();
    }
    set NomePet(NovoNomePet) {
        this._NomePet = NovoNomePet
    }
    //Getter e Setter de Nome do Funcionário
    get NomeFuncionario() {
        return this._NomeFuncionario;
    }
    set NomeFuncionario(NovoNomeFuncionario) {
        this._NomeFuncionario = NovoNomeFuncionario;
    }
    //Getter e Setter de Status
    get Status() {
        return this._Status;
    }
    set Status(NovoStatus) {
        this._Status = NovoStatus;
    }
}
var ListaFuncionario = [];
var ListaCliente = [];

//function FuncionarioNaoLogado(TentativaUsuario, TentativaSenha,opcao){
function FuncionarioNaoLogado() {
    let opcao = prompt("Insira:\n1 para fazer o login;\n2 para criar cadastro;\n3 para sair do programa.\n")
    opcao = 0 + opcao
    //opcao= 0+ prompt("Insira:\n1 para fazer o login;\n2 para criar cadastro;\n3 para sair do programa.\n")
    while (opcao != 3) {
        if (opcao == 1) {
            process.stdout.write("Insira o Nome de Usuário:\n");
            TentativaUsuario = prompt();
            process.stdout.write("Insira a Senha:\n");
            TentativaSenha = prompt();
            for (var i = 0; i = length(ListaFuncionario); i++) {
                if ((TentativaUsuario == ListaFuncionario[i][1]) && (TentativaSenha == ListaFuncionario[i][2])) {
                    process.stdout.write("Usuário Logado!\n");
                }

            }
            if ((TentativaUsuario == ListaFuncionario[i][1]) && (TentativaSenha != ListaFuncionario[i][2])) {
                process.stdout.write("Senha Inválida.\n");
                TentativaSenha = prompt("Insira novamente sua senha:\n");

            }
            else if ((TentativaUsuario != ListaFuncionario[i][1]) && (TentativaSenha != ListaFuncionario[i][2])) {
                process.stdout.write("Usuário não cadastrado.\n")
            }

        }
        if (opcao == 2) {
            let IDFuncionario;
            let Username;
            let Password;
            process.stdout.write("Insira seu ID de Funcionario\n");
            IDFuncionario = prompt();
            process.stdout.write("Insira seu Nome de Usuario\n");
            Username = prompt();
            process.stdout.write("Insira sua Senha\n");
            Password = prompt();
            const funcionario = new Funcionario(IDFuncionario, Username, Password);
            ListaFuncionario = ListaFuncionario.push([funcionario.IDF, funcionario.NomeUsuario, funcionario.Senha]);
        }
    }
}

function FuncionarioLogado() {
    process.stdout.write("Insira:\n 1 para ver seus dados;\n 2 para modificar seus dados;\n 3 para ver a lista de clientes;\n 4 para ver a lista de pets;\n 5 para ver a lista de consultas;\n 6 para ver a lista de funcionários;\n 7 para marcar uma consulta;\n 8 para mudar o status da consulta;\n 9 para remover um cliente e seus pets do sistema;\n 10 para remover pet;\n 11 para cancelar consulta;\n 12 para remover funcionário e 13 para fazer logout.");
    let opcao = prompt();
    opcao = 0 + opcao;
    while (opcao != 13) {
        if (opcao == 1) {
            IDF = prompt("Insira aqui seu ID de funcionário:");
            for (var i = 0; i = length(ListaFuncionario); i++) {
                if (IDF == ListaFuncionario[i][0]) {
                    dados = ListaFuncionario[i][0];
                    console.log(dados);
                }
            }
        }
        if (opcao == 2) {
            IDF = prompt("Insira aqui seu ID de funcionário:");
            for (var i = 0; i = length(ListaFuncionario); i++) {
                if (IDF == ListaFuncionario[i][0]) {
                    ListaFuncionario[i][0] = prompt("Insira aqui seu ID de funcionário\n:");
                    ListaFuncionario[i][1] = prompt("Insira aqui seu Nome de Usuário\n: ");
                    ListaFuncionario[i][2] = prompt("Insira aqui sua Senha:");
                }
            }
        }
        if (opcao == 3) {

        }
    }

}
function main() {
    FuncionarioNaoLogado()
}
main()

console.log(1);
