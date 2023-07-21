const corpinhomaromba =  document.querySelector('body');

function modomorte() {
  let mano =  document.querySelector('#pq');
  corpinhomaromba.classList.toggle('fundo-branco')
  
  if (mano.innerText == "NÃO PRECISA FAZER ISSO") {
    mano.innerText = "por quê"}
  else {
    mano.innerText = "não precisa fazer isso"}}
