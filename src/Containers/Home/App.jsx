import Navbar from '../../components/Navbar'
import SectionOne from '../../components/SectionOne'
import SectionTwo from '../../components/SectionTwo'


function App() {




  return (
    <body  className="flex-col  justify-center w-[100%] h-[100vh]">


      <div className="flex justify-center mt-[30px] mb-[30px]">
          <h1 className='text-[white] text-7xl justify-center items-center text-[bold]' > Character Chronicle Caelum</h1>
      </div>

    <Navbar />

      <div className="flex justify-center mt-[50px] mb-[50px]">
        <h2 className='text-[white] text-5xl justify-center items-center '> Personagens </h2>
      </div>


   <SectionOne />
   <SectionTwo />




    </body>

  )
}

export default App
