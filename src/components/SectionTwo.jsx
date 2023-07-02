import DetalheLeft from '../assets/DetailsName/DetalheLeft.svg'
import DetalheRight from '../assets/DetailsName/DetalheRight.svg'


const SectionTwo = () => {
  return (
     <section className='flex gap-[30px] mt-[30px]  items-center justify-center'>

          <div id='Backimg-6' className='w-[250px] h-[250px]  whitespace-normal break-words rounded-[12px] opacity-[0.5] transform hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out hover:opacity-[1] relative'>

            <div className=' flex  w-[250px] bg-[#280430] mt-[78%] rounded-[12px]  bg-opacity-40 justify-around' >
              <img className='w-[25px]'  src={DetalheLeft} />
                <h2 className=' text-[white] text-1xl p-[10px] mt-[10px] '><strong> Noah Summers </strong></h2>
              <img className='w-[25px]'  src={DetalheRight} />
            </div>

          </div>

          <div id='Backimg-7' className='w-[250px] h-[250px] rounded-[12px] opacity-[0.5] transform hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out hover:opacity-[1] relative'>

            <div className=' flex  w-[250px] bg-[#280430] mt-[78%] rounded-[12px]  bg-opacity-40 justify-around ' >
              <img className='w-[25px]' src={DetalheLeft} />
                <h2 className=' text-[white] text-1xl p-[10px] mt-[10px] '><strong> Gabriel Nova </strong></h2>
              <img className='w-[25px]' src={DetalheRight} />
            </div>

          </div>

          <div id='Backimg-8' className='w-[250px] h-[250px] rounded-[12px] opacity-[0.5] transform hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out hover:opacity-[1] relative'>

            <div className=' flex  w-[250px] bg-[#280430] mt-[78%] rounded-[12px]  bg-opacity-40 justify-around ' >
              <img className='w-[25px]' src={DetalheLeft} />
                <h2 className=' text-[white] text-1xl p-[10px] mt-[10px] '><strong> Adrian Collins </strong></h2>
              <img className='w-[25px]' src={DetalheRight} />
            </div>

          </div>

          <div id='Backimg-9' className='w-[250px] h-[250px] rounded-[12px] opacity-[0.5] transform hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out hover:opacity-[1] relative'>

            <div className=' flex  w-[250px] bg-[#280430] mt-[78%] rounded-[12px]  bg-opacity-40 justify-around  opacity-1' >
              <img className='w-[25px]' src={DetalheLeft} />
                <h2 className=' text-[white] text-1xl p-[10px] mt-[10px] '><strong> Lucas Blackthorn </strong></h2>
              <img className='w-[25px]' src={DetalheRight} />
            </div>

          </div>


          <div id='Backimg-10' className='w-[250px] h-[250px] rounded-[12px] opacity-[0.5] transform hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out hover:opacity-[1] relative'>

            <div className=' flex  w-[250px] bg-[#280430] mt-[78%] rounded-[12px]  bg-opacity-40 justify-around ' >
              <img className='w-[25px]' src={DetalheLeft} />
                <h2 className=' text-[white] text-1xl p-[10px] mt-[10px] '><strong> Devan Stone </strong></h2>
              <img className='w-[25px]' src={DetalheRight} />
            </div>

          </div>



      </section>
  )
}

export default SectionTwo