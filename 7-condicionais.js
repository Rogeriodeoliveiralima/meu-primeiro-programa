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



//remover

console.log(listaDeDestino);


if (idadeComprador >= 18) {
    console.log("Comprador maior de idadade");
    listaDeDestinos.splice(1, 1); // removendo item
}   else if (estaAcompanhada == true) {
    console.log("Comprador está acompanhado");
    listaDeDestinos.splice(1, 1); //removedo item
}else {
    console.log("Não é maior de idade e não posso vender");
}
