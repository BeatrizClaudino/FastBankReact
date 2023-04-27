import React, { Component } from 'react';
import Formulario from '../componentes/Formulario';
import Header from '../componentes/Header';

const Login = () => {
    return ( 
        <div className='w-full h-screen dark:bg-gradient-to-t to-[#000511] from-[#1B3168]'>
            <Header/>
            <Formulario/>
        </div>
     );
}
 
export default Login;