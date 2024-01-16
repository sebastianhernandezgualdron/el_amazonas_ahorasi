import React from "react";
import { Footer, Label, TextInput } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";
import logo from "../assets/icono-footer.png";

const MyFooter = () => {
  return (
    <footer className="bg-brandPrimary text-white">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto py-12">
        <div className="grid w-full justify-between gap-8 sm:flex sm:items-start sm:justify-between md:flex md:grid-cols-1">
          <div className="mt-2">
            <a
              href=""
              className="text-2xl font-semibold flex items-center space-x-3"
            >
              <img
                src={logo}
                alt=""
                className="w-10 inline-block items-center"
              />
              <span className="font-mbf-canno ">Amaxonia ERP</span>
            </a>

            <div className="my-8">
              <p className="mb-1 text-sm sm:text-base">
                Copyright © 2024 Amaxonia ERP.
              </p>
              <p className="text-sm sm:text-base">
                Todos los derechos reservados
              </p>
            </div>

            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-start text-white">
              <Footer.Icon
                href="https://www.facebook.com/amaxonialatin"
                target="_blank"
                rel="noopener noreferrer"
                icon={BsFacebook}
                className="text-white"
              />
              <Footer.Icon
                href="https://www.instagram.com/amaxonia_erp/"
                icon={BsInstagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              />
              <Footer.Icon href="#" icon={BsTwitter} className="text-white" />
            </div>
          </div>
          <div className="md:w-2/3 grid grid-cols-2 gap-8 items-start sm:mt-4 sm:grid-cols-3 sm:gap-6 text-white">
            <div>
              <Footer.Title title="Amaxonia" className="text-white" />
              <Footer.LinkGroup col>
                <Link to="/nosotros" className="text-white">
                  Acerca de nosotros
                </Link>
                <Link to="/contacto" className="text-white">
                  Contáctanos
                </Link>
                <Link to="servicios" className="text-white">
                  Servicios
                </Link>
                <Link to="/applications" className="text-white">
                  Aplicaciones
                </Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Soporte" className="text-white" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="text-white">
                  Centro de ayuda
                </Footer.Link>
                <Footer.Link href="#" className="text-white">
                  Términos y condiciones
                </Footer.Link>
                <Footer.Link href="#" className="text-white">
                  Política de privacidad
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div className="hidden lg:block">
              <Footer.Title
                title="¡Manténgase actualizado!"
                className="text-white"
              />
              <div className="max-w-md">
                <div className="mb-2 block"></div>
                <TextInput
                  id="email4"
                  type="email"
                  icon={HiMail}
                  placeholder="nombre@amaxoniaerp.com"
                  required
                  color="white"
                  className="text-black"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MyFooter;
