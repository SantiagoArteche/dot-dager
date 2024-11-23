import React, { useContext } from "react";
import "animate.css";
import { LanguageContext } from "../../context/LanguageContext";

export const Welcome = () => {
  const { language } = useContext(LanguageContext);
  return (
    <section className="mx-auto px-4 sm:px-6 lg:px-12 pt-16 bg-gray-800">
      <div className="grid lg:grid-cols-2 gap-6 py-8 md:py-12 min-h-[calc(100vh-4rem)]">
        <div className="flex flex-col justify-center space-y-4 animate__animated animate__fadeInUp animate">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl text-white animate__animated animate__fadeIn animate">
              {language == "EN" ? "Welcome to" : "Bienvenido a"}
              <span className="text-blue-500"> Dot Dager</span>
            </h1>
            <p className="max-w-[600px] text-gray-200 md:text-xl animate__animated animate__fadeIn animate__delay-1s">
              {language == "EN"
                ? `Hi, I'm Mariano, also known as Dot Dager 🚀. A content creator and
              programmer with 8 years of experience, passionate about coding,
              cats, guitars, pickles, and philosophy.`
                : `Hola, soy Mariano, también conocido como Dot Dager 🚀. Creador de contenido y
                programador con 8 años de experiencia, apasionado por la codificación,
              los gatos, las guitarras, los pepinillos y la filosofía.`}
            </p>
          </div>
          <div className="space-y-2 animate__animated animate__fadeIn animate__delay-1s">
            <p className="text-gray-300 md:text-[1.05rem] max-w-[850px]">
              {language == "EN"
                ? `This space is a little window into my world where creativity meets
              curiosity. Feel free to explore, get inspired, or just hang out
              for a bit.`
                : `Este espacio es una pequeña ventana a mi mundo, donde la creatividad se encuentra con la curiosidad. Siéntete libre de explorar, inspirarte o simplemente pasar el rato.`}
            </p>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg shadow-lg animate__animated animate__zoomIn animate">
          <img
            src="/imgs/Screenshot 2024-06-22 17-50-49_1732155516222.jpg"
            alt="Profile showcase"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};
