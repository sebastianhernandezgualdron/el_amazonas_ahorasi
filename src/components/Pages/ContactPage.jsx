import React from "react";
import { Button, Label, TextInput, Textarea, Select } from "flowbite-react";

const ContactForm = () => {
  return (
    <div className=" mt-20 lg:mt-8  flex flex-col items-center justify-center min-h-screen">
      <div className="px-2 sm:px-4 md:px-6 lg:px-14 xl:px-20 2xl:px-28 w-full mx-auto bg-neutralSilver py-2 flex flex-col items-center">
        <div className="text-sm sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-neutral-800 font-semibold mb-6 lg:leading-snug text-center break-words">
          <h1 className="md:text-3xl text-neutralDgray">
            Tomemos un café y hablemos de software empresarial
          </h1>
        </div>
        <a
          href="https://api.whatsapp.com/send/?phone=50760192070&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn-third flex items-center mb-4">
            <img
              src="src\assets\icons\whatsapp.svg"
              width={30}
              height={30}
              style={{ marginRight: "4px" }}
            />
            Háblemos por WhatsApp
          </button>
        </a>
      </div>

      <div className="bg-white shadow-lg p-8 rounded-lg w-full lg:w-1/2 mb-2 max-w-md mt-6">
        <h1 className="text-2xl font-bold mb-4 text-center">Contáctanos</h1>
        <p>Puedes dejarnos un mail y contestaremos lo más pronto posible.</p>
        <form className="flex max-w-md flex-col gap-4">
          {/* LABEL PARA EL NOMBRE */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name1" value="Nombre" />
            </div>
            <TextInput
              id="name1"
              type="text"
              placeholder="Nombre Completo"
              required
              color="white"
            />
          </div>
          {/* LABEL PARA EL CORREO ELECTRÓNICO */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Correo electrónico" />
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="nombre@amaxoniaerp.com"
              required
              color="white"
            />
          </div>
          {/* LABEL PARA EL NÚMERO DE TLF */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="phone1" value="Teléfono" />
            </div>
            <TextInput
              id="phone1"
              type="tel"
              placeholder="+5071234567"
              color="white"
            />
          </div>

          {/* LABEL PARA EL ASUNTO */}
          <div className="mb-2 block">
            <Label htmlFor="asunto" value="¿Cuál es el asunto?" />
          </div>
          <Select id="asunto" color="white" required>
            <option>Solicitud de cotización</option>
            <option>Quiero ser distribuidor</option>
            <option>Necesito soporte</option>
            <option>Otro</option>
          </Select>

          {/* LABEL PARA EL TEXTAREA */}
          <div className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="mensaje" value="Mensaje" />
            </div>
            <Textarea
              id="mensaje"
              placeholder="Déjanos tu mensaje"
              color="white"
              required
            />
          </div>
          {/* BOTÓN DE ENVIAR */}
          <Button type="submit" color="blue">
            Enviar mensaje
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
