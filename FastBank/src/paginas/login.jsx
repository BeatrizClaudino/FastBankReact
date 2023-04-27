import React, { Component } from 'react';
import Formulario from '../componentes/Formulario';
import Header from '../componentes/Header';

const Login = () => {
    return ( 
        <div className='w-full h-screen dark:bg-gradient-to-t to-[#000511] from-[#1B3168]'>
            <Header/>
            <div className="flex items-center justify-center h-2/6">
                <h1 className='dark:text-light-100 font-semibold text-2xl'>Bem vindo de volta!</h1>
            </div>
            <Formulario/>
        </div>
     );
}
 
export default Login;