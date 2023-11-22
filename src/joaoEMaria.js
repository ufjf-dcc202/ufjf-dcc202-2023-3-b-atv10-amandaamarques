//define duas variáveis
let joao = 1;
let maria = 2;

// funções deJoaoParaMaria e deMariaParaJoao transferem todas as maçãs de uma pessoa para a outra
function deJoaoParaMaria(){
    maria += joao;
    joao = 0;
}

function deMariaParaJoao(){
    joao += maria;
    maria = 0;
}

// As funções getMaria e getJoao retornam o número atual de maçãs que Maria e João, respectivamente, possuem.

function getJoao(){
    return joao;
}

function getMaria(){
    return maria;
}

// As funções setMaria e setJoao permitem alterar o número de maçãs que Maria e João possuem.

function setJoao(m){
    joao = m;
}

function setMaria(m){
    maria = m;
}

