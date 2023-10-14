import Image from "next/image"
import Link from "next/link"

function Navbar() {
  return (
    <div className="text-white text-xs">

      <nav className="bg-blue-900 w-full py-2  flex justify-center items-center md:justify-between px-2">
        <div className="w-full justify-center md:justify-start md:w-1/3 space-x-1 lg:space-x-2 flex">
          <p className=" whitespace-nowrap">¡Paga aqui tu factura!</p>
          <p>|</p>
          <p className=" whitespace-nowrap">Recibe tu factura digital</p>
        </div>

        <div className="hidden md:flex w-1/3 justify-center">
          <p>¿Quieres agua caliente? <Link className="text-green-600 font-semibold" href={"/"}>Ingresa aquí</Link> </p>
        </div>

        <div className="hidden md:flex w-1/3 justify-end"> 
          <button className="bg-red-600 rounded-full py-1 px-2">
            <p>Simula tu credito Brilla</p>
          </button>
        </div>

      </nav>


<nav className="bg-blue-800 shadow-xl">
    <div className="flex flex-wrap justify-between items-center w-full p-2">
      <div className="w-1/3">
          <Image src={"/icons/menu-white.svg"} className="md:hidden" alt="menu" width={25} height={25}/>
          <div className="hidden md:flex w-[17rem] space-x-2 h-10 border rounded-full items-center relative font-light">
      
            <select className="bg-blue-800 flex items-center text-[0.68rem] h-full ml-4 outline-none" id="">
              <option value="0">En todo el sitio</option>
              <option value="1">En los posts </option>
            </select>
            <p>|</p>
            <input type="text" className="bg-transparent w-24 placeholder-white outline-none " placeholder="Buscar..." />
            <Image src={"/icons/lupa.svg"} className="absolute right-4 top-2" alt="menu" width={20} height={20}/>

          </div>
      </div>

      <div className="w-1/3 flex justify-center">
        <Link href={'/'}>
          <Image src={"/img/Efigas-logo.webp"} alt="logo" width={130} height={130}/>
        </Link>
      </div>

      <div className="w-1/3 flex justify-end space-x-3">
        <div className="flex items-center space-x-1">
          <Image src={"/icons/headphones.png"} alt="headphones" width={20} height={20}/>
          <p className="hidden md:block ">018000966344</p>
        </div>
        <div className="flex  items-center space-x-1">
            <Image src={"/icons/info.png"} alt="info" width={20} height={20}/>
            <p className="hidden md:block whitespace-nowrap">Canales de atención</p>
        </div>
      </div>
    </div>
</nav>

<nav className="bg-white w-full hidden md:flex">
    <button className="flex bg-blue-900 px-4 rounded-md py-2 space-x-1 h-8">
      <Image src={"/icons/four-squares.png"} alt="squares" width={15} height={15} ></Image>
      <select className="bg-blue-900">
        <option value="">Mas información</option>
      </select>
    </button>

    <div>
      <ul>
        <li className="flex">
        <Image src={"/icons/home.svg"} className="fill-black" alt="squares" width={20} height={20} ></Image>
        <p className="text-blue-900">Hogar</p>
        <Image src={"/icons/down.png"} className="fill-blue-500" alt="squares" width={15} height={15} ></Image>
        </li>
      </ul>
    </div>


</nav>
        
    </div>
  )
}
export default Navbar