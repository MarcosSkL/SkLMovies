import React from 'react'
import Cabecalho from './Cabecalho'
import Header from './Header'
import Banner from './BannerFilmes'


const Pagina = (props) => {

  return (
    <div>
     
     
      <div className="p-5 mb-4 bg-gradient-to-r">
        <div className="px-5 mx-5 bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent ">
          <h1 className='font-bold p-5'>{props.titulo}</h1>
        </div>
      </div>

      <div className='container pb-5 mb-5'>
        {props.children}
      </div>

    </div>
  )
}

export default Pagina