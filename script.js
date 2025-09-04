 const caixaPrincipal = document .querySelector (".caixa-principal");
 const caixaPerguntas = document.querySelector(".caixa-pergunta");
 const caixaAlternativas = document. querySelector(".caixa-alternativas")
 const caixaResultado = document. querySelector (".caixa-resultado");
 const textoResultado = document. querySelector(".texto-resultado");

 const perguntas = [ 
    {
        enunciado: "1-Qual das áreas provavelmente será mais impactada pela IA nos próximos 10 anos;",
        alternativa: [ 
        "A.agricultura",
        "B.fachineiro"
         ]
    },
]
[ 
{
    enunciado: "2-Qual desses é um risco ético importante no desenvolvimento de IAs poderosas;"
    alternativa: [ 
        "A.véis nos dados de treinamento",
        "B.baixa resolução de tela"
    ]
}
]
[ 
{ 
    enunciado: "3-Quais das profissões tem mais chance de se transformar profundamente com a IA;"
    altermativa: [ 
        "A.programador",
        "B.zelador"
    ]
}
]
[ 
{ 
    enunciado: "4-Uma das soluçẽs proposta para lidar com a automoção em massa é;"
    alternativa: [ 
        "A.renda básica universal",
        "B.aumento da carga horária de trabalho"
    ]
}
]

let atual = 0;
let perguntaAtual;

function mostraPergunta() { 
    perguntaAtual = perguntas [atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas(){ 
    for (const alternativa of perguntaAtual.alternativas){ 
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();