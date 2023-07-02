/* eslint-disable react/prop-types */
import DetalheLeft from '../assets/DetailsName/DetalheLeft.svg'
import DetalheRight from '../assets/DetailsName/DetalheRight.svg'

const Cardprops = (props) => {

  function handleClick() {

   props.setValue(!props.value)
   props.setText(props.text)
   props.setName(props.name)

  }

  return (
    // eslint-disable-next-line react/prop-types
    <div className='w-[250px] h-[250px] rounded-[12px] opacity-[0.5] transform hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out hover:opacity-[1] relative' id={props.id}  onClick={() => handleClick()} >


          <div className=' flex relative w-[250px] bg-[#280430] mt-[78%] rounded-[12px] justify-around bg-opacity-40 ' >
              <img className='w-[25px]' src={DetalheLeft} />
              <h1 className=' text-[white] text-1xl p-[10px] mt-[10px] '>{props.name}</h1>
              <img className='w-[25px]' src={DetalheRight} />
            </div>

    </div>


  )
}

export default Cardprops