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
        }
    }
    .descricao-foto {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: flex-start;
        max-width: 960px;
        margin: 3rem auto;
        div {
            color: #333;
            font-size: 24px;
            margin-top: 2rem;
            h2 {
                margin-bottom: 1rem;
            }
        }
    }
`;