import DetalheLeft from '../assets/DetailsName/DetalheLeft.svg'
import DetalheRight from '../assets/DetailsName/DetalheRight.svg'

const SectionOne = () => {
  return (
   <section className='flex gap-[30px] justify-center items-center '>

          <div id='Backimg-1' className='w-[250px] h-[250px] rounded-[12px] opacity-[0.5] transform hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out hover:opacity-[1] relative'>

            <div className=' flex relative w-[250px] bg-[#280430] mt-[78%] rounded-[12px] justify-around bg-opacity-40 ' >
              <img className='w-[25px]' src={DetalheLeft} />
                <h2 className=' text-[white] text-1xl p-[10px] mt-[10px] '><strong> Ethan Nova </strong></h2>
              <img className='w-[25px]' src={DetalheRight} />
            </div>

          </div>

          <div id='Backimg-2' className='w-[250px] h-[250px] rounded-[12px] opacity-[0.5] transform hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out hover:opacity-[1] relative'>

            <div className=' flex  w-[250px] bg-[#280430] mt-[78%] rounded-[12px] justify-around bg-opacity-40 ' >
              <img className='w-[25px]' src={DetalheLeft} />
                <h2 className=' text-[white] text-1xl p-[10px] mt-[10px] '><strong> Aveline Morganroth </strong></h2>
              <img className='w-[25px]' src={DetalheRight} />
            </div>

          </div>

          <div id='Backimg-3' className='w-[250px] h-[250px] rounded-[12px] opacity-[0.5] transform hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out hover:opacity-[1] relative'>

            <div className=' flex  w-[250px] bg-[#280430] mt-[78%] rounded-[12px] justify-around bg-opacity-40 ' >
              <img className='w-[25px]' src={DetalheLeft} />
                <h2 className=' text-[white] text-1xl p-[10px] mt-[10px] '><strong> Lucas Backwood </strong></h2>
              <img className='w-[25px]' src={DetalheRight} />
            </div>

          </div>

          <div id='Backimg-4' className='w-[250px] h-[250px] rounded-[12px] opacity-[0.5] transform hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out hover:opacity-[1] relative'>

            <div className=' flex  w-[250px] bg-[#280430] mt-[78%] rounded-[12px] justify-around bg-opacity-40  opacity-1' >
              <img className='w-[25px]' src={DetalheLeft} />
                <h2 className=' text-[white] text-1xl p-[10px] mt-[10px] '><strong> Sophia Tompson </strong></h2>
              <img className='w-[25px]' src={DetalheRight} />
            </div>

          </div>


          <div id='Backimg-5' className='w-[250px] h-[250px] rounded-[12px] opacity-[0.5] transform hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out hover:opacity-[1] relative'>

            <div className=' flex  w-[250px] bg-[#280430] mt-[78%] rounded-[12px] justify-around bg-opacity-40 ' >
              <img className='w-[25px]' src={DetalheLeft} />
                <h2 className=' text-[white] text-1xl p-[10px] mt-[10px] '><strong> Alexandre Knight </strong></h2>
              <img className='w-[25px]' src={DetalheRight} />
            </div>

          </div>



      </section>
  )
}

export default SectionOne