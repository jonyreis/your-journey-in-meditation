import styled from 'styled-components';

export const BrindeContainer = styled.div`
    .background-h1 {
        background: linear-gradient(75.12deg, #671EAA 11.69%, rgba(169, 64, 238, 0.83) 106.88%);
        h1 {
            color: #fff;
            text-align: center;

            max-width: 960px;
            padding: 32px 0;
            margin: 0 auto;
            @media (max-width: 600px) {
                font-size: 32px;
                padding: 40px 20px;
            }
            @media (max-width: 420px) {
                font-size: 28px;
                padding: 40px 10px;
            }
        }
    }
    .descricao-foto {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: flex-start;
        max-width: 960px;
        margin: 3rem auto;
        @media (max-width: 970px) {
            padding: 0 20px;
        }
        @media (max-width: 420px) {
            padding: 0 10px;
        }
        @media (max-width: 840px) {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        div {
            color: #333;
            font-size: 24px;
            margin-top: 2rem;
            h2 {
                margin-bottom: 1rem;
                @media (max-width: 420px) {
                    font-size: 24px;
                }
            }
            p {
                @media (max-width: 420px) {
                    font-size: 20px;
                }
            }
        }
        img {
            max-width: 100%;
        }
    }
`;
