import styled from 'styled-components'

const HomeDetails = styled.div`
    width: 80rem;

    @media (max-width: 1024px) {
        width: 64rem;
    }

    @media (max-width: 768px) {
        width: 46rem;
    }

    @media (max-width: 600px) {
        width: 34rem;
    }

    @media (max-width: 414px) {
        width: 22rem;
    }

    @media (max-width: 375px) {
        width: 20rem;
    }

    @media (max-width: 320px) {
        width: 16rem;
    }

    img {
        width: 20rem;

        @media (max-width: 320px) {
            width: 16rem;
        }
    }

    ul {
        list-style: none;
        display: flex;
        justify-content: center;
        margin-left: 2rem;

        @media (max-width: 414px) {
            margin-left: 1.5rem;
            display: block;
            margin-top: -1rem;
        }

        li {
            margin-right: 1rem;
            text-decoration: underline;
            cursor: pointer;
            margin-bottom: 1rem;

            a {
                color: #1A1A1A;

                :hover {
                    transition: 0.5s;
                    color: #1784fe;
                }
            }
        }
    }

    .title {
        margin-bottom: 2rem;
        text-transform: uppercase;
    }

    .subtitle {
        margin-top: -2rem;
        margin-bottom: 2rem;
    }

    p {
        margin-bottom: 1rem;
    }

    hr {
        border: 0.1px solid #504f4f;
        width: 50%;
        margin: 2rem 0rem 2rem 20rem;
    }

    .info {
        margin-top: 1rem;
    }

    .familytree {
        margin-left: -2.5rem;

        h2 {
            margin-left: 2rem;
            margin-bottom: 1rem;
            margin-top: 1rem;
        }

        ul {
            display: flex;
            margin-bottom: 1rem;

            .death {
                background: #7e7e7e;

                :hover {
                    background: #504f4f;
                    transition: 1s;
                }
            }
        
            a {
                color: #e5e5e5;
                background: #1784fe;

                :hover {
                    background: #054fa5;
                    transition: 1s;
                }
            }
            
            a, li {
                text-decoration: none;
                margin-left: 1rem;
                width: 100px;
                font-weight: bold;
                cursor: pointer;
                border-radius: 15px;
                padding: 5px;

                display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;
            }
        }
    }

    .container {
        max-width: 400px;
        margin-left: 26rem;

        .row {
            margin-top: 1rem;
        }
    }
`

export default HomeDetails