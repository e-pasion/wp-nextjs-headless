import Image from "next/image"
import Link from "next/link"

function Navbar() {
  return (
    <div className="text-white text-xs lg:text-sm">

      <nav className="bg-blue-1 w-full py-[.8rem]  flex justify-center items-center md:justify-between px-2 lg:text-sm font-light">
        <div className="w-full justify-center md:justify-start md:w-1/3 space-x-1 lg:space-x-2 flex">
          <p className=" whitespace-nowrap">¡Paga aqui tu factura!</p>
          <p>|</p>
          <p className=" whitespace-nowrap">Recibe tu factura digital</p>
        </div>

        <div className="hidden md:flex w-1/3 justify-center">
          <p>¿Quieres agua caliente? <Link className="text-green-600 font-semibold" href={"/"}>Ingresa aquí</Link> </p>
        </div>

        <div className="hidden md:flex w-1/3 justify-end"> 
          <button className="bg-red-500 rounded-full py-[0.2rem] px-3">
            <p>Simula tu credito Brilla</p>
          </button>
        </div>

      </nav>


<nav className="blue-background shadow-xl ">
    <div className="flex flex-wrap justify-between items-center w-full py-2 px-3">
      <div className="w-1/3">
          <Image src={"/icons/menu-white.svg"} className="md:hidden" alt="menu" width={25} height={25}/>

          <div className="hidden md:flex w-[17rem] lg:w-80 space-x-2 h-12 border rounded-full items-center relative font-light">
            <select className="bg-transparent flex items-center text-xs h-full ml-4 outline-none" id="">
              <option className="bg-blue-900" value="0">En todo el sitio</option>
              <option className="bg-blue-900" value="1">En los posts </option>
            </select>
            <p>|</p>
            <input type="text" className="bg-transparent w-24 placeholder-white outline-none " placeholder="Buscar..." />
            <Image src={"/icons/lupa.svg"} className="absolute right-4 top-2" alt="menu" width={20} height={20}/>
          </div>

      </div>

      <div className="w-1/3 flex justify-center">
        <Link href={'/'}>
          <Image src={"/logos/logo-efigas-color.svg"} alt="logo" width={200} height={200}/>
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

<nav className="bg-white w-full hidden md:flex items-center py-3 px-2 justify-between">
    <button className="flex items-center bg-blue-900 px-3 rounded-md py-[.6rem] space-x-1">
      <Image src={"/icons/four-squares.png"} alt="squares" width={13} height={13} ></Image>
      <p className="font-extralight">Mas información</p>
      <Image src={"/icons/dropdown.svg"} className="filter invert" alt="down" width={15} height={15} ></Image>
    </button>

    <div className="flex space-x-4 font-bold">
        <div className="flex justify-center items-center cursor-pointer">
          <Image src={"/icons/home.svg"} className="icon-cyan" alt="home" width={15} height={15} ></Image>
          <p className="text-blue-900 ml-1">Hogar</p>
          <Image src={"/icons/dropdown.svg"} className="icon-cyan" alt="down" width={15} height={15} ></Image>
        </div>

        <div className="flex justify-center items-center cursor-pointer">
          <Image src={"/icons/home.svg"} className="icon-cyan" alt="home" width={15} height={15} ></Image>
          <p className="text-blue-900 ml-1">Comercio</p>
          <Image src={"/icons/dropdown.svg"} className="icon-cyan" alt="down" width={15} height={15} ></Image>
        </div>

        <div className="flex justify-center items-center cursor-pointer">
          <Image src={"/icons/home.svg"} className="icon-cyan" alt="home" width={15} height={15} ></Image>
          <p className="text-blue-900 ml-1">Industrias</p>
          <Image src={"/icons/dropdown.svg"} className="icon-cyan" alt="down" width={15} height={15} ></Image>
        </div>

        <div className="flex justify-center items-center cursor-pointer">
          <Image src={"/icons/home.svg"} className="icon-cyan" alt="home" width={15} height={15} ></Image>
          <p className="text-blue-900 ml-1">Constructoras</p>
          <Image src={"/icons/dropdown.svg"} className="icon-cyan" alt="down" width={15} height={15} ></Image>
        </div>

        <div className="flex justify-center items-center cursor-pointer">
          <Image src={"/icons/home.svg"} className="icon-cyan" alt="home" width={15} height={15} ></Image>
          <p className="text-blue-900 ml-1">Vehicular</p>
          <Image src={"/icons/dropdown.svg"} className="icon-cyan" alt="down" width={15} height={15} ></Image>
        </div>

        <div className="flex justify-center items-center cursor-pointer">
          <Image src={"/icons/leaf.svg"} className="icon-cyan" alt="home" width={15} height={15} ></Image>
          <p className="text-green-1 ml-1">Sostenibilidad</p>
          <Image src={"/icons/dropdown.svg"} className="icon-cyan" alt="down" width={15} height={15} ></Image>
        </div>
    </div>

    <div className="flex">
      <Image src={"/icons/portfolio.svg"} className="icon-blue" alt="portofolio" width={34} height={34} ></Image>
      <div className="text-right">
        <p className="text-xl text-green-1 font-bold">Oficina virtual</p>
        <p className="text-gray-400 font-bold">Atención en línea</p>

      </div>
    </div>


</nav>
        
    </div>
  )
}
export default Navbar