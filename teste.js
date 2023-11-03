let media = 8
function mmedia(){
    let situacao=media
if (situacao < 5) {
  return console.log('Reprovado');
}else if(situacao>=5&&situacao<7){
  return console.log('REC');
}else {
     return console.log('APR');
}
}
mmedia()