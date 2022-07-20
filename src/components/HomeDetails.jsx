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

    .title {
        margin-bottom: 2rem;
        text-transform: uppercase;
    }
`

export default HomeDetails