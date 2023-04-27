import React, { Component } from 'react';

const Formulario = () => {
    return (  
        <>
            <form className='h-full flex flex-col items-center justify-center gap-10 -mt-20 mx-5'>
                <input className='w-full max-w-md h-8' type='text' required placeholder='Digite o seu cpf'></input>
                <input className='w-full max-w-md h-8' type='password' required placeholder='Digite a sua senha'></input>
                <button className='bg-black' type='submit'/>
            </form>
        </>
    );
}
 
export default Formulario;