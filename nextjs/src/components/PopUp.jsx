import { getModal } from "@/lib/query"
import { ApolloClient, useQuery } from "@apollo/client";
import Loading from "./Loading";

function PopUp({close}) {

  const { loading, error, data } = useQuery(getModal);

  if (!loading) console.log(data);


  return (
    <div className="w-full h-screen absolute z-50">
        <div className="h-full w-full fixed bg-black bg-opacity-70 flex justify-center">
            <div className="bg-blue-500 rounded-3xl w-3/5 h-2/3 mt-[5rem] relative">

            <button type="button" onClick={close} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center absolute top-5 right-7">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                </button>
              { loading?<Loading/>:
              <div className="w-full h-full flex">
                <div className="w-full h-1/2 md:w-1/2 md:h-full text-white">
                  <p className="text-xl">{data.modal.modalFields.texto1}</p>
                  <p className="text-xl">{data.modal.modalFields.texto2}</p>
                  <p className="text-xl">{data.modal.modalFields.texto3}</p>
                  <p className="text-xl">{data.modal.modalFields.texto4}</p>
                  <p className="text-xl">{data.modal.modalFields.texto5}</p>
                </div>
                <div className="w-full h-1/2 md:w-1/2 md:h-full">
                  <img className="w-full h-full" src={data.modal.modalFields.imagen.link} alt="" />
                </div>

              </div>
  }     

            </div>
        </div>

    </div>
  )
}


export default PopUp