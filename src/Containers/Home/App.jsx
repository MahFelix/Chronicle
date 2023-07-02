import Navbar from '../../components/Navbar'
import SectionOne from '../../components/SectionOne'
import SectionTwo from '../../components/SectionTwo'


function App() {




  return (
    <body  className="flex-col  justify-center">

      <div id='container'>
            <div id='bolhas'>
              <span style='--i:11'> </span>
              <span style='--i:17'> </span>
              <span style='--i:25'> </span>
              <span style='--i:14'> </span>
              <span style='--i:13'> </span>
              <span style='--i:15'> </span>
              <span style='--i:30'> </span>
              <span style='--i:35'> </span>
              <span style='--i:37'> </span>
              <span style='--i:40'> </span>
              <span style='--i:70'> </span>
              <span style='--i:3'> </span>
              <span style='--i:4'> </span>
              <span style='--i:18'> </span>
              <span style='--i:45'> </span>
              <span style='--i:23'> </span>
              <span style='--i:11'> </span>
              <span style='--i:19'> </span>
            </div>

          </div>
          
      <div className="flex justify-center mt-[30px] mb-[30px]">
          <h1 className='text-[white] text-7xl justify-center items-center text-[bold]' > Character Chronicle </h1>
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
