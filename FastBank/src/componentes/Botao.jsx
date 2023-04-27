import React from 'react'

const Botao = (props) => {
    return ( 
        <button className='bg-[#7BA8FF] w-80 h-14 rounded-lg' type={props.tipo}>{props.texto}</button>
    );
}
 
export default Botao;