import React, { useContext, useRef, useEffect, useState } from "react";
import "animate.css";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { LanguageContext } from "../../context/LanguageContext";

export const About = () => {
  const sectionRef = useRef(null);
  const favorites = useRef(null);
  const { isIntersecting } = useIntersectionObserver(sectionRef);
  const { isIntersecting: favoritesIntersect } =
    useIntersectionObserver(favorites);
  const { language } = useContext(LanguageContext);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (favoritesIntersect) {
      setHasAnimated(true);
    }
  }, [favoritesIntersect]);

  const interests = [
    {
      title: { EN: "Programming", ES: "Programación" },
      description: {
        EN: "A passion for coding and creating innovative software. With 8 years of experience, I've developed everything from web apps to automation tools.",
        ES: "Pasión por la programación y la creación de software innovador. Con 8 años de experiencia, he desarrollado desde aplicaciones web hasta herramientas de automatización.",
      },
      icon: "💻",
    },
    {
      title: { EN: "Cats", ES: "Gatos" },
      description: {
        EN: "Lover of our feline friends, their quirky behaviors, and the joy they bring into our lives. Proud cat parent and occasional cat whisperer.",
        ES: "Amante de nuestros amigos felinos, sus peculiares comportamientos y la alegría que traen a nuestras vidas. Orgulloso padre de gatos y ocasionalmente encantador de ellos.",
      },
      icon: "🐱",
    },
    {
      title: { EN: "Music Instruments", ES: "Instrumentos" },
      description: {
        EN: "A love for exploring various musical instruments, from guitars to keyboards, and the creativity they inspire. Music is my way of expressing emotions.",
        ES: "Me encanta explorar distintos instrumentos musicales, desde guitarras hasta teclados, y la creatividad que inspiran. La música es mi forma de expresar emociones.",
      },
      icon: "🎸",
    },
    {
      title: { EN: "Philosophy", ES: "Filosofía" },
      description: {
        EN: "A fascination with the big questions of life, exploring different perspectives, and seeking deeper understanding. Always ready for meaningful conversations about existence and purpose.",
        ES: "Fascinación por las grandes preguntas de la vida, exploración de diferentes perspectivas y búsqueda de una comprensión más profunda. Siempre dispuesto para tener conversaciones significativas sobre la existencia y el propósito.",
      },
      icon: "🤔",
    },
    {
      title: { EN: "Pickles", ES: "Pepinillos" },
      description: {
        EN: "A quirky enthusiasm for pickles, from classic dill to spicy varieties, and their perfect crunch in every bite.",
        ES: "Un entusiasmo peculiar por los pepinos, desde los clásicos con eneldo hasta las variedades picantes, y su textura crujiente perfecta en cada bocado.",
      },
      icon: "🥒",
    },
    {
      title: { EN: "Lumberjack", ES: "Lumberjack" },
      description: {
        EN: "I play this game in my free time, and I really enjoy it! The goal is to chop the tree by tapping or clicking on either side while avoiding the branches.",
        ES: "Juego al lumberjack en mi tiempo libre y lo disfruto mucho. El objetivo es cortar el árbol tocando o haciendo clic en cualquiera de los lados mientras evitas las ramas.",
      },
      icon: "🪓🪵",
    },
  ];

  return (
    <section ref={sectionRef} id="about" className="bg-gray-900 py-[5.5rem]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2
            className={`text-4xl md:text-5xl font-bold text-white mb-12 text-center ${
              isIntersecting
                ? "animate__animated animate__fadeInDown"
                : "opacity-0"
            }`}
          >
            {language === "EN" ? "About Me" : "Sobre Mí"}
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div
              className={
                isIntersecting
                  ? "animate__animated animate__fadeInLeft"
                  : "opacity-0"
              }
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                <img
                  src="/imgs/DangharTemplate_1732155419682.jpg"
                  alt="Dot Dager working"
                  className="relative rounded-lg w-full object-cover shadow-xl"
                />
              </div>
            </div>
            <div
              className={`space-y-6 ${
                isIntersecting
                  ? "animate__animated animate__fadeInRight"
                  : "opacity-0"
              }`}
            >
              <p className="text-xl text-gray-200 leading-relaxed">
                {language === "EN"
                  ? "I'm Mariano Villa, but you might know me as"
                  : "Soy Mariano Villa, pero tal vez me conoces como"}{" "}
                <span className="text-blue-500 font-semibold">Dot Dager</span>.{" "}
                {language === "EN"
                  ? "As a content creator fueled by insatiable curiosity, I love exploring new ideas and sharing them with my subscribers, often through my bad jokes and unique perspective."
                  : "Como creador de contenido impulsado por una curiosidad insaciable, me encanta explorar nuevas ideas y compartirlas con mis suscriptores, a menudo a través de mis malos chistes y mi perspectiva única."}
              </p>
              <p className="text-gray-300">
                {language === "EN"
                  ? "When I'm not coding or creating content, you'll find me exploring new technologies, playing with my cats, or philosophizing about the universe while enjoying a good pickle. My interests are:"
                  : "Cuando no estoy programando o creando contenido, me encontrarás explorando nuevas tecnologías, jugando con mis gatos o filosofando sobre el universo mientras disfruto de un buen pepinillo. Mis mayores intereses son:"}
              </p>
            </div>
          </div>

          <div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            ref={favorites}
          >
            {interests.map((interest, i) => (
              <div
                key={interest.title.EN}
                className={`bg-gray-800 p-6 rounded-lg transform hover:-translate-y-1 transition-all duration-300 hover:shadow-xl ${
                  hasAnimated
                    ? ""
                    : favoritesIntersect
                    ? `animate__animated animate__fadeInUp animate__delay-${i}s`
                    : "opacity-0"
                }`}
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{interest.icon}</span>
                  <h3 className="text-xl font-semibold text-white">
                    {interest.title[language] || interest.title.EN}
                  </h3>
                </div>
                {interest.title.EN === "Lumberjack" ? (
                  <div className="grid grid-cols-3 gap-4 items-center">
                    <div className="col-span-2">
                      <p className="text-gray-400 leading-relaxed">
                        {interest.description[language]}
                      </p>
                    </div>
                    <div className="flex justify-center col-span-1">
                      <img
                        src="/imgs/ezgif-4-c7d0bee5b2.gif"
                        alt="Lumberjack game"
                        className="rounded-md w-full max-w-[100px] object-contain"
                      />
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-400 leading-relaxed">
                    {interest.description[language]}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
