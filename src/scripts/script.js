gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

ScrollSmoother.create({
  smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
  effects: true, // looks for data-speed and data-lag attributes on elements
  // smoothTouch: 0.1  much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
});

function animarPagina() {
  gsap.from(".hero", {
    opacity: 0,
  });

  gsap.from("picture", {
    y: -70,
    duration: 1,
  });

  gsap.fromTo(
    ".pessoinhas",
    {
      //solução pelo chat gpt pra arrumar a imagem que ficava fora de alinhamentop
      y: 70,
    },
    { y: 0, duration: 1 },
  );

  gsap.from(".cidades > div", {
    //especificar que quero usar todos os 'filhos' da div cidades
    y: 50,
    opacity: 0,
    duration: 1,
    filter: "blur (20px)",
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".cidades > div",
      start: "0% 80%",
      end: "100% 70%",
      scrub: true,
    },
  });

  gsap.from(".agradecimento > ul > li", {
    opacity: 0,
    x: 50,
    filter: "blur(20px)",
    stagger: 0.1,
    scrollTrigger: {
      trigger: "li",
      start: "0% 80%",
      end: "100% 50%",
      scrub: true,
    },
  });

  gsap.from("footer", {
    y: "-30%",
    scrollTrigger: {
      trigger: "footer",
      scrub: true,
      invalidadeOnRefresh: true,
      end: "100% 100%",
    },
  });

  const grupoTextoSplit = document.querySelectorAll(".textosplit"); //slecione tds elementos da pag q tem a clase do texto
  // animar cada elemento desse agrupamtneot - forEach

  grupoTextoSplit.forEach((textoUnicoSplit) => {
    const split = SplitText.create(textoUnicoSplit, {
      type: "lines, words, chars",
      mask: "lines",
    });

    gsap.from(split.chars, {
      y: 40,
      opacity: 0,
      duration: 0.3,
      stagger: 0.03,
      scrollTrigger: {
        trigger: textoUnicoSplit,
      },
    });
  });
} //precisa selecionar uma função - as animaçoes da pagina- para abrir após o preloader

const tl = gsap.timeline({
  onComplete() {
    animarPagina(); //apos preloadres finalizar animação, ele chama a pagina inicial. mantem as animaçoes da pagina.
    gsap.to("#preloader", {
      opacity: 0,
      display: "none",
    });
  },
});

tl.to("#preloader path", {
  duration: 1,
  strokeDashoffset: 0,
});
tl.to("#preloader path", {
  fill: "rgb(112, 1, 1)",
  duration: 0.5,
  strokeDashoffset: 0,
});

//SplitText.create(.textosplit, {
//  type: "lines, words, chars", //corta o texto em linhas, palavas e caracteres
// mask: "lines" //mascara o texto abaixo das linhas

// gsap.from(split.chars, {
//y: 40,
// opacity: 0,
//duration: .2,
//stagger: .5,
