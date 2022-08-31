import '../App.css'
import { useState } from 'react'

import HomeDetails from '../components/HomeDetails'
import Navigation from '../components/Navigation'


function Arvore() {
    
    const [show, setShow] = useState('')
    
    return (
        <div className="App">
            <Navigation/>
            <HomeDetails>
                <h3 className="subtitle">Árvore Genealógica</h3>

                <div className="familytree">
                    <ul>
                        <a href="#"><li>Pompílio Alves Filho</li></a>
                        <a href="#"><li>Lourdes Tomaz Alves</li></a>
                    </ul>

                    <h2>FILHOS</h2>
                    <ul>
                        <a onClick={() => setShow('Andrea')}><li>Andréa Ribeiro Alves Bonfim</li></a>
                        <a onClick={() => setShow('AnaMaria')}><li>Ana Maria Rodrigues de Paula</li></a>
                        <a onClick={() => setShow('Daniel')}><li>Daniel Tomaz Alves</li></a>
                        <a onClick={() => setShow('Debora')}><li>Débora Alves</li></a>
                        <a onClick={() => setShow('Eliseo')}><li>Eliseo Alves</li></a>
                        <a onClick={() => setShow('Ester')}><li>Ester Alves Lemos</li></a>
                        <a onClick={() => setShow('Ivonete')}><li>Ivonete Alves</li></a>
                        <a onClick={() => setShow('Joao')} className="death"><li>João Alves</li></a>
                    </ul>
                    <ul>
                        <a onClick={() => setShow('Lucas')}><li>Lucas Alves</li></a>
                        <a onClick={() => setShow('Marcos')}><li>Marcos Alves Ceneme</li></a>
                        <a onClick={() => setShow('Maria')} className="death"><li>Maria Alves</li></a>
                        <a onClick={() => setShow('Marlene')}><li>Marlene Torres de Azevedo</li></a>
                        <a onClick={() => setShow('Marta')}><li>Marta Alves Wally</li></a>
                        <a onClick={() => setShow('Miriam')}><li>Miriam Faria</li></a>
                        <a onClick={() => setShow('Pedro')}><li>Pedro Tomaz Alves</li></a>
                        <a onClick={() => setShow('Raquel')}><li>Raquel Alves dos Santos</li></a>
                    </ul>
                </div>

                <hr />

                <h1 className="info">Informações</h1>
                <p>Selecione um membro da família para saber mais ..</p>

                {
                    show === 'Andrea' ? <div className="container">
                    <h2>Andréa Ribeiro Alves Bonfim</h2>
                    <h3>Cônjuge: Valdir Alves Bonfim</h3>
                    <h4>☆ xx/xx/xx ({new Date().getFullYear() - 1959} anos)</h4>
                    {/* <h4>✝ xx/xx/xx ({new Date().getFullYear() - 1959} anos)</h4> */}
                    
                    <div className="row">
                        <h4>Filhos: Davi</h4>
                        {/* <h4>Netos: xx (Xx), xx (Xx) e xx (Xx)</h4> */}
                    </div>
                </div> : null
                }
                
                {
                    show === 'AnaMaria' ? <div className="container">
                    <h2>Ana Maria Rodrigues de Paula</h2>
                    <h3>Cônjuge: Wantuil Rodrigues de Paula</h3>
                    <h4>☆ xx/xx/xx ({new Date().getFullYear() - 1959} anos)</h4>
                    {/* <h4>✝ xx/xx/xx ({new Date().getFullYear() - 1959} anos)</h4> */}
                    
                    <div className="row">
                        <h4>Filhos: Fernanda, Juliana e Santiago</h4>
                        <h4>Netos: João Gabriel (Juliana), Nicoly (Santiago)</h4>
                        <h4>Bisnetos: Valentina (Nicoly)</h4>
                    </div>
                </div> : null
                }

                {
                    show === 'Daniel' ? <div className="container">
                    <h2>Daniel Tomaz Alves</h2>
                    {/* <h3>Cônjuge: XXXXXXXX</h3> */}
                    <h4>☆ 22/08/1990 ({new Date().getFullYear() - 1990} anos)</h4>
                    {/* <h4>✝ xx/xx/xx ({new Date().getFullYear() - 1959} anos)</h4> */}
                    
                    <div className="row">
                        {/* <h4>Filhos: Xx, xx, xx</h4>
                        <h4>Netos: xx (Xx), xx (Xx) e xx (Xx)</h4> */}
                    </div>
                </div> : null
                }

                {
                    show === 'Debora' ? <div className="container">
                    <h2>Débora Alves</h2>
                    {/* <h3>Cônjuge: XXXXXXXX</h3> */}
                    <h4>☆ 22/05/1972 ({new Date().getFullYear() - 1972} anos)</h4>
                    {/* <h4>✝ xx/xx/xx ({new Date().getFullYear() - 1959} anos)</h4> */}
                    
                    <div className="row">
                        {/* <h4>Filhos: Xx, xx, xx</h4>
                        <h4>Netos: xx (Xx), xx (Xx) e xx (Xx)</h4> */}
                    </div>
                </div> : null
                }

                {
                    show === 'Eliseo' ? <div className="container">
                    <h2>Eliseo Alves</h2>
                    {/* <h3>Cônjuge: XXXXXXXX</h3> */}
                    <h4>☆ 05/05/1958 ({new Date().getFullYear() - 1958} anos)</h4>
                    {/* <h4>✝ xx/xx/xx ({new Date().getFullYear() - 1959} anos)</h4> */}
                    
                    <div className="row">
                        {/* <h4>Filhos: Xx, xx, xx</h4>
                        <h4>Netos: xx (Xx), xx (Xx) e xx (Xx)</h4> */}
                    </div>
                </div> : null
                }

                {
                    show === 'Ester' ? <div className="container">
                    <h2>Ester Alves Lemos</h2>
                    <h3>Cônjuge: Geraldo Lemos</h3>
                    <h4>☆ 12/01/1970 ({new Date().getFullYear() - 1970} anos)</h4>
                    {/* <h4>✝ xx/xx/xx ({new Date().getFullYear() - 1959} anos)</h4> */}
                    
                    <div className="row">
                        <h4>Filhos: Christovão, Estevam e Sofia</h4>
                        {/* <h4>Netos: xx (Xx), xx (Xx) e xx (Xx)</h4> */}
                    </div>
                </div> : null
                }

                {
                    show === 'Ivonete' ? <div className="container">
                    <h2>Ivonete Aparecida Alves Costa</h2>
                    <h3>Cônjuge: Alfredo Alves Costa</h3>
                    <h4>☆ 15/07/1970 ({new Date().getFullYear() - 1970} anos)</h4>
                    {/* <h4>✝ xx/xx/xx ({new Date().getFullYear() - 1959} anos)</h4> */}
                    
                    <div className="row">
                        <h4>Filhos: Arthur, Rebeca e Larissa</h4>
                        {/* <h4>Netos: xx (Xx), xx (Xx) e xx (Xx)</h4> */}
                    </div>
                </div> : null
                }

                {
                    show === 'Joao' ? <div className="container">
                    <h2>João Alves</h2>
                    <h3>Cônjuge: Eliete Alves</h3>
                    <h4>☆ 05/06/1955 ({new Date().getFullYear() - 1955} anos)</h4>
                    <h4>✝ 14/09/2015 (60 anos)</h4>
                    
                    <div className="row">
                        <h4>Filhos: Rodrigo (Oyama), Fabiana (Oyama), Diego (Eliete), Thomas (Eliete) e João (Eliete)</h4>
                        <h4>Netos: xx (Rodrigo)</h4>
                    </div>
                </div> : null
                }

                {
                    show === 'Lucas' ? <div className="container">
                    <h2>Lucas Alves</h2>
                    <h3>Cônjuge: XXXXXXXX</h3>
                    <h4>☆ 17/07/1963 ({new Date().getFullYear() - 1963} anos)</h4>
                    {/* <h4>✝ xx/xx/xx ({new Date().getFullYear() - 1959} anos)</h4> */}
                    
                    <div className="row">
                        <h4>Filhos: Xx, xx, xx</h4>
                        {/* <h4>Netos: xx (Xx), xx (Xx) e xx (Xx)</h4> */}
                    </div>
                </div> : null
                }

                {
                    show === 'Marcos' ? <div className="container">
                    <h2>Marcos Alves Ceneme</h2>
                    <h3>Cônjuge: Natália Alves Ceneme</h3>
                    <h4>☆ 18/08/1959 ({new Date().getFullYear() - 1959} anos)</h4>
                    {/* <h4>✝ xx/xx/xx ({new Date().getFullYear() - 1959} anos)</h4> */}
                    
                    <div className="row">
                        <h4>Filhos: Talita (Glória), Jonathan (Glória), Anderson (Filomena), Marcelo (Filomena), Thais (Desconhecida) e Alana (Natália)</h4>
                        {/* <h4>Netos: xx (Xx), xx (Xx) e xx (Xx)</h4> */}
                    </div>
                </div> : null
                }

                {
                    show === 'Maria' ? <div className="container">
                    <h2>Maria Alves</h2>
                    {/* <h3>Cônjuge: XXXXXXXX</h3> */}
                    <h4>☆ xx/xx/xx ({new Date().getFullYear() - 1959} anos)</h4>
                    <h4>✝ xx/xx/xx ({new Date().getFullYear() - 1959} anos)</h4>
                    
                    <div className="row">
                        {/* <h4>Filhos: Xx, xx, xx</h4>
                        <h4>Netos: xx (Xx), xx (Xx) e xx (Xx)</h4> */}
                    </div>
                </div> : null
                }

                {
                    show === 'Marlene' ? <div className="container">
                    <h2>Marlene Torres de Azevedo</h2>
                    <h3>Cônjuge: Cecílio Torres de Azevedo (Falecido)</h3>
                    <h4>☆ 02/09/1960 ({new Date().getFullYear() - 1960} anos)</h4>
                    {/* <h4>✝ xx/xx/xx ({new Date().getFullYear() - 1959} anos)</h4> */}
                    
                    <div className="row">
                        <h4>Filhos: Kacilene, Kamila, Kacia, Kalebe</h4>
                        <h4>Netos: Liz (Kacilene), Beatriz (Kacilene)</h4>
                    </div>
                </div> : null
                }

                {
                    show === 'Marta' ? <div className="container">
                    <h2>Marta Alves Wally</h2>
                    <h3>Cônjuge: Wandir Wially Junior</h3>
                    <h4>☆ 02/09/1961 ({new Date().getFullYear() - 1961} anos)</h4>
                    {/* <h4>✝ xx/xx/xx ({new Date().getFullYear() - 1959} anos)</h4> */}
                    
                    <div className="row">
                        <h4>Filhos: Priscila</h4>
                        {/* <h4>Netos: xx (Xx), xx (Xx) e xx (Xx)</h4> */}
                    </div>
                </div> : null
                }

                {
                    show === 'Miriam' ? <div className="container">
                    <h2>Miriam Faria</h2>
                    <h3>Cônjuge: Adalberto Borges Faria</h3>
                    <h4>☆ 26/10/1952 ({new Date().getFullYear() - 1952} anos)</h4>
                    {/* <h4>✝ xx/xx/xx ({new Date().getFullYear() - 1959} anos)</h4> */}
                    
                    <div className="row">
                        <h4>Filhos: Abner, Adna, Marcela, Helder, Mariana</h4>
                        <h4>Netos: Ian (Abner), Rute (Marcela), Luis (Mariana), Carlos (Mariana), Ariel (Mariana)</h4>
                    </div>
                </div> : null
                }

                {
                    show === 'Pedro' ? <div className="container">
                    <h2>Pedro Tomaz Alves</h2>
                    <h3>Cônjuge: Josanay Alves</h3>
                    <h4>☆ 23/09/1967 ({new Date().getFullYear() - 1967} anos)</h4>
                    {/* <h4>✝ xx/xx/xx ({new Date().getFullYear() - 1959} anos)</h4> */}
                    
                    <div className="row">
                        <h4>Filhos: Melissa, Gabriela, Nayana, Felipe e Luana</h4>
                        {/* <h4>Netos: xx (Xx), xx (Xx) e xx (Xx)</h4> */}
                    </div>
                </div> : null
                }

                {
                    show === 'Raquel' ? <div className="container">
                    <h2>Raquel Alves dos Santos</h2>
                    {/* <h3>Cônjuge: XXXXXXXX</h3> */}
                    <h4>☆ 11/11/1955 ({new Date().getFullYear() - 1955} anos)</h4>
                    {/* <h4>✝ xx/xx/xx ({new Date().getFullYear() - 1959} anos)</h4> */}
                    
                    <div className="row">
                        <h4>Filhos: André (Célio), Leonardo (Célio)</h4>
                        <h4>Netos: xx (Xx), xx (Xx) e xx (Xx)</h4>
                    </div>
                </div> : null
                }

            </HomeDetails>
        </div>
    )
}

export default Arvore
