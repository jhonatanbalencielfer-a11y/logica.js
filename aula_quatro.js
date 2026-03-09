const prompt = requeri ("prompt-sync")();

let carro = {
    Marca = prompt( "Digite a marca do carro" )
    Modelo = prompt( " Digite a marca do carro" )
    ano = prompt ( "Digite o ano do carro " )
    cor = prompt ( "Digite a cor do carro" )
};
console.log("\n--- Dados do carro ---");
for (let chave in carro) {
  console.log(`${chave}: ${carro[chave]}`);
}