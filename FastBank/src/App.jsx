import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./paginas/Home";
import Login from "./paginas/login";
import { useNavigate } from 'react-router-dom'
// import axios from "axios";
// import Header from "./componentes/Header";


function App() {
    // //iniciando o estado do logado como falso
    // const [logado, setLogado] = useState(false)
    // const [dados, setDados] = useState("")
    // const navigate = useNavigate();

    // const logar = (login, senha) => {
    //     axios.post('http://127.0.0.1:8000/auth/jwt/create', {
    //         username: login,
    //         password: senha
    //     }).then((res) => {
    //         console.log(res)
    //         localStorage.setItem("Token", JSON.stringify({ acess: res.data.access, refresh: res.data.refresh }))
    //         localStorage.setItem("dados", JSON.stringify({ login: login, senha: senha }))
    //         setLogado(true)
    //     }).catch((erro) => {
    //         console.log(erro)
    //     })

    //     const defaultOptions = {
    //         headers: {
    //             Authorization: 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgxODQ1NDE0LCJqdGkiOiI1OWY4Mzk3MzI3MmE0Y2NlYTA5ZDk2ZDUzNGFjNmQ2MiIsInVzZXJfaWQiOjF9.aQGOIE-B_9zd2LMRmpj9DqIrP3qc14Abh-8Uu89969s'
    //         },
    //     }
    //     axios.get('http://127.0.0.1:8000/loja/clientes',
    //         { ...defaultOptions }).then((res) => {
    //             console.log(res)
    //         })
    //     navigate('/inicio')
    // }
    // const getAccessToken = () => {
    //     const info = JSON.parse(localStorage.getItem('Token'))
    //     alert(info.access)
    // }


    // useEffect(() => {
    //     setDados(JSON.parse(localStorage.getItem("dados")))
    // }, [logado])
    return (
        <BrowserRouter >
        {/* <Header dados={dados}></Header> */}
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/' element={<Home />} />
            </Routes>
        </BrowserRouter >

    )
};

export default App;