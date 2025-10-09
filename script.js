 const caixaPrincipal = document .querySelector (".caixa-principal");
 const caixaPerguntas = document.querySelector(".caixa-pergunta");
 const caixaAlternativas = document. querySelector(".caixa-alternativas")
 const caixaResultado = document. querySelector (".caixa-resultado");
 const textoResultado = document. querySelector(".texto-resultado");

 const perguntas = [ 
    {
        enunciado: "1-Qual das áreas provavelmente será mais impactada pela IA nos próximos 10 anos;",
        alternativa: [ 
        "agricultura",
        "fachineiro"
         ]
    }, 
{
    enunciado: "2-Qual desses é um risco ético importante no desenvolvimento de IAs poderosas;"
    alternativa: [ 
        "véis nos dados de treinamento",
        "baixa resolução de tela"
    ]
},
{ 
    enunciado: "3-Quais das profissões tem mais chance de se transformar profundamente com a IA;"
    alternativa: [ 
        "programador",
        "zelador"
    ]
},
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
let historiafinal= "";

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
function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacoes;
    historiafinal+= afirmacoes+ " ";
    atual++;
    mostraPergunta();
}
function mostraResultado() {
    caixaPerguntas.textContent = " A Inteligência Artificial (IA) refere-se à capacidade de máquinas ou sistemas computacionais realizarem tarefas que normalmente exigem inteligência humana. Isso inclui raciocínio, aprendizagem, resolução de problemas, tomada de decisões, compreensão da linguagem e reconhecimento de padrões. "
textoResultado.textContent = historiafinal;
caixaAlternativas.textContent = "";
}
    mostraPergunta();