import React from "react";

const AboutPage = () => {
  return (
    <main className="flex mt-20 flex-col items-center justify-center space-y-8 bg-[#F3F4F6] p-8">
      <h1 className="text-4xl font-bold text-neutralDgrey">
        Acerca de Nosotros
      </h1>
      <section className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-neutralDgrey mb-4">
          Nuestra Ubicación
        </h2>
        <div className="w-full h-64 rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.645268853499!2d-79.523552785185!3d8.987982693526609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8faca96549914705%3A0x2f7565b3f82d903e!2sPLAZA%20CENTURIA%20ll!5e0!3m2!1sen!2s!4v1641253419886!5m2!1sen!2s"
            className="w-full h-96 rounded-md"
            allowFullScreen=""
            loading="lazy"
            title="Mapa de ubicación"
          ></iframe>
        </div>
      </section>
      <section className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl text-center font-bold text-neutralDgrey mb-4">
          Quiénes Somos
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Amaxonia ERP es una empresa líder en el desarrollo de soluciones de
          software ERP. Con más de una década de experiencia, nos especializamos
          en ayudar a las empresas a optimizar sus procesos empresariales a
          través de soluciones de software personalizadas y eficientes.
        </p>
      </section>
      <section className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-neutralDgrey mb-4">Cultura</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          En Amaxonia ERP, creemos en la innovación, la colaboración y la
          excelencia en el servicio al cliente. Nuestros valores y principios
          nos guían en todo lo que hacemos y nos ayudan a proporcionar las
          mejores soluciones a nuestros clientes.
        </p>
      </section>
      <section className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-neutralDgrey mb-4">Visión</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Nuestra visión es convertirnos en líderes del mercado de software ERP
          y ayudar a las empresas a optimizar sus procesos empresariales.
          Creemos en el poder de la tecnología para transformar los negocios y
          estamos comprometidos a proporcionar las mejores soluciones para
          nuestros clientes.
        </p>
      </section>
      <section className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-neutralDgrey mb-4">
          Testimonios
        </h2>
        <div className="space-y-6">
          <div className="border-t border-b border-gray-200 py-4">
            <p className="text-gray-600 text-lg leading-relaxed">
              Amaxonia ERP ha transformado la forma en que hacemos negocios. Su
              software es fácil de usar y ha mejorado significativamente
              nuestros procesos empresariales.
            </p>
            <p className="mt-2 text-gray-500">- Cliente Satisfecho 1</p>
          </div>
          <div className="border-t border-b border-gray-200 py-4">
            <p className="text-gray-600 text-lg leading-relaxed">
              El equipo de Amaxonia ERP es increíblemente útil y su software es
              muy intuitivo. Ha tenido un impacto positivo enorme en nuestro
              negocio.
            </p>
            <p className="mt-2 text-gray-500">- Cliente Satisfecho 2</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
