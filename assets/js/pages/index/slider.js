const cards = document.querySelectorAll('.card')
const nextBtn = document.querySelector('.caret-right')
const prevBtn = document.querySelector('.caret-left')

const subtitle = document.getElementById('subtitle');
const title = document.getElementById('title');
const about = document.getElementById('about');

let current = 0;

const slidesText = [
    {
        subtitle: "33",
        title: "GUSTAVE",
        about: "Gustave cresceu sentindo-se sufocado pela presença constante da Pintora sobre Lumière. Como engenheiro, ele dedicou sua vida à defesa e aos sistemas agrícolas da cidade, esforçando-se para proteger e sustentar seu povo. Agora, como Expedicionário, ele dedica seu último ano de vida a derrotar a Pintora e recuperar um futuro para os filhos de Lumière."
    },
    {
        subtitle: "33",
        title: "MAELLE",
        about: "Órfã aos 3 anos, Maelle nunca se sentiu em casa em Lumière. Ela tem dificuldade em se conectar e confiar nos outros, mas aprendeu a valorizar seu irmão adotivo, Gustave. Aos 16 anos, Maelle é significativamente mais jovem que os outros Expedicionários. Ao contrário deles, ela vê a Expedição como sua chance de explorar o mundo além de Lumière e, finalmente, forjar seu próprio destino."
    },
    {
        subtitle: "33",
        title: "LUNE",
        about: "Filha de pesquisadores renomados, Lune tem uma profunda sede de conhecimento e sacrificou tudo para concluir o trabalho de seus pais. Seu único objetivo é desvendar o mistério da Pintora. Encarregada de traçar o caminho da Expedição, Lune sente profundamente o peso da responsabilidade e os riscos envolvidos. Ela não pode e não permitirá que a Expedição fracasse."
    },
    {
        subtitle: "33",
        title: "SCIEL",
        about: "Fazendeira que virou professora, Sciel é afetuosa e extrovertida, curtindo a vida dia após dia. Ela se sente à vontade com a morte, tendo aceitado há muito tempo a brutalidade do mundo deles. Mas seu sorriso provocador mascara um passado sombrio e doloroso. Embora profundamente comprometida com a Expedição, ela não se incomoda com o espectro do fracasso. Eles farão tudo o que estiver ao seu alcance, e ou será o suficiente, ou não."
    },
    {
        subtitle: "00",
        title: "MONOCO",
        about: "Monoco é um Gestral, um grupo de seres amigáveis ​​que gostam da emoção da batalha e veem a competição como uma forma de meditação. Como um dos poucos Gestrais que falam a língua humana, Monoco adotou um comportamento acadêmico que esconde um espírito sanguinário. Embora os Gestrais não sejam afetados pela Pintora, a perspectiva de combate atrai Monoco a se juntar à Expedição."
    },
    {
        subtitle: "00",
        title: "VERSO",
        about: "Verso é um forasteiro de origem desconhecida que acompanha de perto a Expedição..."
    },
];

function updateCards() {
    cards.forEach((card, i) => {
        card.classList.remove('active', 'next', 'prev');
        if (i === current) {
            card.classList.add('active');
        } else if (i === (current + 1) % cards.length) {
            card.classList.add('next');
        } else if (i === (current - 1 + cards.length) % cards.length) {
            card.classList.add('prev');
        }
    });

    setTimeout(() => {
        subtitle.textContent = slidesText[current].subtitle;
        title.textContent = slidesText[current].title;
        about.textContent = slidesText[current].about;
    }, 250);
}

function animateText() {
    [subtitle, title, about].forEach(el => {
        el.classList.remove('show');
    });

    setTimeout(() => {
        [subtitle, title, about].forEach(el => {
            el.classList.add('show');
        });
    }, 300);
}

nextBtn.addEventListener('click', () => {
    current = (current + 1) % cards.length;
    updateCards();
    animateText();
});

prevBtn.addEventListener('click', () => {
    current = (current - 1 + cards.length) % cards.length;
    updateCards();
    animateText();
});

updateCards();
animateText();