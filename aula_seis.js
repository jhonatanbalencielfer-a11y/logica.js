const prompt = require("prompt-sync")();

let saldo = 0;

function depositar() {
  let valor = parseFloat(prompt("Digite o valor do depósito: "));
  if (valor > 0) {
    saldo += valor;
    console.log(`Depósito de R$${valor.toFixed(2)} realizado com sucesso!`);
  } else {
    console.log("Valor inválido para depósito.");
  }
}

function sacar() {
  let valor = parseFloat(prompt("Digite o valor do saque: "));
  if (valor > 0 && valor <= saldo) {
    saldo -= valor;
    console.log(`Saque de R$${valor.toFixed(2)} realizado com sucesso!`);
  } else {
    console.log("Saldo insuficiente ou valor inválido.");
  }
}

function verSaldo() {
  console.log(`Seu saldo atual é: R$${saldo.toFixed(2)}`);
}

function menu() {
  let opcao;
  do {
    console.log("\n--- Banco Jhonatan ---");
    console.log("1 - Depositar");
    console.log("2 - Sacar");
    console.log("3 - Ver saldo");
    console.log("0 - Sair");

    opcao = prompt("Escolha uma opção: ");

    switch (opcao) {
      case "1":
        depositar();
        break;
      case "2":
        sacar();
        break;
      case "3":
        verSaldo();
        break;
      case "0":
        console.log("Saindo do sistema...");
        break;
      default:
        console.log("Opção inválida, tente novamente.");
    }
  } while (opcao !== "0");
}

menu();
