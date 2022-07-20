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

    p {
        margin-bottom: 1rem;
    }
`

export default HomeDetails