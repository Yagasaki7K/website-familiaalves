import React from 'react'
import HomeDetails from './HomeDetails'
import Brasao from '../assets/logo.png'

const Navigation = () => {
    return (
        <HomeDetails>
            <img src={Brasao} alt="logo" />
            <ul className="menu">
                <li><a href="/">Início</a></li>
                <li><a href="/arvore">Árvore Genealógica</a></li>
                <li><a href="/historia">História de Pompílio e Lourdes</a></li>
            </ul>

            <h1 className="title">Família Alves</h1>
        </HomeDetails>
    )
}

export default Navigation