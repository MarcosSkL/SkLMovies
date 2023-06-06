import React from 'react'
import Cabecalho from './Cabecalho'
import Navbarprin from './Navbarprin'

const Pagina = (props) => {

  return (
    <div className='h-full bg-gradient-to-tr from-gray-700 via-sky-950 to-black'>
     
      <Navbarprin />
      <div className="p-5 mb-4 bg-gradient-to-r">
        <div className="px-5 mx-5 bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent ">
          <h1 className='font-bold p-5'>{props.titulo}</h1>
        </div>
      </div>

      <div className='container pb-5 mb-5'>
        {props.children}
      </div>

      <div style={{ width: "100%" }} className="bg-dark mt-5 bottom-0 py-3 text-white text-center">
        <p>©2023 MarcosSkL</p>
      </div>

    </div>
  )
}

export default Pagina