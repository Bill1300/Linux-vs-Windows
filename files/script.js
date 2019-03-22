function atualizar(n_grafico) {
  if(n_grafico == 1){
    var iframe = document.getElementById('grafico1');
  }
  if(n_grafico == 2){
    var iframe = document.getElementById('grafico2');
  }
  iframe.src = iframe.src;
﻿