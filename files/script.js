function atualizar(valor) {
  //tabela-dados
  if(valor == 0){
    var iframe = document.getElementById('tabela-dados');
  }
  if(valor == 1){
    var iframe = document.getElementById('grafico1');
  }
  iframe.src = iframe.src;
}
