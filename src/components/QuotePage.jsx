import { CheckCircleIcon } from '@heroicons/react/24/outline'
const includedFeatures = [
  'Private forum access',
  'Member resources',
  'Entry to annual conference',
  'Official member t-shirt',
]

const QuotePage = () =>{
  return (
    <div className="bg-white py-24 sm:py-36">
      <div className="mx-auto max-w-full px-6 lg:px-8">
        <div className="mx-auto max-w-6xl sm:mt-5 sm:text-center">
          <h2 className="md:text-[4.8rem] w-full font-bold tracking-tight text-gray-900 sm:text-4xl">Escoge el mejor plan, para ti.</h2>
          <p className="text-lg leading-8  md:ml-16 max-w-5xl sm:mt-14 text-gray-600">
          Prueba 7 días gratis el que mejor se adapte a tus necesidades. Sin configurar métodos de pago ni contratos de permanencia.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1  ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full border-solid border-2 border-white lg:max-w-sm mx-4 lg:flex-shrink-0 sm:hover:border-solid sm:hover:border-indigo-400 sm:hover:border-2 sm:hover:rounded">
            <div className="rounded-2xl bg-white border-solid py-10  ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-sm px-8">
                <h3 className="text-2xl  mb-8 font-semibold text-black">EMPRENDEDOR</h3>
                <span className="text-3xl font-bold tracking-tight text-gray-900">$349</span>
                <p className="text-base mt-5 font-semibold text-gray-600">Un solo pago anual</p>
                <ul >
                    <li className='inline-flex my-3' ><CheckCircleIcon className="h-6 w-6 text-black"></CheckCircleIcon><p className='pl-3 text-sm  pt-[2px]'>Facturas ilimitadas</p></li>
                    <li className='inline-flex my-3'><CheckCircleIcon className="h-6 w-6 text-black"></CheckCircleIcon><p className='pl-3 text-sm w-3/4 pt-[2px]'> Hasta 4.0000 dolares de ingresos mensuales</p></li>
                    <li className='inline-flex my-3'><CheckCircleIcon className="h-6 w-6 text-black"></CheckCircleIcon><p className='pl-3 text-sm pt-[2px]'>1 Bodega de inventario</p></li>
                    <li className='inline-flex my-3'><CheckCircleIcon className="h-6 w-6 text-black"></CheckCircleIcon><p className='pl-3 text-sm w-3/4 pt-[2px]'>2 usuarios con acceso. Uno para ti, y otro para tu contador</p></li>
                    <li className='inline-flex my-3'><CheckCircleIcon className="h-6 w-6 text-black"></CheckCircleIcon><p className='pl-3 text-sm pt-[2px]'>Soporte 24/7 gratis</p></li>
                </ul>
                
                <a
                  href="#"
                  className="mt-10 block w-4/12 border-solid border-2 border-indigo-400 rounded-md bg-white px-3 py-3 text-center text-sm font-semibold text-black shadow-sm hover:bg-blue-500 hover:text-white "
                >
                  Ir al chat
                </a>

              </div>
            </div>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-sm mx-4 border-2 border-solid border-blue-400 rounded lg:flex-shrink-0 sm:hover:border-solid sm:hover:border-neutralDGrey sm:hover:border-2 sm:hover:rounded">
          <div className="rounded-2xl bg-white border-solid py-10  ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-sm px-8">
                <h3 className="text-2xl  mb-8 font-semibold text-black">PYME</h3>
                <span className="text-3xl font-bold tracking-tight text-gray-900">$499</span>
                <p className="text-base mt-5 font-semibold text-gray-600">Para pequeñas empresas</p>
                <ul >
                    <li className='inline-flex my-3' ><CheckCircleIcon className="h-6 w-6 text-blue-500"></CheckCircleIcon><p className='pl-3 text-sm pt-[2px]'>Facturas ilimitadas</p></li>
                    <li className='inline-flex my-3'><CheckCircleIcon className="h-6 w-6 text-blue-500"></CheckCircleIcon><p className='pl-3 text-sm w-3/4 pt-[2px]'> Límite de facturación mensual de hasta 30.000 usd o Balboas</p></li>
                    <li className='inline-flex my-3'><CheckCircleIcon className="h-6 w-6 text-blue-500"></CheckCircleIcon><p className='pl-3 text-sm pt-[2px]'>2 Bodega de inventario</p></li>
                    <li className='inline-flex my-3'><CheckCircleIcon className="h-6 w-6 text-blue-500"></CheckCircleIcon><p className='pl-3 text-sm w-3/4 pt-[2px]'>2 usuarios con acceso</p></li>
                    <li className='inline-flex my-3'><CheckCircleIcon className="h-6 w-6 text-blue-500"></CheckCircleIcon><p className='pl-3 text-sm pt-[2px]'>Soporte 24/7 gratis</p></li>
                </ul>
                
                <a
                  href="#"
                  className="mt-10 block w-4/12 border-solid border-2 border-indigo-400 rounded-md bg-white px-3 py-3 text-center text-sm font-semibold text-black shadow-sm hover:bg-blue-500 hover:text-white "
                >
                  Ir al chat
                </a> 

              </div>
            </div>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full border-solid border-2 border-white lg:max-w-sm mx-4  lg:flex-shrink-0 sm:hover:border-solid sm:hover:border-indigo-400 sm:hover:border-2 sm:hover:rounded">
          <div className="rounded-2xl bg-white border-solid py-10  ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-sm px-8">
                <h3 className="text-2xl mb-8 font-semibold text-black">PLUS</h3>
                <span className="text-3xl font-bold tracking-tight text-gray-900">$999</span>
                <p className="text-base mt-5 font-semibold text-gray-600">Para grandes empresas</p>
                <ul >
                    <li className='inline-flex my-3' ><CheckCircleIcon className="h-6 w-6 text-black"></CheckCircleIcon><p className='pl-3 text-sm pt-[2px]'>Facturas ilimitadas</p></li>
                    <li className='inline-flex my-3'><CheckCircleIcon className="h-6 w-6 text-black"></CheckCircleIcon><p className='pl-3 text-sm w-3/4 pt-[2px]'> Límite de facturacion mensual de hasta 80.000 usd o Balboas</p></li>
                    <li className='inline-flex my-3'><CheckCircleIcon className="h-6 w-6 text-black"></CheckCircleIcon><p className='pl-3 text-sm pt-[2px]'>10 Bodegas de inventario</p></li>
                    <li className='inline-flex my-3'><CheckCircleIcon className="h-6 w-6 text-black"></CheckCircleIcon><p className='pl-3 text-sm w-3/4 pt-[2px]'>3 usuarios con acceso</p></li>
                    <li className='inline-flex my-3'><CheckCircleIcon className="h-6 w-6 text-black"></CheckCircleIcon><p className='pl-3 text-sm pt-[2px]'>Soporte 24/7 gratis</p></li>
                </ul>
                
                <a
                  href="#"
                  className="mt-10 block w-4/12 border-solid border-2 border-indigo-400 rounded-md bg-white px-3 py-3 text-center text-sm font-semibold text-black shadow-sm hover:bg-blue-500 hover:text-white "
                >
                  Ir al chat
                </a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuotePage;
