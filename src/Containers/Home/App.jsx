/* eslint-disable no-constant-condition */
import Navbar from '../../components/Navbar/Navbar'
import SectionOne from '../../components/Sections/SectionOne'
import SectionTwo from '../../components/Sections/SectionTwo'
import HamburgerIcon from "../../components/icon-hamburguer/HamburgerIcon"


function App() {

  function toggleNavbar() {
  var navbar = document.getElementById('navbar');
  navbar.classList.toggle('hidden');
}

  return (
    <body  className="flex-col  justify-center w-[100%] h-[100%] lg:h-[96.90vh] ">


      <div className="flex justify-center mt-[30px] mb-[30px]">
          <h1 className='text-[white] text-7xl justify-center items-center max-lg:ml-6 text-[bold]  max-lg:text-3xl ' > Character Chronicle Caelum</h1>


<nav>
            <div className=" flex absolute right-0 lg:hidden max-lg:mr-1 ">
        <button onClick={toggleNavbar}>
       {true ? (
       <HamburgerIcon />
       ) : (
       <span className='font-bold text-2xl '> X </span>
       )}
        </button>
        </div>


         <div id='navbar' className=" justify-end items-start  flex lg:hidden">

         <div className="">
          <ul className="flex flex-col  justify-start mt-[100px] gap-[20px] text-2xl  text-[#9E9E9E]  max-lg:text-sm">
                  <li className=" w-full p-4 border-b  hover:bg-black  text-[#9E9E9E]"> INÍCIO </li>
                  <li className=" w-full p-4 border-b  hover:bg-black text-[#9E9E9E]"> HISTORIAS </li>
                  <li className=" w-full p-4 border-b  hover:bg-black text-[#9E9E9E]"> CRIADORES</li>
                  <li className=" w-full p-4 border-b  hover:bg-black text-[#9E9E9E]"> ARTES </li>
                  <li className="  p-4 border-b  hover:bg-black text-[#9E9E9E]"> CONTATO </li>
        </ul>
        </div>
  </div>
  </nav>


      </div>

    <Navbar />

      <div className="flex justify-center mt-[50px] mb-[50px]">
        <h2 className='text-[white] text-5xl justify-center items-center max-lg:text-3xl'> Personagens </h2>
      </div>

        <div className='max-lg:flex items-center justify-center gap-8 '>

   <SectionOne />
   <SectionTwo />
        </div>




    </body>

  )
}

export default App
