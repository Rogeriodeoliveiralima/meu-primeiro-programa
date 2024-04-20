console.log('Trabalhando com condicionais');
const idadeComprador = 33;
const estaAcompanhada = false;
const passagemComprada = true;

const listaDeDestino = new Array ('praiGrande', 'santos','saoVicente','cubatao');

console.log(listaDeDestino);

if(idadeComprador >= 18 || estaAcompanhada == true){
    listaDeDestino.splice(2,1);
    console.log ('Comprador maior de Idade');
    
}else {
    console.log(listaDeDestino);
    console.log('Não e maior de idade, Não posso vender a passagem');
}

console.log('Embarque: \n\n');

if(idadeComprador >= 18 && passagemComprada ){
    console.log('Boa Viagem');
}else{
    console.log('Voce nao pode embarcar');
}
   


    



