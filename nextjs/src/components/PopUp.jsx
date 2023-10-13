import { getModal } from "@/lib/query"
import { useQuery } from "@apollo/client";
import Loading from "./Loading";
import { Courgette } from 'next/font/google'
const courgetteFont= Courgette({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
});

function PopUp({close}) {

  const { loading, error, data } = useQuery(getModal);
  
  if(!loading) console.log(data);
  return (
    <div className="w-full h-screen absolute z-10">
        <div className="h-full w-full fixed bg-black bg-opacity-70 flex justify-center">
            <div className="bg-[#006ecc] rounded-3xl w-[40rem] h-[31rem] mt-[5rem] relative mx-10 ">

            <button type="button" onClick={close} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center absolute top-5 right-7 z-30">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                </button>
              { loading?<Loading/>:
              <div className="w-full h-full flex justify-end">
                <div className="w-full h-1/2 md:w-1/2 md:h-full text-white z-30 absolute text-center sm:text-start top-40 sm:left-10 mx-auto">
                  <p className="text-3xl font-semibold">{data.modal.modalFields.texto1}</p>
                  <p className="text-2xl font-extralight">{data.modal.modalFields.texto2}</p>
                  <p className={`text-[5rem] leading-none ${courgetteFont.className}`}>{data.modal.modalFields.texto3}</p>
                  <p className="text-3xl font-semibold text-[#01396e]">{data.modal.modalFields.texto4}</p>
                  <p className="text-xl font-semibold mt-9">{data.modal.modalFields.texto5}</p>
                  <button className="bg-[#b8bf02] hover:bg-[#b7bb50] text-[#204a63] font-semibold py-2 px-1 text-[0.7rem] leading-none rounded-full mt-5">
                    <p className="mx-4">{data.modal.modalFields.textoBoton}</p>
                  </button>
                  
                </div>

                <div className="w-full h-1/2 sm:w-3/5 sm:h-full relative ">
                  <img className="w-full h-full rounded-tl-3xl rounded-tr-3xl sm:rounded-tl-none sm:rounded-br-3xl " src={data.modal.modalFields.imagen.link} alt="" />
                  <div className="popup-shadow absolute top-0 bottom-0 w-full rounded-tl-3xl rounded-tr-3xl sm:rounded-tl-none sm:rounded-br-3xl"></div>
                </div>

              </div>
  }     
            </div>
        </div>

    </div>
  )
}


export default PopUp