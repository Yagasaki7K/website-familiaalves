import './App.css'

import HomeDetails from '../src/components/HomeDetails'
import Navigation from './components/Navigation'

function App() {

    return (
        <div className="App">
            <Navigation/>
            <HomeDetails>
                <h2>Identidade Visual</h2>
                <p>
                    Eis o significado do brasão da <strong>Família Alves</strong> e todos os seus detalhes: A começar pelas coroas que representam o Rei - <strong>Pompílio</strong> e a Rainha - <strong>Lourdes</strong>.
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
                    salvação que não só ajudou <strong>Pompílio</strong>, como sendo sua principal profissão, como
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
                    Ao nome escrito abaixo do brasão, uma frase em que a <strong>Lourdes</strong> sempre dizia quando chegava
                    a um terreno novo ou a uma conquistava: <strong>Ebenézer (אבנעזר)</strong>, que tem o significado de: Até aqui nos ajudou o Senhor", mas se manteve no simbolo da família em hebraico.
                </p>

                <p>
                    Abaixo de Ebenézer, existe as atuais quatro estrelas, representando as quatro gerações da <strong>Família Alves</strong> que veio após o <strong>Pompílio</strong>, sendo a primeira seus filhos, a segunda seus netos,
                    a terceira seus bisnetos e a quarta, sendo seus tataranetos, atualmente é a última geração da família.
                </p>

                <p>
                    As cores azul e branco representam tanto a bandeira da cidade de Campinas, uma das primeiras cidades onde a família se hospedou e também representa a bandeira do Estado de Mato Grosso, aonde boa parte da família também se cultivou e vive até os dias de hoje.
                </p>

                <a href="./src/assets/ebenezer.png" download>Download Brasão (Ebenézer)</a> - &nbsp;
                <a href="./src/assets/alves.png" download>Download Brasão (Alves)</a>
            </HomeDetails>
        </div>
    )
}

export default App
