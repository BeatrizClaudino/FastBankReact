import React, { Component } from 'react';

const Formulario = () => {
    return (  
        <>
            <form className='bg-'>
                <input className='' type='text' required placeholder='Digite o seu cpf'></input>
                <input className='' type='password' required placeholder='Digite a sua senha'></input>
                <button className='bg-black' type='submit'/>
            </form>
        </>
    );
}
 
export default Formulario;