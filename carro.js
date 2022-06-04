let xCarros = [500, 500, 500, 500, 500, 500];
let yCarros = [40, 95, 150, 210, 270, 318];
let velocidadeCarros = [2, 2.5, 3.2, 5, 3.3, 2.3];
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro(){
  for(let i = 0; i < imagemCarros.length; i++)
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);  
}

function movimentaCarro(){
  for(let i = 0; i < imagemCarros.length; i++)
    xCarros[i] -= velocidadeCarros[i];
}

function posicaoInicialCarros(){
  for(let i = 0; i < imagemCarros.length; i++){
    if(passouATela(xCarros[i])){
      xCarros[i] = 500;
    }
  }
}  

function passouATela(xCarro){
  return xCarro < -50;
}



