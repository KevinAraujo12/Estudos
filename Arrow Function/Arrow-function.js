/* Este código demonstra a diferença entre funções normais e arrow functions em JavaScript: */
/// --- As arrow functions oferecem uma sintaxe mais concisa e legível.
/// --- São ideais para funções simples que retornam um valor único.
/// --- A eliminação de palavras-chave e parênteses torna o código mais enxuto e claro.
/// --- É importante considerar as diferenças de comportamento, como o escopo do this, ao escolher entre funções normais e arrow functions em seus projetos. */

/////* Exemplo 1 *//////

// Função normal
function Subtracao(a,b) {
    return a - b;
}

// Arrow Function
const SubtracaoAF = (a,b) => a - b;



/////* Exemplo 2 *//////

// Função normal
function Somar2(a){
    return a + 2;
}

// Arrow Function
const Somar2AF = a => a - 2;



/////* Exemplo 3 *//////

// Função normal
function DiaDoMes(){
    return (new Date()).getDate();
}

// Arrow Function
const DiaDoMesAF = () => (new Date()).getDate();/*  */


/////* Exemplo 4 *//////

// Função normal
function SuperFuncao(a, b) { /* Funcao de exemplo que tenha mais de uma instrucao */
    let subtracao = a - b;
    subtracao = subtracao - 2;
    let DiaDoMes = (new Date()).getDate();
    return DiaDoMes;
}

// Arrow Function
const SuperFuncaoAF = (a, b) => {
    let subtracao = a - b;
    subtracao = subtracao - 2;
    let DiaDoMes = (new Date()).getDate();
    return DiaDoMes;
}
