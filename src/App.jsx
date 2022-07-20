import { useState } from 'react'
import './App.css'

import HomeDetails from '../src/components/HomeDetails'
import Brasao from '/src/assets/logo.png'

function App() {

    return (
        <div className="App">
            <HomeDetails>
                <img src={Brasao} alt="logo" />
                <ul>
                    <li><a href="/">Início</a></li>
                    <li><a href="/arvore">Árvore Genealógica</a></li>
                    <li><a href="/historia">História de Pompílio e Lourdes</a></li>
                </ul>

                <h1 className="title">Família Alves</h1>

                <h2>Identidade Visual</h2>
                <p>
                    Eis o significado do brasão da Família Alves e todos os seus detalhes: A começar pelas coroas que representam o Rei - Pompílio e a Rainha - Lourdes.
                </p>

                <p>
                    Do lado esquerdo temos a flor de primavera, que representa não só o bairro
                    de Campinas - uma das primeiras casas da família e que duram até hoje -, como
                    também a primavera, o rejuvenescimento da família.
                </p>

                <p>
                    Ao lado direito temos o café, uma planta que foi o início do bairro primavera
                    e o bairro era um do maiores terrenos na cidade de Campinas a possuir áreas e 
                    mais áreas com o plantio do café. 
                </p>

                <p>
                    Ao lado de dentro do brasão na parte superior esquerda temos o cachorro, um animal
                    que é a representatividade da família, esteve presente desde o início da família
                    e permanece até hoje com nomes memoráveis como: Rex, Toquinho e Leão.
                </p>

                <p>
                    Ao lado superior direito temos o fogão a lenha, uma dos maiores simbolos da família
                    na qual representa o almoço de Domingo, a união, e a comida que nunca deixou de faltar
                    em nossas mesas.
                </p>

                <p>
                    Ao lado inferior esquerdo temos a união dos materiais de bombeiro, um simbolo de
                    salvação que não só ajudou Pompílio, como sendo sua principal profissão, como
                    juntou vários de seus filhos na profissão de militar, desde bombeiros, membros
                    do Exército e membros da Polícia Militar que fazem parte da família até os dias de hoje.
                </p>

                <p>
                    Ao lado inferior direito temos a planta de bananeira, que além de ser um dos
                    simbolos da família, é uma fruta que permanece com a família até os dias de hoje, 
                    sendo cuidada e tratada na casa da família, sempre trazer fartura da fruta e sendo
                    um dos maiores ingredientes em sobremesas e no prato da família.
                </p>
                
                <p>
                    Ao nome escrito abaixo do brasão, uma frase em que a Lourdes sempre dizia quando chegava
                    a um terreno novo ou a uma conquistava: Ebenézer (אבנעזר), que tem o significado de: Até aqui nos ajudou o Senhor", mas se manteve no simbolo da família em hebraico.
                </p>

                <p>
                    Abaixo de Ebenézer, existe as atuais quatro estrelas, representando as quatro gerações da Família Alves que veio após o Pompílio, sendo a primeira seus filhos, a segunda seus netos,
                    a terceira seus bisnetos e a quarta, sendo seus tataranetos, atualmente é a última geração da família.
                </p>

                <p>
                    As cores azul e branco representam tanto a bandeira da cidade de Campinas, uma das primeiras cidades onde a família se hospedou e também representa a bandeira do Estado de Mato Grosso, aonde boa parte da família também se cultivou e vive até os dias de hoje.
                </p>
            </HomeDetails>
        </div>
    )
}

export default App
