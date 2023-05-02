import React, { Component, useState } from 'react';
import Header from '../componentes/Header';
import Botao from '../componentes/Botao';

const Login = ({login}) => {
    const [cpf,setCpf] = useState("")
    const [senha,setSenha] = useState("")

    return ( 
        <div className='w-full h-screen dark:bg-gradient-to-t to-[#000511] from-[#1B3168]'>
            <Header/>
            <div className="flex items-center justify-center h-2/6">
                <h1 className='dark:text-light-100 font-semibold text-2xl'>Bem vindo de volta!</h1>
            </div>
            <form className='flex flex-col items-center justify-center gap-10 -mt-20 mx-5 '>
                <label className='dark: text-light-100'>CPF</label>
                <input className='w-full max-w-lg  h-9 rounded-md' type='text' required placeholder='Digite o seu cpf'></input>
                <label className='dark: text-light-100'>Senha</label>
                <input className='w-full max-w-lg h-9 rounded-md' type='password' required placeholder='Digite a sua senha'></input>
                <Botao evento={() =>login(cpf, senh)} tipo='submit' texto='Login'/>
            </form>
        </div>
     );
}
 
export default Login;