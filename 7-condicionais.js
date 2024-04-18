console.log('Trabalhando com condicionais');
const idadeComprador = 13;

const listaDeDestino = new Array ('praiGrande', 'santos','saoVicente','cubatao');

console.log(listaDeDestino);

if(idadeComprador >= 18){
    listaDeDestino.splice(2,1);
    console.log ('Comprador maior de Idade');
}else{
    console.log('Não e maior de idade, Não posso vender a passagem')
}



console.log(listaDeDestino);