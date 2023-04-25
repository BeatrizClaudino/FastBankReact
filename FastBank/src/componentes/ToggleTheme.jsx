import React, { useEffect, useState } from 'react';
import {SunIcon, MoonIcon} from '@heroicons/react/24/solid'

const ToggleTheme = () => {
    const pageRef = document.documentElement.classList
    //PEGANDO O PADRÃO DO SO, PRETO OU BRANCO 
    const systemThemePreference = window.matchMedia('(prefers-color-scheme: dark)').matches
        const [dark, setDark] = useState(systemThemePreference)

    useEffect(() =>{
        dark && pageRef.add('dark')
    }, [])
    return ( 
        <>
        </>
     );
}
 
export default ToggleTheme;