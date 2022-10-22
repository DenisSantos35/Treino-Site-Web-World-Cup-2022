const div = document.querySelector('#imagem');
const home = document.querySelector('#home');
const galeria = document.querySelector('#galeria');
const curiosidade = document.querySelector('#curiosidade');
const jogos = document.querySelector('#jogos');

const bancoImagens = ['IMAGEM/tacadomundo.png','IMAGEM/gana.png','IMAGEM/portugal.png','IMAGEM/espanha.png']
function getSair(){
    imagem.src = " ";
    div.appendChild(imagem);
}

home.addEventListener('mouseenter', function(){
    imagem = document.createElement('img')    
    imagem.src = bancoImagens[0];
    div.appendChild(imagem);
});
home.addEventListener('mouseleave', getSair);
curiosidade.addEventListener('mouseenter', function(){
    imagem = document.createElement('img')    
    imagem.src = bancoImagens[1];
    div.appendChild(imagem);
});
curiosidade.addEventListener('mouseleave', getSair);
jogos.addEventListener('mouseenter', function(){
    imagem = document.createElement('img')    
    imagem.src = bancoImagens[2];
    div.appendChild(imagem);
});
jogos.addEventListener('mouseleave', getSair);
galeria.addEventListener('mouseenter', function(){
    imagem = document.createElement('img')    
    imagem.src = bancoImagens[3];
    div.appendChild(imagem);
});
galeria.addEventListener('mouseleave', getSair);





