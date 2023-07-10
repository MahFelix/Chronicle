/* eslint-disable react/prop-types */

const Popup = (props) => {


  return (
    // eslint-disable-next-line react/prop-types
    <div  style={{display: props.mostrar ? 'flex' : 'none'}} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-20 transform transition w-[700px] h-[800px] duration-500 hover:scale-110 max-h-500px overflow-y-auto  max-lg:p-8
       max-lg:w-[500px] max-lg:h-[700px] ">
        <h1 className="text-xl font-bold mb-2">{props.name}</h1>
        <p>{props.text}</p>
        <button onClick={() => props.setValue(!props.mostrar)}
          className="bg-red-500 text-white px-4 py-2 rounded mt-4"

        >
          Fechar
        </button>
      </div>
    </div>
  );
};

export default Popup;