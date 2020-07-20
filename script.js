function gerarNumeros(){
    var quantidade = 0;
    var lista = [];
for(i = 0; i < 6; i++){
    var resultado = Math.floor(Math.random(quantidade)*61);
     lista.push(resultado);
}
return lista;
};

function sortear(){
    var campo =  document.getElementById('campo');
    campo.value = parseInt(gerarNumeros());
    var campo2 =  document.getElementById('campo2');
    campo2.value = parseInt(gerarNumeros());
    var campo3 =  document.getElementById('campo3');
    campo3.value = parseInt(gerarNumeros());
    var campo4 =  document.getElementById('campo4');
    campo4.value = parseInt(gerarNumeros());
    var campo5 =  document.getElementById('campo5');
    campo5.value = parseInt(gerarNumeros());
    var campo6 =  document.getElementById('campo6');
    campo6.value = parseInt(gerarNumeros());
    var campo7 =  document.getElementById('campo7');
    campo7.value = parseInt(gerarNumeros());
    var campo8 =  document.getElementById('campo8');
    campo8.value = parseInt(gerarNumeros());
    var campo9 =  document.getElementById('campo9');
    campo9.value = parseInt(gerarNumeros());
    var campo10 =  document.getElementById('campo10');
    campo10.value = parseInt(gerarNumeros());
    var campo10 =  document.getElementById('campo10');
    campo10.value = parseInt(gerarNumeros());
    var campo11 =  document.getElementById('campo11');
    campo11.value = parseInt(gerarNumeros());
    
    }

   function escolherMega(){
       let mega = document.getElementById('jogoMega');
       let quina = document.getElementById('jogoQuina');
      
       if(mega.classList.contains('mega')== true && quina.classList.contains('quina')== true){
           mega.classList.remove('mega');
           quina.classList.add('quina');
        }else{
            mega.classList.add('mega');
        }
        
   }

   function escolherQuina(){
       let quina = document.getElementById('jogoQuina');
       let mega = document.getElementById('jogoMega');
       if(quina.classList.contains('quina')==true && mega.classList.contains('mega') == true){
           quina.classList.remove('quina');
           
       }else{
        quina.classList.add('quina');
       }
   }

   //darkMode
   function modeOn(){
       var dark = document.getElementById('modeOn');
       var rodape = document.getElementById('teste');
       var cabecalho = document.getElementById('cabecalho');
       var chamada = document.getElementById('chamada');
       var container = document.getElementById('container');
       var mudar = document.getElementById('switcher');
       
       if(dark.checked ==true ){
           cabecalho.classList.add('dark');
           chamada.classList.add('dark');
           container.classList.add('dark');
           rodape.style.backgroundColor= '#1c1c1c';
           mudar.style.marginLeft = '-100px';
           mudar.classList.add('dark2');
          
       }else{
        cabecalho.classList.remove('dark');
        chamada.classList.remove('dark');
        container.classList.remove('dark');
        rodape.style.backgroundColor = 'rgba(233, 131, 10, 0.2)';
        mudar.style.marginLeft = '-50px';
        mudar.classList.remove('dark2');
       }
       
   };