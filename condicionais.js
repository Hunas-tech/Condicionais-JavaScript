//exercicio-1

let nota1 = 9;
let nota2 = 6;
let nota3  = 8;
let media =  (nota1 + nota2 + nota3) / 3;

if (media >= 6) {

    console.log('Aprovado parabéns : Média' + media)

} else {
    
    console.log('Reprovado, está de  recuperação : Média' + media)

}


//exercicio-2

let idade = 67;

if (idade >= 16) {

    console.log("Você tem idade suficiente para estudar aqui")

} else {

    console.log("Você não tem idade suficiente para estudar aqui")

}


//exercicio-3

let valorMaterial = 99; 
let valorFinal = valorMaterial > 50 ? valorMaterial * 0.90 : valorMaterial;

console.log(`O valor final a ser pago é: R$ ${valorFinal}`);


//exercicio-4

let presença = 88 ;
 
if (presença >=75) {

    console.log("Aprovado");

} else {
    
    console.log("Reprovado");
}


//exercicio-5

let turno = "V"

if (turno === "V") {
    console.log("Turno vespertino")
}
else if  (turno === "M") {

    console.log("Turno  matutino")

} else if (turno === "N"){

    console.log("Turno Noturno")

}else {
   
    console.log("Insira um turno valido")

}


//exercicio-6

let nota5= 5;
let nota6 = 4;
let nota7 = 10;

let media1 = (nota1 + nota2 + nota3) / 3;

if (nota5 < 4 || nota6 < 4 || nota7 < 4) {

    console.log("Reprovou");

} else if (media1 >= 6) {

    console.log("Passou direto");

} else {

    console.log("Ficou de recuperação");

}


//exercicio-7

let estoque = 11;
let estoqueMinimo = 10;

if(estoque  < estoqueMinimo){
    console.log("Preencha o estoque")
}else {
    console.log("O estoque está preenchido ainda")
}


//exercicio-8

let rendimento = 2;

if (rendimento >= 8) {
    console.log("Excelente");
} else if (rendimento >= 6 && rendimento <= 7.9) {
    console.log("Bom");
} else {
    console.log("Melhore");
}


//exercicio-9

let matricula = "Matriculado";
let curso = 1050;
let desconto = curso *0.20;
if (matricula ==="Matriculado"){

    console.log(`O valor do curso será ${curso-desconto}R$`);

} else {
    (console.log(`O valor do curso será ${curso}R$`))
};


//exercicio-10

let funcionalidade = 7;
if (funcionalidade >=8){
    console.log("A funcionalidade está boa")
}
else if (funcionalidade >= 6 && funcionalidade <= 7.9){
    console.log("A funcionalidade está boa");
} else {(console.log("A funcionalidade precisa melhorar"))};

// Design

let desing = 6;
if (desing >=8){
    console.log("O desing está excelente");
}
else if (desing >= 6 && desing <= 7.9){
    console.log("O desing está bom");
} else {(console.log("A funcionalidade precisa melhorar"))};

// Documentação

let documentação = 2;
if (documentação >=8){
    console.log("A documentação está excelente");
}
else if (documentação >= 6 && documentação <= 7.9){
    console.log("A documentação está boa");
} else {(console.log("A documentação precisa melhorar"))};


//exercicio-11  

let presença1 = 74;
if (presença1 >=75){
    console.log("Aprovado")
}else {
    console.log("Tente denovo o ano que vem!");
}let notas1 = 1;
let notas2 = 3;
let notas3 = 6.3;
let divisão = (notas1 + notas2 + notas3) /3;
if( divisão >= 6) {
    console.log("Parabéns, boas notas");
} else {console.log("Estude mais e se dedique da próxima vez")};


//exercicio-12

let acesso = "Cartão invalido";
if (acesso === "Cartão válido") {
    console.log("Acesso liberado");
} else {
    console.log("Acesso negado");
}


//exercicio-13

let escola = 50
if(escola <70){
    console.log("Recursos necessários");
}else {(console.log("Retire seus recursos no estoque!"))}


//exercicio-14

let disciplina = "obrigatória";
let vagasDisponiveis = true;

if (disciplina === "obrigatória") {
    console.log("Você está em uma disciplina obrigatória.");
} else if (disciplina === "eletiva") {
    if (vagasDisponiveis) {
        console.log("Você está em uma disciplina eletiva.");
    } else {
        console.log("Você está na lista de espera para a disciplina eletiva.");
    }
} else {
    console.log("Opção inválida. Por favor, escolha entre obrigatória ou eletiva.");
}

//exercicio-15

let prova1 = 7;
let prova2 = 8;
let prova3 = 5;

const media2 = (prova1 + prova2 + prova3) / 3;

if (media >= 6) {
    console.log("Você passou!");
    if (media > 8) {
        console.log("Excelente desempenho!");
    }
} else if (media >= 4) {
    console.log("Você ficou de recuperação.");
} else {
    console.log("Você foi reprovado.");
}


//exercicio-16

let infrações = [5, 3, 7];
let totalPontos = 8;

for (const pontos of infrações) {
    totalPontos += pontos;
}

if (totalPontos >= 20) {
    console.log("Sua carteira de motorista está suspensa bobão.");
} else {
    console.log(`Você ainda pode acumular ${20 - totalPontos} pontos.`);
}


//exercicio-17

let valorEmprestimo = 15000;
let numeroParcelas = 12;
let taxaJuros = 0.05;

let valorTotal1 = valorEmprestimo * Math.pow(1 + taxaJuros, numeroParcelas);
console.log(`O valor total a ser pago ao final do empréstimo é: R$ ${valorTotal1.toFixed(2)}`);


//exercicio-18

let prova4 = 6;
let prova5 = 7;
let prova6 = 8;
const atividadesExtras = true;

let media3 = (prova1 + prova2 + prova3) / 3;

if (atividadesExtras) {
    media3 *= 1.05;
}

if (media3 >= 6) {
    console.log("Você passou!");
} else if (media3 >= 4) {
    console.log("Você ficou de recuperação.");
} else {
    console.log("Você foi reprovado.");
}


//exercicio-19

let qualidade = 9;
let preco = 45;

let classificacao;

if (qualidade >= 8 && preco < 50) {
    classificacao = "Ótimo Custo-Benefício";
} else if (qualidade >= 6) {
    classificacao = "Bom";
} else if (qualidade >= 4) {
    classificacao = "Regular";
} else {
    classificacao = "Ruim";
}

console.log(`Classificação do produto: ${classificacao}`);


//exercicio-20

let nota10 = 6;
let nota11 = 7;
let nota12 = 5;

let somaMedia =  (nota1 + nota2 + nota3) / 3;

if (somaMedia >=6) {
    console.log("Aprovado");
} else  { 
    console.log("Reprovado");
    }