function sum(a, b) {
  return a + b;
}

//named export
//pode ter varias exports dentro de um
//mesmo arquivo
//só pode ser chamado com o mesmo nome
//import precisa das chaves { sub }
export function sub(a, b) {
  return a - b;
}

function mult(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

const PI = 3.14;

//Pode ser exportado separadamente
export { mult, div, PI };

//método principal
//só pode ter um default por arquivo
//importar com qualquer nome
//não precisa utilizar as chaves
export default sum;
