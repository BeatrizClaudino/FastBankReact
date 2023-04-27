import React, { Component } from 'react';
import Botao from './Botao';

const Formulario = () => {
    return (  
        <>
            <form className='flex flex-col items-center justify-center gap-10 -mt-20 mx-5 '>
                <label className='dark: text-light-100'>CPF</label>
                <input className='w-full max-w-lg  h-9 rounded-md' type='text' required placeholder='Digite o seu cpf'></input>
                <label className='dark: text-light-100'>Senha</label>
                <input className='w-full max-w-lg h-9 rounded-md' type='password' required placeholder='Digite a sua senha'></input>
                <Botao tipo='submit' texto='Login'/>
            </form>
        </>
    );
}
 
export default Formulario;