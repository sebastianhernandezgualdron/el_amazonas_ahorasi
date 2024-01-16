import { Carousel } from "flowbite-react";
import React, { useState } from "react";
import banner1 from "../assets/main-illustration.png";
import banner2 from "../assets/illustration-2.png";
import play from "../assets/play.png";
import stars from "../assets/icons/star.svg";
import { useMediaQuery } from "react-responsive";
import VideoModal from "./VideoModal";

const Hero = () => {
  const theme = {
    root: {
      leftControl:
        "absolute top-0 left-0 flex h-full items-center justify-center px-4 focus:outline-none",
      rightControl:
        "absolute top-0 right-0 flex h-full items-center justify-center px-4 focus:outline-none",
    },
    indicators: {
      active: {
        off: "bg-gray-800/50 hover:bg-brandPrimary",
        on: "bg-brandPrimary",
      },
    },
    control: {
      base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-gray-15 dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
      icon: "h-5 w-5 text-brandPrimary dark:text-gray-800 sm:h-6 sm:w-6",
    },
  };
  const isSmallScreen = useMediaQuery({ query: "(max-width: 640px)" });

  return (
    <div className="bg-neutralSilver" id="inicio">
      <div className=" lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
        <Carousel
          className={`w-full mx-auto`}
          slideInterval={5000}
          theme={theme}
          indicators={!isSmallScreen}
        >
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12 sm:mb-80">
            <div className="md:w-auto md:mr-14 ">
              <img src={banner1} alt="" />
            </div>
            {/*PRIMER HERO TEXT*/}
            <div className="md:w-1/2 mx-11 md:ml-20 ">
              <h1 className="lg:text-6xl sm:text-[2rem]  font-semibold mb-4 text-neutralDGrey  leading-snug ">
                Gestión Empresarial: tu solución
                <span className="text-brandPrimary leading-snug">
                  {" "}
                  ERP Integral
                </span>
              </h1>
              <p className="text-neutralGrey text-base mb-8 ">
                Con características adaptadas a la legislación local,{" "}
                <span className="text-brandPrimary">Amaxonia </span>
                es tu aliado confiable para gestionar de manera eficiente y
                precisa los detalles fundamentales de tu negocio.
              </p>

              <div className="my-11 flex flex-wrap gap-5">
                <div className="flex items-center gap-2">
                  {Array(5)
                    .fill(1)
                    .map((_, index) => (
                      <img
                        src={stars}
                        key={index}
                        alt="star"
                        width={24}
                        height={24}
                      />
                    ))}
                </div>

                <p className="bold-16 lg:bold-20 font-semibold text-gray900">
                  2000+
                  <span className="regular-16 lg:regular-20 ml-1">
                    Buenas reseñas
                  </span>
                </p>
              </div>

              <div className="flex flex-col w-full gap-6 sm:flex-row">
                <button className="btn-primary hidden items-center sm:flex">
                  Cotizar
                </button>
                {/* PRUEBA DE VIDEO MODAL,
                      SEBASTIÁN POR FAVOR HAGALO BIEN Y METALE CARIÑO
                      UNAS ANIMACIONES BIEN CALIDOSAS NO ESTÁN DE MÁS, QUE FUNCIONA Y QUE TENGA ESTILOS BONITOS 
                      PORFI UWU */}
                <VideoModal videoId="dmesZbntajQ" />
              </div>
            </div>
          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div className="md:w-auto md:mr-14">
              <img src={banner2} alt="" />
            </div>
            {/* SEGUNDO HERO TEXT */}
            <div className="md:w-1/2 mx-11 md:ml-20 ">
              <h1 className="lg:text-[4rem] sm:text-[2rem]  font-semibold mb-4 text-neutralDGrey  leading-snug ">
                Transforma tu Facturación con{" "}
                <span className="text-brandPrimary leading-snug">
                  {" "}
                  Amaxonia
                </span>
              </h1>
              <p className="text-neutralGrey text-base mb-8 ">
                Con funciones diseñadas para cumplir con la legislación local,
                nuestra solución se convierte en tu aliado confiable. Simplifica
                la <span className="text-brandPrimary">gestión eficiente</span>{" "}
                y precisa de los detalles fundamentales de tu negocio,
                destacando en la facturación electrónica.
              </p>

              <div className="my-11 flex flex-wrap gap-5">
                <div className="flex items-center gap-2">
                  {Array(5)
                    .fill(1)
                    .map((_, index) => (
                      <img
                        src={stars}
                        key={index}
                        alt="star"
                        width={24}
                        height={24}
                      />
                    ))}
                </div>

                <p className="bold-16 lg:bold-20 font-semibold text-gray900">
                  2000+
                  <span className="regular-16 lg:regular-20 ml-1">
                    Buenas reseñas
                  </span>
                </p>
              </div>

              <div className="flex flex-col w-full gap-6 sm:flex-row">
                <button className="btn-primary hidden items-center sm:flex">
                  Cotizar
                </button>
                <button className="btn-secondary hidden items-center sm:flex">
                  <img src={play} alt="Icon" className="mr-2" />
                  Ver Video
                </button>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Hero;
