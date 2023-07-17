/* eslint-disable no-constant-condition */
import Navbar from '../../components/Navbar/Navbar'
import SectionOne from '../../components/Sections/SectionOne'
import SectionTwo from '../../components/Sections/SectionTwo'
import SectionTree from '../../components/Sections/SectionTree'
import HamburgerIcon from "../../components/icon-hamburguer/HamburgerIcon"


function App() {

  function toggleNavbar() {
  var navbar = document.getElementById('navbar');
  navbar.classList.toggle('hidden');
}

  return (
    <body  className="flex-col  justify-center w-[100%] h-[100%] lg:h-[120.90vh] max-lg:pb-[200px]">


      <div className="flex justify-center mt-[30px] mb-[30px] max-lg:flex">
          <h1 className='text-[white] text-7xl justify-center items-center max-lg:ml-6 text-[bold]  max-lg:text-3xl  max-lg:absolute max-lg:hidden' > Character Chronicle Caelum</h1>
          <h1 className=' hidden text-[white] text-7xl justify-center items-center  text-[bold]  max-lg:text-3xl  max-lg:absolute max-lg:flex ' > Character <br/>  Chronicle<br/> Caelum</h1>


<nav>
            <div className=" flex absolute right-0 lg:hidden max-lg:mr-1  ">
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
          <ul className="flex lg:hidden flex-col justify-start mt-[100px] gap-[10px] text-2xl  text-[#9E9E9E]  max-lg:text-sm max-lg:mt-200 max-lg:absolute max-lg:right-[15px]
          max-lg:top-0 ">
                  <li className=" w-full p-1 border-b  hover:bg-black  text-[#9E9E9E]"> INÍCIO </li>
                  <li className=" w-full p-1 border-b  hover:bg-black text-[#9E9E9E]"> HISTORIAS </li>
                  <li className=" w-full p-1 border-b  hover:bg-black text-[#9E9E9E]"> CRIADORES</li>
                  <li className=" w-full p-1 border-b  hover:bg-black text-[#9E9E9E]"> ARTES </li>
                  <li className="  p-1 border-b  hover:bg-black text-[#9E9E9E]"> CONTATO </li>
        </ul>
        </div>
  </div>
  </nav>


      </div>

    <Navbar />

      <div className="flex justify-center mt-[10px] mb-[40px]">
        <h2 className='text-[white] text-5xl justify-center items-center max-lg:text-3xl max-lg:relative max-lg:top-[150px]'> Personagens </h2>

      </div>

        <div className='max-lg:flex items-center justify-center gap-8 '>

   <SectionOne />
   <SectionTwo />
   <SectionTree />
        </div>




    </body>

  )
}

export default App
